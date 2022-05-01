import { TREND } from "./constants"

export interface IMetricData {
  [key: string]: {
    responses: {
      [key: string]: {
        date: string,
        value: number
      }
    }
  }
}

export interface ITrendReponse {
  userId: string,
  metricTrends: IMetricResponse[],
}

export interface IMetricResponse {
  [key: string]: {
    [TREND.LOW_AVERAGE]: boolean,
    [TREND.ROLLING_AVERAGE]: boolean
  }
}
