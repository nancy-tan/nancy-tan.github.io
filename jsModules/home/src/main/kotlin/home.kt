
import kotlinx.html.*
import kotlinx.html.dom.create
import kotlinx.html.js.onClickFunction
//import nz.salect.objjson.loads
import org.w3c.dom.Element
import org.w3c.dom.HTMLDivElement
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
        //"family" in tags -> family(root)
        "food" in tags -> food(root)
        "slides" in tags -> slides(root)
        else -> standard(root, true)
    }
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
        }
        h4{
            +"There will be a big pickup from Costco or somewhere, so individual gestures not needed, but appreciated none the less.  To reduce clashes...here is what is known."
        }
        ul {
            li { +"Erica Rudwick -- cake, not known what type yet" }
        }
    }

}
data class Slide(val url:String)
val theSlides = listOf(
    Slide("https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg"),
    Slide("https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80")
)
fun Element.showSlide(index:Int){
    this.innerHTML = ""
    if(this is DIV) {
        img {
            src = theSlides[index].url
        }
    }
}
fun DIV.showSlide(index:Int){
    if (index != 0)
        img {
            src = theSlides[index].url
        }
}
fun slides(root: Element?){
    root?.newDiv(true){
        var slideindex = 0
        h1 {
            +"the slides"
        }
        p {
            +"slides will disappear in 5mins"
        }
        lateinit var sdiv:DIV
        div {
            id = "picture"
            sdiv = this
        }
        //val slideDiv: Element? = document.getElementById("picture")
        sdiv.showSlide(slideindex)
        br {}
        button {
            +"next slide"
            onClickFunction = {
                if (slideindex < theSlides.lastIndex) {
                    slideindex++
                    sdiv.showSlide(slideindex)
                } else {
                    println("outside of list")
                }
            }
        }
    }
}

fun standard(root:Element?, clear: Boolean){
    root?.newDiv(clear) {
        h1 {
            +"In loving memory of Nancy Tan"
        }
        p{
            +" --- "
        }
        p {
            +"A memorial gathering for Nancy will take place this Saturday March 7th, at Hyams Beach (near Jervis Bay)"
        }
        p{
            +"Slides for the memorial will show on this page at the time of the memorial."
        }
        p{
            +"Update March 4: More details and will be added later today (March 4 or Tomorrow March 5)."
            +"Plans will need to allow for the weather. It is planned for the memorial gathering to be on the beach, between 2pm and 4pm. "
            +"The weather is still forecast as this being window to avoid rain, but we will update the exact location on the beach closer to the time. "
            +"A more overcast day means less distance down the beach for a quiet location, but a greater risk of rain."
        }
        p{
            +"We will have 'afternoon tea' food, plus some wine or soft drink.  Let organisers know if you plan to bring something to share, but this is not needed as there should be sufficient"
            +"A is a list of 'who is bringing what' will be available to avoid duplication."
        }
        p{
            +"Some of us will have brunch/lunch together prior to the memorial and any who wish to join us are welcome.  Location for lunch also to be confirmed, but current plan is the Huskisson Hotel (contact sharon tai)."
        }
    }
}


