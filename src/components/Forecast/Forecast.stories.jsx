import React from 'react'
import Forecast from './Forecast'

export default {
  title: 'Forecast',
  component: Forecast,
}
const forecastList = [
  { weekDay: 'Monday', hour: 10, state: 'clouds', temperature: 29 },
  { weekDay: 'Monday', hour: 11, state: 'clear', temperature: 29 },
  { weekDay: 'Monday', hour: 12, state: 'rain', temperature: 29 },
  { weekDay: 'Monday', hour: 13, state: 'drizzle', temperature: 29 },
]

export const ForecastExample = () => <Forecast forecastItemList={forecastList} />
