
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
            +"In memory of Nancy Tan"
            println("and here")
        }
        p {
            +"A memorial gathering for Nancy is planned for this Saturday March 7th, at Hyams Beach (near Jervis Bay)"
        }
        p{
            +">More details and will be added later today as plans are confirmed.  It is planned to be between 2pm and 4pm as this is the best forecast window to avoid rain over the next week."
        }
    }
}
