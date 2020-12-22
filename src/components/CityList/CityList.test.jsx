import React from 'react'
import CityList from './CityList'
import { fireEvent, render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

const cities = [
  { country: 'Argentina', city: 'Buenos Aires', countryCode: 'AR' },
  { country: 'Colombia', city: 'Bogota', countryCode: 'CO' },
  { country: 'España', city: 'Madrid', countryCode: 'ES' },
  { country: 'Mexico', city: 'Ciudad de Mexico', countryCode: 'MX' },
]
test('CityList render', async () => {
  const { findAllByRole } = render(
    <CityList cities={cities} onClickCity={() => {}} />
  )
  const cityList = await findAllByRole('button')
  expect(cityList).toHaveLength(4)
})
test('CityList click on item', async () => {
  const fnClickOnItem = jest.fn()
  const { findAllByRole } = render(
    <CityList cities={cities} onClickCity={fnClickOnItem} />
  )
  const cityList = await findAllByRole('button')
  fireEvent.click(cityList[0])
  expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})
