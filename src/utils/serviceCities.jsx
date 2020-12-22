const cities = [
  { country: 'Argentina', city: 'Buenos Aires', countryCode: 'AR' },
  { country: 'Colombia', city: 'Bogota', countryCode: 'CO' },
  { country: 'España', city: 'Madrid', countryCode: 'ES' },
  { country: 'Mexico', city: 'Ciudad de Mexico', countryCode: 'MX' },
]

export const getCities = () => cities

export const getCountryByCountryCode = () => (countryCode) =>
  cities.filter((c) => c.countryCode === countryCode)[0].country
