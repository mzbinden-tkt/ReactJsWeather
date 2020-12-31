import React from 'react'
import Weather from './Weather'
import 'typeface-roboto'

export default {
  title: 'Weather',
  component: Weather,
}
const Template = (args) => <Weather {...args} />

export const WeatherCloud = () => Template.bind({})
WeatherCloud.args = { temperature: 32, state: 'clouds' }

export const WeatherRain = () => Template.bind({})
WeatherRain.args = { temperature: 32, state: 'rain' }
