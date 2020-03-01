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
  function main$lambda$lambda($receiver) {
    $receiver.unaryPlus_pdl1vz$('In memory of Nancy Tan');
    println('and here');
    return Unit;
  }
  function main$lambda$lambda_0($receiver) {
    $receiver.unaryPlus_pdl1vz$('A memorial gathering for Nancy is planned for this Saturday March 7th, at Hyams Beach (near Jervis Bay)');
    return Unit;
  }
  function main$lambda$lambda_1($receiver) {
    $receiver.unaryPlus_pdl1vz$('>More details and will be added later today as plans are confirmed.  It is planned to be between 2pm and 4pm as this is the best forecast window to avoid rain over the next week.');
    return Unit;
  }
  function main$lambda($receiver) {
    h1($receiver, void 0, main$lambda$lambda);
    p($receiver, void 0, main$lambda$lambda_0);
    p($receiver, void 0, main$lambda$lambda_1);
    return Unit;
  }
  function main() {
    println('ok running!');
    println('ok running more!');
    var root = document.getElementById('root');
    println('root is ' + toString(root));
    root != null ? (newDiv(root, void 0, main$lambda), Unit) : null;
  }
  _.newDiv_df2v3j$ = newDiv;
  _.main = main;
  main();
  Kotlin.defineModule('home', _);
  return _;
}(typeof home === 'undefined' ? {} : home, kotlin, this['kotlinx-html-js']);

//# sourceMappingURL=home.js.map
