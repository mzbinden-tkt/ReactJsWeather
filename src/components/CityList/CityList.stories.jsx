import React from 'react'
import CityList from './CityList'
import { action } from '@storybook/addon-actions'

export default {
  title: 'CityList',
  component: CityList,
}

const cities = [
  { country: 'Argentina', city: 'Buenos Aires' },
  { country: 'Colombia', city: 'Bogota' },
  { country: 'España', city: 'Madrid' },
  { country: 'Mexico', city: 'Ciudad de Mexico' },
]

export const CityListExample = () => (
  <CityList cities={cities} onClickCity={action('Click on city')} />
)
