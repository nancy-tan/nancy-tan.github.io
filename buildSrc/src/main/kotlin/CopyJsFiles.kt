import org.gradle.api.Plugin
import org.gradle.api.Project
import org.gradle.api.artifacts.Configuration
import org.gradle.kotlin.dsl.get
import java.io.File

val String.lastName get() = this.split('/').last()

fun Project.extractFromJarFile(jarFile: File, outputDir: File) {
    copy {
        includeEmptyDirs = false
        from(zipTree(jarFile))
        into(outputDir)
        include("**/*.js")
        exclude("META-INF/**", "**/*.meta.js")
    }
}

fun Project.extractExternalLibraries(
    compileClasspath: Configuration,
    outputDir: File,
    libNames: List<String>
) {
    val jarFiles = libNames.map { regex ->
        compileClasspath.single { it.name.matches(Regex(regex)) }
    }
    jarFiles.forEach { extractFromJarFile(it, outputDir) }
}

fun Project.extractModuleDependencies(compileClasspath: Configuration, outputDir: File) {
    val jarFiles = compileClasspath.files
    compileClasspath.allDependencies.forEach { dependency ->
        val jarFile = jarFiles.single {
            it.name.contains(dependency.name.lastName)
        }
        extractFromJarFile(jarFile, outputDir)
    }
}

fun Project.copyJsFiles(fromDir: File, intoDir:String) {
    copy {
        from(fromDir)
        into(file("${rootProject.rootDir}/$intoDir"))
        include("*.js")
        exclude("*.meta.js", "kotlin-test.js")
        rename {
            if (it.startsWith("jsModules_")) {
                it.split("_").last()
            } else it
        }
    }
}