import React from 'react'
import Weather from './Weather'
import 'typeface-roboto'

export default {
  title: 'Weather',
  component: Weather,
}

export const WeatherCloud = () => <Weather temperature={32} state={'clouds'} />
export const WeatherRain = () => <Weather temperature={32} state={'rain'} />
