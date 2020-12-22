import React from 'react'
import ForecastItem from './ForecastItem'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

test('ForecastItem render sunny', async () => {
  const { findByText } = render(
    <ForecastItem weekDay={'Monday'} temperature={23} state="clouds" hour={10} />
  )
  const weekDayDetails = await findByText('Monday')
  const hourDetails = await findByText(/10/)
  expect(weekDayDetails).toHaveTextContent('Monday')
  expect(hourDetails).toHaveTextContent('10')
})
