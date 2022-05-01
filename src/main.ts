/*
Use the main.* as the file from which we can run KomodoTrends (i.e., we can run'node main.js' for node applications in JS)
If you chose a different language from JS, change the name of this file to match your extension.
Apart from that, feel free to make any change you want to this repo.

Please note (repetition from README):
-   We would prefer this written in either JavaScript/Typescript.
-   You are not required to create an API! We are assuming you know what an API is and that you would be able to easily implement this into a RESTful/GraphQL system
-   This should take you around 2/3 hours. We are not trying to trick you into doing more work. We want your solution to satisfy
your standards but we are aware you might be busy with a little thing called 'life'.
Please do your best, but we are not using project size, LOC or hours spent on the project as success metrics.
*/

import { strings, TREND } from "./constants";
import { IMetricData, IMetricResponse, ITrendReponse } from "./dataModels";


/**
* Checks whether average metric value is lower than lowMetric value
* @param metricValues
* @param lowMetric
* @returns boolean
*/
export const lowMetricCheck = (metricValues: number[], lowMetric = 4) => {
  const total = metricValues.reduce((prev, curr) => prev + curr);
  return (total / metricValues.length) < lowMetric;
}


/**
* Checks whether rolling average of X values is lower than lowMetric value
* @param metricValues
* @param lowMetric
* @returns boolean
*/
export const rollingMetricCheck = (metricValues: number[], lowMetric = 3) => {
  let checkFailed = false;

  for(let i = 0; i < metricValues.length; i++) {
    const prevValueCheck = i > 0 &&  metricValues[i - 1] < lowMetric;
    const nextValueCheck = i < metricValues.length && metricValues[i + 1] < lowMetric;
    const currValueCheck = metricValues[i] < lowMetric
    checkFailed = prevValueCheck && nextValueCheck && currValueCheck;

    if (checkFailed) {
      return true;
    }
  }
  return false;
}


/**
* Loops over input metric data and eturns results of separate trend checks for each
* @param userId
* @param metricData
* @returns ITrendReponse - userId and metricTrends boolean flags
*/
export const komodoTrends = (userId: string, metricData: IMetricData): ITrendReponse => {
  const metricTrends: IMetricResponse[] = [];

  Object.keys(metricData).forEach((metricKey) => {
    const responses = metricData[metricKey]?.responses;

    if (!responses) {
      throw new Error(strings.errors.invalidResponses);
    }

    const metricValues = Object.keys(responses).map(k => {
      return responses[k].value;
    });

    const lowMetricTrend = lowMetricCheck(metricValues);
    const rollingMetricTrend = rollingMetricCheck(metricValues);

    metricTrends.push({
      [metricKey]: {
        [TREND.LOW_AVERAGE]: lowMetricTrend,
        [TREND.ROLLING_AVERAGE]: rollingMetricTrend
      }
    })
  });

  return {
    userId,
    metricTrends
  }
}


const mockUserId = 'u1';
const mockMetricsResponse = {
  "m1": {
    "responses": {
      "r1": {"date": "01/01/2020", "value": 3},
      "r2": {"date": "30/01/2020", "value": 4},
      "r3": {"date": "02/02/2020", "value": 3},
      "r4": {"date": "20/02/2020", "value": 3},
      "r5": {"date": "16/03/2020", "value": 3}
    }
  },
  "m2": {
    "responses": {
      "r1": {"date": "01/01/2020", "value": 2},
      "r2": {"date": "30/01/2020", "value": 2},
      "r3": {"date": "02/02/2020", "value": 3},
      "r4": {"date": "20/02/2020", "value": 1},
      "r5": {"date": "16/03/2020", "value": 3}
    }
  }
}

const mockResponse = komodoTrends(mockUserId, mockMetricsResponse);
console.log('Mock response:', JSON.stringify(mockResponse));