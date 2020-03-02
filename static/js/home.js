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
  var toString = Kotlin.toString;
  var h1 = $module$kotlinx_html_js.kotlinx.html.h1_vmej1w$;
  var p = $module$kotlinx_html_js.kotlinx.html.p_8pggrc$;
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
    if (tags.contains_11rb$('family'))
      family(root);
    else
      standard(root);
    println('root is ' + toString(root));
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
  }
  function standard$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('In memory of Nancy Tan');
    println('and here');
    return Unit;
  }
  function standard$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('This is a placeholder web site at this time. More may be added later, but for now there is only updates on plans');
    return Unit;
  }
  function standard$lambda$lambda_1($receiver) {
    $receiver.unaryPlus_pdl1vz$(' - ');
    return Unit;
  }
  function standard$lambda$lambda_2($receiver) {
    $receiver.unaryPlus_pdl1vz$('A memorial gathering for Nancy is planned for this Saturday March 7th, at Hyams Beach (near Jervis Bay)');
    return Unit;
  }
  function standard$lambda$lambda_3($receiver) {
    $receiver.unaryPlus_pdl1vz$('More details and will be added later today (March 2) as plans are confirmed.  It is planned for the memorial gathering to be on the beach, between 2pm and 4pm as this is the best forecast window to avoid rain over the next week.');
    return Unit;
  }
  function standard$lambda$lambda_4($receiver) {
    $receiver.unaryPlus_pdl1vz$("There will be some 'afternoon tea' food, plus wine or soft drink.");
    return Unit;
  }
  function standard$lambda$lambda_5($receiver) {
    $receiver.unaryPlus_pdl1vz$('Some of us will have lunch together prior to the memorial and any who wish to join us are welcome.  Location for lunch also to be confirmed.');
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
  function standard(root) {
    root != null ? (newDiv(root, void 0, standard$lambda), Unit) : null;
  }
  _.newDiv_df2v3j$ = newDiv;
  _.main = main;
  _.family_ejp6n4$ = family;
  _.standard_ejp6n4$ = standard;
  main();
  Kotlin.defineModule('home', _);
  return _;
}(typeof home === 'undefined' ? {} : home, kotlin, this['kotlinx-html-js']);

//# sourceMappingURL=home.js.map
