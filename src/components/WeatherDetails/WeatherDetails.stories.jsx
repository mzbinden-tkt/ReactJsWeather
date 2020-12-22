import React from 'react'
import WeatherDetails from './WeatherDetails'
import { action } from '@storybook/addon-actions'

export default {
  title: 'WeatherDetails',
  component: WeatherDetails,
}

export const WeatherDetailsExample = () => (
  <WeatherDetails humidity={10} wind={200} />
)
