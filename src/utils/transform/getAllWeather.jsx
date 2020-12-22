import { getCityCode, toCelsius } from './../utils'
import { validValues } from './../../components/IconState'

const getAllWeather = (data, city, countryCode) => {
  const temperature = toCelsius(data.main.temp)
  const humidity = data.main.humidity
  const wind = data.wind.speed
  const stateFromServer = data.weather[0].main.toLowerCase()
  const state = validValues.includes(stateFromServer) ? stateFromServer : null
  const propName = getCityCode(city, countryCode)
  const propValue = { temperature, state, wind, humidity }
  return { [propName]: propValue }
}

export default getAllWeather
