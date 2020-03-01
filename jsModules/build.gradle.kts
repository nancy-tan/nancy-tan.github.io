import org.gradle.util.GradleVersion.version
import org.jetbrains.kotlin.gradle.tasks.Kotlin2JsCompile

version(Versions.project)

buildscript {
    repositories {
        mavenCentral()
        maven("https://plugins.gradle.org/m2/")
        maven("https://oss.sonatype.org/content/repositories/snapshots/")
    }

    dependencies {
        classpath(Libraries.kotlinGradlePlugin)
        classpath(Libraries.objJson)
    }
}

plugins {
    `embedded-kotlin`
}


val rootBuildDir = rootProject.buildDir

tasks {
    "clean" {
        doLast { delete(buildDir) }
    }
}

subprojects {

    val sharedJsName = "NancyTan"

    apply(plugin = "kotlin2js")

    group = "nz.salect"

    repositories {
        mavenCentral()
        jcenter()
        maven("https://oss.sonatype.org/content/repositories/snapshots/")
    }

    dependencies {
        implementation("org.jetbrains.kotlin:kotlin-stdlib-js:${Versions.kotlin}")
        testImplementation("org.jetbrains.kotlin:kotlin-test-js:${Versions.kotlin}")


        if (this@subprojects.name.lastName != sharedJsName) {
            implementation(project(Projects.NancyTanJs))
        }
    }

    val subProjectJsDir = file("$buildDir/classes/kotlin/main")
    tasks {
        "compileKotlin2Js"(Kotlin2JsCompile::class) {
            kotlinOptions {
                //These allow in browser kotlin debugging
                sourceMap = true
                sourceMapEmbedSources = "always"
            }
        }
        val externalDependencies by registering {
            group = "build"
            description = "Unpack js dependency files for this module"

            val compileClasspath = configurations["compileClasspath"]
            val testCompileClasspath = configurations["testCompileClasspath"]
            inputs.property("compileClasspath", compileClasspath)

            outputs.dir(rootBuildDir)

            doLast {
                if (this@subprojects.name.lastName == sharedJsName) {
                    //Could not manage to extract kotlin.js at top level, at least
                    //we can avoid doing it multiple times here
                    //TODO figure out how
                    val libNames = listOf("kotlin-stdlib-js-.+\\.jar")
                    val testLibNames = listOf("kotlin-test-js-.+\\.jar")
                    extractExternalLibraries(compileClasspath, rootBuildDir, libNames)
                    extractExternalLibraries(testCompileClasspath, rootBuildDir, testLibNames)
                    copyJsFiles(rootBuildDir,"static/js")
                }
                extractModuleDependencies(compileClasspath, subProjectJsDir)
            }
        }
        "build" {
            dependsOn(externalDependencies)
            doLast { copyJsFiles(subProjectJsDir,"static/js") }
        }
    }
}



