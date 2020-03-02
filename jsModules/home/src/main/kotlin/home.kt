
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
    val url = document.URL.let {
        if (it.contains("#"))
            it.split("#", limit = 1)[1]
        else
            ""
    }
    when (url) {
        "family" -> family(root)
        else -> standard(root)
    }
    println("root is $root")
}
fun family(root:Element?){
    root?.newDiv {
        p{
            +"hi family"
        }
    }
}
fun standard(root:Element?){
    root?.newDiv {
        h1 {
            +"In memory of Nancy Tan"
            println("and here")
        }
        p {

            +"This is a placeholder web site at this time. More may be added later, but for now there is only updates on plans"
        }
        p{
            +" - "
        }
        p {
            +"A memorial gathering for Nancy is planned for this Saturday March 7th, at Hyams Beach (near Jervis Bay)"
        }
        p{
            +"More details and will be added later today (March 2) as plans are confirmed.  It is planned to be between 2pm and 4pm as this is the best forecast window to avoid rain over the next week."
        }
    }
}
