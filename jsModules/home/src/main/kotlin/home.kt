
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
    val tags = document.URL.split("#").drop(1)

    when  {
        "family" in tags -> family(root)
        "food" in tags -> food(root)
        else -> standard(root, true)
    }
    println("root is $root")
}
fun family(root:Element?){
    root?.newDiv {
        h1 {
            +"Private Family Goodbye"
            println("and here")
        }
        p{
            +"Arrive between 11:00am and 11:30 at Hamilton funerals, 1015 Pacific Highway, Pymble"
        }
        p {
            +"Parking should be available on Pacific Hwy.  Following the family time to say goodbye, we can go to a nearby cafe for brunch."
        }
        p{

            +"The car to take Nancy to the crematorium will then leave at 1:30 to allow Nancy's mother to follow with Stewart."

            +"Adam from Hamilton funerals will advise when it is time."
        }
    }
    standard(root,false)
}

fun food(root:Element?){
    standard(root,true)
    root?.newDiv(false) {
        h1 {
            +"Some people have offered to bring food"
            println("and here")
        }
        h4{
            +"There will be a big pickup from Costco or somewhere, so individual gestures not needed, but appreciated none the less.  To reduce clashes...here is what is known. "

        }
        p{em{
            +"Let Ian or Sophie know, so the list can be shared"
        }

        }
        p{
            +"Erica -- cake, not known what type yet"
        }

    }

}

fun standard(root:Element?, clear: Boolean){
    root?.newDiv(clear) {

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
            +"More details and will be added later today (March 2) as plans are confirmed.  It is planned for the memorial gathering to be on the beach, between 2pm and 4pm as this is the best forecast window to avoid rain over the next week."

        }
        p{
            +"There will be some 'afternoon tea' food, plus wine or soft drink."
        }
        p{
            +"Some of us will have lunch together prior to the memorial and any who wish to join us are welcome.  Location for lunch also to be confirmed, but current plan is the Huskisson Hotel."
        }
    }
}
//val theSlides = listOf(
//    val div{
//
//    }
//)
fun slides(root:Element?, clear: Boolean){
    root?.newDiv(clear) {
        val slides = div{

        }
//        showSlide(slides, 0)
    }



}

