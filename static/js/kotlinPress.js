if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'kotlinPress'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kotlinPress'.");
}
var kotlinPress = function (_, Kotlin) {
  'use strict';
  Kotlin.defineModule('kotlinPress', _);
  return _;
}(typeof kotlinPress === 'undefined' ? {} : kotlinPress, kotlin);

//# sourceMappingURL=kotlinPress.js.map
