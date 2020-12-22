import { useState, useEffect } from 'react'
import axios from 'axios'
import { getWeatherUrl } from './../utils/urls'
import getAllWeather from './../utils/transform/getAllWeather'
import { getCityCode } from './../utils/utils'

const useCityList = (cities, onSetAllWeather, allWeather) => {
  // const [allWeather, setAllWeather] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const setWeather = async (city, countryCode) => {
      const url = getWeatherUrl({ city, countryCode })
      try {
        onSetAllWeather({ [getCityCode(city, countryCode)]: {} })
        const { data } = await axios.get(url)
        const AllWeatherAux = getAllWeather(data, city, countryCode)
        // setAllWeather((allWeather) => ({ ...allWeather, ...AllWeatherAux }))
        onSetAllWeather(AllWeatherAux)
      } catch (error) {
        if (error.response) {
          setError('Hay un error en el servidor')
        } else if (error.request) {
          setError('Error de conexion, verifique su conexion')
        } else {
          setError('Error al cargar los datos')
        }
      }
    }

    cities.forEach(({ city, countryCode }) => {
      if (!allWeather[getCityCode(city, countryCode)]) {
        setWeather(city, countryCode)
      }
    })
  }, [cities, onSetAllWeather, allWeather])
  return { error, setError }
}

export default useCityList
