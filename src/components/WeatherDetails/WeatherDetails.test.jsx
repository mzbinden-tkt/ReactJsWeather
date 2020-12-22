import React from 'react'
import WeatherDetails from './WeatherDetails'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test('WeatherDetails render', async () => {
  const { findByText } = render(<WeatherDetails humidity={10} wind={200} />)
  const humidityDetails = await findByText(/10/)
  const windDetails = await findByText(/200/)
  expect(humidityDetails).toHaveTextContent('Humedad: 10%')
  expect(windDetails).toHaveTextContent('Viento: 200 km/h')
})
