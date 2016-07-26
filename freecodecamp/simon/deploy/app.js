"use strict";

module.exports = function (_ref) {
    var _ref$percent = _ref.percent;
    var percent = _ref$percent === undefined ? 100 : _ref$percent;
    var amount = _ref.amount;

    var percentOff = percent / 100 * amount;
    return percentOff;
};