import React from 'react'
import Forecast from './Forecast'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

const forecastList = [
  { weekDay: 'Monday', hour: 10, state: 'clouds', temperature: 29 },
  { weekDay: 'Monday', hour: 11, state: 'clear', temperature: 29 },
  { weekDay: 'Monday', hour: 12, state: 'rain', temperature: 29 },
  { weekDay: 'Monday', hour: 13, state: 'drizzle', temperature: 29 },
]

test('Forecast render', async () => {
  const { findAllByTestId } = render(<Forecast forecastItemList={forecastList} />)
  const forecastItems = await findAllByTestId('forecast-item-container')
  expect(forecastItems).toHaveLength(4)
})
