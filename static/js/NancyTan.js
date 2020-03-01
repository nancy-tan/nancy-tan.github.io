if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'NancyTan'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'NancyTan'.");
}
var NancyTan = function (_, Kotlin) {
  'use strict';
  Kotlin.defineModule('NancyTan', _);
  return _;
}(typeof NancyTan === 'undefined' ? {} : NancyTan, kotlin);

//# sourceMappingURL=NancyTan.js.map
