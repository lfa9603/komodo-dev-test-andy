"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const constants_1 = require("./constants");
const main_1 = require("./main");
describe('#lowMetricCheck', () => {
    it('should return true if average below lowMetric input', () => {
        const lowMetricResult = (0, main_1.lowMetricCheck)([5, 2, 2, 2], 4);
        (0, chai_1.expect)(lowMetricResult).to.be.true;
    });
    it('should return false if average above lowMetric input', () => {
        const lowMetricResult = (0, main_1.lowMetricCheck)([5, 5, 5, 2], 4);
        (0, chai_1.expect)(lowMetricResult).to.be.false;
    });
});
describe('#rollingMetricCheck', () => {
    it('should return true if average rolling check below rollingMetric input', () => {
        const rollingMetricResult = (0, main_1.rollingMetricCheck)([3, 4, 2, 2, 2], 3);
        (0, chai_1.expect)(rollingMetricResult).to.be.true;
    });
    it('should return false if average rolling check above rollingMetric input', () => {
        const rollingMetricResult = (0, main_1.rollingMetricCheck)([5, 5, 5, 2, 2], 3);
        (0, chai_1.expect)(rollingMetricResult).to.be.false;
    });
});
describe('#komodoTrends', () => {
    let userId;
    let mockResponses;
    beforeEach(() => {
        userId = 'u1';
        mockResponses = {
            "m1": {
                "responses": {
                    "r1": { "date": "01/01/2020", "value": 1 },
                    "r2": { "date": "30/01/2020", "value": 1 },
                    "r3": { "date": "02/02/2020", "value": 1 },
                    "r4": { "date": "20/02/2020", "value": 3 },
                    "r5": { "date": "16/03/2020", "value": 3 }
                }
            },
        };
    });
    it('should return low trend flag as true if lowMetricCheck fails', () => {
        const response = (0, main_1.komodoTrends)(userId, mockResponses);
        (0, chai_1.expect)(response.metricTrends[0][constants_1.METRIC.M1][constants_1.TREND.LOW_AVERAGE]).to.be.true;
    });
    it('should return rolling average trend flag as true if rollingMetricCheck fails', () => {
        const response = (0, main_1.komodoTrends)(userId, mockResponses);
        (0, chai_1.expect)(response.metricTrends[0][constants_1.METRIC.M1][constants_1.TREND.ROLLING_AVERAGE]).to.be.true;
    });
    it('should return low and rolling average trend flags as false rollingMetricCheck fails', () => {
        mockResponses = {
            "m1": {
                "responses": {
                    "r1": { "date": "01/01/2020", "value": 5 },
                    "r2": { "date": "30/01/2020", "value": 5 },
                    "r3": { "date": "02/02/2020", "value": 5 },
                    "r4": { "date": "20/02/2020", "value": 3 },
                    "r5": { "date": "16/03/2020", "value": 3 }
                }
            },
        };
        const response = (0, main_1.komodoTrends)(userId, mockResponses);
        (0, chai_1.expect)(response.metricTrends[0][constants_1.METRIC.M1][constants_1.TREND.LOW_AVERAGE]).to.be.false;
        (0, chai_1.expect)(response.metricTrends[0][constants_1.METRIC.M1][constants_1.TREND.ROLLING_AVERAGE]).to.be.false;
    });
});
//# sourceMappingURL=main.spec.js.map