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
  var DIV = $module$kotlinx_html_js.kotlinx.html.DIV;
  var img = $module$kotlinx_html_js.kotlinx.html.img_evw26v$;
  var set_id = $module$kotlinx_html_js.kotlinx.html.set_id_ueiko3$;
  var div_0 = $module$kotlinx_html_js.kotlinx.html.div_ri36nr$;
  var throwUPAE = Kotlin.throwUPAE;
  var br = $module$kotlinx_html_js.kotlinx.html.br_5bz84p$;
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var set_onClickFunction = $module$kotlinx_html_js.kotlinx.html.js.set_onClickFunction_pszlq2$;
  var button = $module$kotlinx_html_js.kotlinx.html.button_whohl6$;
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
  function main() {
    println('ok running!');
    println('ok running more!');
    var root = document.getElementById('root');
    var tags = drop(split(document.URL, ['#']), 1);
    if (tags.contains_11rb$('food'))
      food(root);
    else if (tags.contains_11rb$('slides'))
      slides(root);
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
    if (Kotlin.isType($receiver, DIV)) {
      img($receiver, void 0, void 0, void 0, showSlide$lambda(index));
    }
  }
  function showSlide$lambda_0(closure$index) {
    return function ($receiver) {
      $receiver.src = theSlides.get_za3lpa$(closure$index).url;
      return Unit;
    };
  }
  function showSlide_0($receiver, index) {
    if (index !== 0)
      img($receiver, void 0, void 0, void 0, showSlide$lambda_0(index));
  }
  function slides$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('the slides');
    return Unit;
  }
  function slides$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('slides will disappear in 5mins');
    return Unit;
  }
  function slides$lambda$lambda_1(closure$sdiv) {
    return function ($receiver) {
      set_id($receiver, 'picture');
      closure$sdiv.v = $receiver;
      return Unit;
    };
  }
  function slides$lambda$lambda_2($receiver) {
    return Unit;
  }
  function slides$lambda$lambda$lambda(closure$slideindex, closure$sdiv) {
    return function (it) {
      var tmp$;
      if (closure$slideindex.v < get_lastIndex(theSlides)) {
        tmp$ = closure$slideindex.v;
        closure$slideindex.v = tmp$ + 1 | 0;
        showSlide_0(closure$sdiv.v == null ? throwUPAE('sdiv') : closure$sdiv.v, closure$slideindex.v);
      }
       else {
        println('outside of list');
      }
      return Unit;
    };
  }
  function slides$lambda$lambda_3(closure$slideindex, closure$sdiv) {
    return function ($receiver) {
      $receiver.unaryPlus_pdl1vz$('next slide');
      set_onClickFunction($receiver, slides$lambda$lambda$lambda(closure$slideindex, closure$sdiv));
      return Unit;
    };
  }
  function slides$lambda($receiver) {
    var slideindex = {v: 0};
    h1($receiver, void 0, slides$lambda$lambda);
    p($receiver, void 0, slides$lambda$lambda_0);
    var sdiv = {v: null};
    div_0($receiver, void 0, slides$lambda$lambda_1(sdiv));
    showSlide_0(sdiv.v == null ? throwUPAE('sdiv') : sdiv.v, slideindex.v);
    br($receiver, void 0, slides$lambda$lambda_2);
    button($receiver, void 0, void 0, void 0, void 0, slides$lambda$lambda_3(slideindex, sdiv));
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
    $receiver.unaryPlus_pdl1vz$('A memorial gathering for Nancy is planned for this Saturday March 7th, at Hyams Beach (near Jervis Bay)');
    return Unit;
  }
  function standard$lambda$lambda_2($receiver) {
    $receiver.unaryPlus_pdl1vz$('More details and will be added later today (March 2) as plans are confirmed.  It is planned for the memorial gathering to be on the beach, between 2pm and 4pm as this is the best forecast window to avoid rain over the next week.');
    return Unit;
  }
  function standard$lambda$lambda_3($receiver) {
    $receiver.unaryPlus_pdl1vz$("There will be some 'afternoon tea' food(supplied by you and us), plus wine(BYO) or soft drink(BYO).");
    return Unit;
  }
  function standard$lambda$lambda_4($receiver) {
    $receiver.unaryPlus_pdl1vz$('Some of us will have lunch together prior to the memorial and any who wish to join us are welcome.  Location for lunch also to be confirmed, but current plan is the Huskisson Hotel (contact sharon tai).');
    return Unit;
  }
  function standard$lambda($receiver) {
    h1($receiver, void 0, standard$lambda$lambda);
    p($receiver, void 0, standard$lambda$lambda_0);
    p($receiver, void 0, standard$lambda$lambda_1);
    p($receiver, void 0, standard$lambda$lambda_2);
    p($receiver, void 0, standard$lambda$lambda_3);
    p($receiver, void 0, standard$lambda$lambda_4);
    return Unit;
  }
  function standard(root, clear) {
    root != null ? (newDiv(root, clear, standard$lambda), Unit) : null;
  }
  _.newDiv_df2v3j$ = newDiv;
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
  _.showSlide_v94jnw$ = showSlide_0;
  _.slides_ejp6n4$ = slides;
  _.standard_n5vvvr$ = standard;
  theSlides = listOf([new Slide('https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg'), new Slide('https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')]);
  main();
  Kotlin.defineModule('home', _);
  return _;
}(typeof home === 'undefined' ? {} : home, kotlin, this['kotlinx-html-js']);

//# sourceMappingURL=home.js.map
