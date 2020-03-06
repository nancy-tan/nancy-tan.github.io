if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'home'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'home'.");
}
if (typeof this['kotlinx-html-js'] === 'undefined') {
  throw new Error("Error loading module 'home'. Its dependency 'kotlinx-html-js' was not found. Please, check whether 'kotlinx-html-js' is loaded prior to 'home'.");
}
var home = function (_, Kotlin, $module$kotlinx_html_js) {
  'use strict';
  var get_create = $module$kotlinx_html_js.kotlinx.html.dom.get_create_4wc2mh$;
  var Unit = Kotlin.kotlin.Unit;
  var div = $module$kotlinx_html_js.kotlinx.html.div_59el9d$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var drop = Kotlin.kotlin.collections.drop_ba2ldo$;
  var h1 = $module$kotlinx_html_js.kotlinx.html.h1_vmej1w$;
  var p = $module$kotlinx_html_js.kotlinx.html.p_8pggrc$;
  var h4 = $module$kotlinx_html_js.kotlinx.html.h4_zdyoc7$;
  var li = $module$kotlinx_html_js.kotlinx.html.li_yzv5uh$;
  var ul = $module$kotlinx_html_js.kotlinx.html.ul_pzlyaf$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var img = $module$kotlinx_html_js.kotlinx.html.js.img_6lw7hj$;
  var toString = Kotlin.toString;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var button = $module$kotlinx_html_js.kotlinx.html.button_whohl6$;
  var br = $module$kotlinx_html_js.kotlinx.html.br_5bz84p$;
  var img_0 = $module$kotlinx_html_js.kotlinx.html.img_evw26v$;
  var div_0 = $module$kotlinx_html_js.kotlinx.html.div_ri36nr$;
  function newDiv$lambda(closure$code) {
    return function ($receiver) {
      closure$code($receiver);
      return Unit;
    };
  }
  function newDiv($receiver, clear, code) {
    if (clear === void 0)
      clear = true;
    var div_0 = div(get_create(document), void 0, newDiv$lambda(code));
    if (clear)
      $receiver.innerHTML = '';
    $receiver.appendChild(div_0);
  }
  function get_time($receiver) {
    return Kotlin.Long.fromNumber($receiver.getTime());
  }
  function get_str($receiver) {
    return ' ' + $receiver.getMonth() + ' ' + $receiver.getDate() + '  ' + $receiver.getHours() + ' ' + $receiver.getMinutes();
  }
  function isNow() {
    var now = get_time(new Date());
    var nowDate = new Date(now);
    var startDate = new Date(2020, 2, 7, 14);
    var endDate = new Date(2020, 2, 7, 17);
    return now.toNumber() > startDate.getTime() && now.toNumber() < endDate.getTime();
  }
  function main() {
    println('ok running!');
    println('ok running more!');
    var root = document.getElementById('root');
    var tags = drop(split(document.URL, ['#']), 1);
    if (tags.contains_11rb$('food'))
      food(root);
    else if (tags.contains_11rb$('slides'))
      slides(root);
    else if (isNow()) {
      slides(root);
      standard(root, false);
    }
     else
      standard(root, true);
  }
  function family$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Private Family Goodbye');
    println('and here');
    return Unit;
  }
  function family$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('Arrive between 11:00am and 11:30 at Hamilton funerals, 1015 Pacific Highway, Pymble');
    return Unit;
  }
  function family$lambda$lambda_1($receiver) {
    $receiver.unaryPlus_pdl1vz$('Parking should be available on Pacific Hwy.  Following the family time to say goodbye, we can go to a nearby cafe for brunch.');
    return Unit;
  }
  function family$lambda$lambda_2($receiver) {
    $receiver.unaryPlus_pdl1vz$("The car to take Nancy to the crematorium will then leave at 1:30 to allow Nancy's mother to follow with Stewart.");
    $receiver.unaryPlus_pdl1vz$('Adam from Hamilton funerals will advise when it is time.');
    return Unit;
  }
  function family$lambda($receiver) {
    h1($receiver, void 0, family$lambda$lambda);
    p($receiver, void 0, family$lambda$lambda_0);
    p($receiver, void 0, family$lambda$lambda_1);
    p($receiver, void 0, family$lambda$lambda_2);
    return Unit;
  }
  function family(root) {
    root != null ? (newDiv(root, void 0, family$lambda), Unit) : null;
    standard(root, false);
  }
  function food$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Some people have offered to bring food');
    return Unit;
  }
  function food$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('There will be a big pickup from Costco or somewhere, so individual gestures not needed, but appreciated none the less.  To reduce clashes...here is what is known.');
    return Unit;
  }
  function food$lambda$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('Erica Rudwick -- cake, not known what type yet');
    return Unit;
  }
  function food$lambda$lambda_1($receiver) {
    li($receiver, void 0, food$lambda$lambda$lambda);
    return Unit;
  }
  function food$lambda($receiver) {
    h1($receiver, void 0, food$lambda$lambda);
    h4($receiver, void 0, food$lambda$lambda_0);
    ul($receiver, void 0, food$lambda$lambda_1);
    return Unit;
  }
  function food(root) {
    standard(root, true);
    root != null ? (newDiv(root, false, food$lambda), Unit) : null;
  }
  function Slide(url) {
    this.url = url;
  }
  Slide.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Slide',
    interfaces: []
  };
  Slide.prototype.component1 = function () {
    return this.url;
  };
  Slide.prototype.copy_61zpoe$ = function (url) {
    return new Slide(url === void 0 ? this.url : url);
  };
  Slide.prototype.toString = function () {
    return 'Slide(url=' + Kotlin.toString(this.url) + ')';
  };
  Slide.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.url) | 0;
    return result;
  };
  Slide.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.url, other.url))));
  };
  var theSlides;
  function showSlide$lambda(closure$index) {
    return function ($receiver) {
      $receiver.src = theSlides.get_za3lpa$(closure$index).url;
      return Unit;
    };
  }
  function showSlide($receiver, index) {
    $receiver.innerHTML = '';
    var myimg = img(get_create(document), void 0, void 0, void 0, showSlide$lambda(index));
    $receiver.appendChild(myimg);
  }
  function slides$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$("TOW - 'The one where/with'");
    return Unit;
  }
  function slides$lambda$lambda$lambda(closure$slideindex) {
    return function (it) {
      var tmp$;
      var slideDiv = document.getElementById('picture');
      println('slideDiv is ' + toString(slideDiv));
      if (closure$slideindex.v <= get_lastIndex(theSlides) && closure$slideindex.v > 0) {
        tmp$ = closure$slideindex.v;
        closure$slideindex.v = tmp$ - 1 | 0;
        slideDiv != null ? (showSlide(slideDiv, closure$slideindex.v), Unit) : null;
      }
       else {
        println('outside of list');
      }
      return Unit;
    };
  }
  function slides$lambda$lambda_0(closure$slideindex) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Previous Slide');
      set_onClickFunction($receiver, slides$lambda$lambda$lambda(closure$slideindex));
      set_id($receiver, 'button1');
      return Unit;
    };
  }
  function slides$lambda$lambda$lambda_0(closure$slideindex) {
    return function (it) {
      var tmp$;
      var slideDiv = document.getElementById('picture');
      println('slideDiv is ' + toString(slideDiv));
      if (closure$slideindex.v < get_lastIndex(theSlides)) {
        tmp$ = closure$slideindex.v;
        closure$slideindex.v = tmp$ + 1 | 0;
        slideDiv != null ? (showSlide(slideDiv, closure$slideindex.v), Unit) : null;
      }
       else {
        println('outside of list');
      }
      return Unit;
    };
  }
  function slides$lambda$lambda_1(closure$slideindex) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('Next Slide');
      set_onClickFunction($receiver, slides$lambda$lambda$lambda_0(closure$slideindex));
      set_id($receiver, 'button2');
      return Unit;
    };
  }
  function slides$lambda$lambda_2($receiver) {
    return Unit;
  }
  function slides$lambda$lambda_3($receiver) {
    return Unit;
  }
  function slides$lambda$lambda$lambda_1($receiver) {
    $receiver.src = theSlides.get_za3lpa$(0).url;
    return Unit;
  }
  function slides$lambda$lambda_4($receiver) {
    set_id($receiver, 'picture');
    img_0($receiver, void 0, void 0, void 0, slides$lambda$lambda$lambda_1);
    return Unit;
  }
  function slides$lambda($receiver) {
    var slideindex = {v: 0};
    p($receiver, void 0, slides$lambda$lambda);
    button($receiver, void 0, void 0, void 0, void 0, slides$lambda$lambda_0(slideindex));
    button($receiver, void 0, void 0, void 0, void 0, slides$lambda$lambda_1(slideindex));
    br($receiver, void 0, slides$lambda$lambda_2);
    br($receiver, void 0, slides$lambda$lambda_3);
    div_0($receiver, void 0, slides$lambda$lambda_4);
    return Unit;
  }
  function slides(root) {
    root != null ? (newDiv(root, true, slides$lambda), Unit) : null;
  }
  function standard$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('In loving memory of Nancy Tan');
    return Unit;
  }
  function standard$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$(' --- ');
    return Unit;
  }
  function standard$lambda$lambda_1($receiver) {
    $receiver.unaryPlus_pdl1vz$('A memorial gathering for Nancy will take place this Saturday March 7th, at Hyams Beach (near Jervis Bay)');
    return Unit;
  }
  function standard$lambda$lambda_2($receiver) {
    $receiver.unaryPlus_pdl1vz$('Slides for the memorial will show on this page at the time of the memorial. (but instructions will then be below the slides)');
    return Unit;
  }
  function standard$lambda$lambda_3($receiver) {
    $receiver.unaryPlus_pdl1vz$('We are in a house at the corner of Bayview Ave and Cyrus St (diagonally opposite the Seamans Beach carpark)');
    $receiver.unaryPlus_pdl1vz$('Provided wind and rain or a large group deciding to set up just before us edoes not interfere, we will gather on the beach near the Seamans Beach Carpark');
    $receiver.unaryPlus_pdl1vz$('Someone will be at the house if plans are interupted');
    return Unit;
  }
  function standard$lambda$lambda_4($receiver) {
    $receiver.unaryPlus_pdl1vz$("We will have 'afternoon tea' together. Some food, plus some wine or soft drink.  Let us know if you also plan to bring something to share,");
    $receiver.unaryPlus_pdl1vz$('but this is not needed as there should be more than sufficient to share already.');
    $receiver.unaryPlus_pdl1vz$("A is a list of 'who is bringing what' will be available to avoid duplication.");
    return Unit;
  }
  function standard$lambda$lambda_5($receiver) {
    $receiver.unaryPlus_pdl1vz$('Some of us will have brunch/lunch together prior to the memorial and any who wish to join us are welcome.  ');
    $receiver.unaryPlus_pdl1vz$('Brunch/lunch is booked at Huskisson Hotel (booking for 11.45am - under the name Sharon Waldron).');
    return Unit;
  }
  function standard$lambda($receiver) {
    h1($receiver, void 0, standard$lambda$lambda);
    p($receiver, void 0, standard$lambda$lambda_0);
    p($receiver, void 0, standard$lambda$lambda_1);
    p($receiver, void 0, standard$lambda$lambda_2);
    p($receiver, void 0, standard$lambda$lambda_3);
    p($receiver, void 0, standard$lambda$lambda_4);
    p($receiver, void 0, standard$lambda$lambda_5);
    return Unit;
  }
  function standard(root, clear) {
    root != null ? (newDiv(root, clear, standard$lambda), Unit) : null;
  }
  _.newDiv_df2v3j$ = newDiv;
  _.get_time_t5kl13$ = get_time;
  _.get_str_t5kl13$ = get_str;
  _.isNow = isNow;
  _.main = main;
  _.family_ejp6n4$ = family;
  _.food_ejp6n4$ = food;
  _.Slide = Slide;
  Object.defineProperty(_, 'theSlides', {
    get: function () {
      return theSlides;
    }
  });
  _.showSlide_poj3bi$ = showSlide;
  _.slides_ejp6n4$ = slides;
  _.standard_n5vvvr$ = standard;
  theSlides = listOf([new Slide('static/img/Slide1.JPG'), new Slide('static/img/Slide2.JPG'), new Slide('static/img/Slide3.JPG'), new Slide('static/img/Slide4.JPG'), new Slide('static/img/Slide5.JPG'), new Slide('static/img/Slide6.JPG'), new Slide('static/img/Slide7.JPG'), new Slide('static/img/Slide8.JPG'), new Slide('static/img/Slide9.JPG'), new Slide('static/img/Slide10.JPG'), new Slide('static/img/Slide11.JPG')]);
  main();
  Kotlin.defineModule('home', _);
  return _;
}(typeof home === 'undefined' ? {} : home, kotlin, this['kotlinx-html-js']);

//# sourceMappingURL=home.js.map
