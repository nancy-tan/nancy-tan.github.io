
import kotlinx.html.*
import kotlinx.html.dom.create
//import nz.salect.objjson.loads
import org.w3c.dom.Element
import org.w3c.dom.HTMLScriptElement
import org.w3c.dom.HTMLTitleElement
import org.w3c.dom.get
import kotlin.browser.document

fun Element.newDiv(clear: Boolean = true, code: DIV.() -> Unit) {

    val div = document.create.div {
        code()
    }
    if (clear) this.innerHTML = ""
    this.appendChild(div)
}

fun main() {
    println("ok running!")
    println("ok running more!")
    val root: Element? = document.getElementById("root")
    println("root is $root")
    root?.newDiv {
        h1 {
            +"heading"
            println("and here")
        }
        p {
            +"and here is text"
        }
    }
}