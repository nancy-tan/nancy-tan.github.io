
import kotlinx.html.*
import kotlinx.html.dom.create
import kotlinx.html.js.img
import kotlinx.html.js.onClickFunction
//import nz.salect.objjson.loads
import org.w3c.dom.Element
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLScriptElement
import org.w3c.dom.HTMLTitleElement
import org.w3c.dom.get
import kotlin.browser.document
import kotlin.js.Date

fun Element.newDiv(clear: Boolean = true, code: DIV.() -> Unit) {

    val div = document.create.div {
        code()
    }
    if (clear) this.innerHTML = ""
    this.appendChild(div)
}
val Date.time get() = getTime().toLong()
val Date.str get()= " ${this.getMonth()} ${this.getDate()}  ${this.getHours()} ${this.getMinutes()}"
fun isNow():Boolean{
    val now = Date().time
    val nowDate = Date(now)
    val startDate = Date(2020,2,7,14)
    val endDate = Date(2020,2,7,17)
//    println("dateN  ${nowDate.str}")
//    println("dateS  ${nowDate.str}")
//    println("dateE  ${nowDate.str}")
//    println("start ${now> startDate.getTime()} end ${now< endDate.getTime()}")
  return (now> startDate.getTime())&&(now< endDate.getTime())
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
        isNow() -> {
            slides(root)
            standard(root, false)
        }
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
    Slide("static/img/Slide1.JPG"),
    Slide("static/img/Slide2.JPG"),
    Slide("static/img/Slide3.JPG"),
    Slide("static/img/Slide4.JPG"),
    Slide("static/img/Slide5.JPG"),
    Slide("static/img/Slide6.JPG"),
    Slide("static/img/Slide7.JPG"),
    Slide("static/img/Slide8.JPG"),
    Slide("static/img/Slide9.JPG"),
    Slide("static/img/Slide10.JPG"),
    Slide("static/img/Slide11.JPG")
)
fun Element.showSlide(index:Int){
    this.innerHTML = ""
    val myimg = document.create.img {
        src = theSlides[index].url
    }
    this.appendChild(myimg)
}
fun slides(root: Element?){
    root?.newDiv(true){
        var slideindex = 0
        p{
            +"TOW - 'The one where/with'"
        }
        button {
            +"Previous Slide"
            onClickFunction = {
                val slideDiv: Element? = document.getElementById("picture")
                println("slideDiv is $slideDiv")
                if (slideindex <= theSlides.lastIndex && slideindex > 0) {
                    slideindex--
                    slideDiv?.showSlide(slideindex)
                } else {
                    println("outside of list")
                }
            }
            id = "button1"
        }
        button {
            +"Next Slide"
            onClickFunction = {
                val slideDiv: Element? = document.getElementById("picture")
                println("slideDiv is $slideDiv")
                if (slideindex < theSlides.lastIndex) {
                    slideindex++
                    slideDiv?.showSlide(slideindex)
                } else {
                    println("outside of list")
                }
            }
            id = "button2"
        }

        br {  }
        br {  }

        div {
            id = "picture"
            img {
                src = theSlides[0].url
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
            +"Slides for the memorial will show on this page at the time of the memorial. (but instructions will then be below the slides)"
        }
        p{
            +"We are in a house at the corner of Bayview Ave and Cyrus St (diagonally opposite the Seamans Beach carpark)"
            +"Provided wind and rain or a large group deciding to set up just before us edoes not interfere, we will gather on the beach near the Seamans Beach Carpark"
            +"Someone will be at the house if plans are interupted"
        }
        p{
            +"We will have 'afternoon tea' together. Some food, plus some wine or soft drink.  Let us know if you also plan to bring something to share,"
            +"but this is not needed as there should be more than sufficient to share already."
            +"A is a list of 'who is bringing what' will be available to avoid duplication."
        }
        p{
            +"Some of us will have brunch/lunch together prior to the memorial and any who wish to join us are welcome.  "
            +"Brunch/lunch is booked at Huskisson Hotel (booking for 11.45am - under the name Sharon Waldron)."
        }
    }
}


