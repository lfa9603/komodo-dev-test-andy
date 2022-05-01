"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strings = exports.TREND = exports.METRIC = void 0;
var METRIC;
(function (METRIC) {
    METRIC["M1"] = "m1";
    METRIC["M2"] = "m2";
})(METRIC = exports.METRIC || (exports.METRIC = {}));
var TREND;
(function (TREND) {
    TREND["LOW_AVERAGE"] = "lowAverage";
    TREND["ROLLING_AVERAGE"] = "rollingAverage";
})(TREND = exports.TREND || (exports.TREND = {}));
exports.strings = {
    errors: {
        invalidResponses: 'Invalid responses key on metric data'
    }
};
//# sourceMappingURL=constants.js.map