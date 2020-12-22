import React from 'react'
import ForecastItem from './ForecastItem'

export default {
  title: 'ForecastItem',
  component: ForecastItem,
}

export const ForecastItemExample = () => (
  <ForecastItem weekDay={'Monday'} hour={10} state="clouds" temperature={23} />
)
