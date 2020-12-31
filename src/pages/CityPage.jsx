import React, { useMemo, useContext } from 'react'
import Grid from '@material-ui/core/Grid'
import LinearProgress from '@material-ui/core/LinearProgress'
import AppFrame from './../components/AppFrame'
import CityInfo from './../components/CityInfo'
import ForecastChart from './../components/ForecastChart'
import Forecast from './../components/Forecast'
import Weather from './../components/Weather'
import WeatherDetails from './../components/WeatherDetails'
import useCityPage from './../hooks/useCityPage'
import useCityList from './../hooks/useCityList'
import { getCityCode } from './../utils/utils'
import { getCountryByCountryCode } from './../utils/serviceCities'
import {
  useWeatherDispatchContext,
  useWeatherStateContext,
} from './../WeatherContext'

const CityPage = () => {
  const actions = useWeatherDispatchContext()
  const data = useWeatherStateContext()
  const { allWeather, allChartData, allForecastItemList } = data
  const { city, countryCode } = useCityPage(
    actions,
    allChartData,
    allForecastItemList
  )
  const cities = useMemo(() => [{ city, countryCode }], [city, countryCode])
  useCityList(cities, actions, allWeather)
  const cityCode = getCityCode(city, countryCode)
  const weather = allWeather[cityCode]
  const chartData = allChartData[cityCode]
  const forecastItemList = allForecastItemList[cityCode]
  const country = countryCode && getCountryByCountryCode(countryCode)
  const state = weather && weather.state
  const temperature = weather && weather.temperature
  const humidity = weather && weather.humidity
  const wind = weather && weather.wind

  return (
    <AppFrame>
      <Grid item container xs={12} justify="center" alignItems="flex-end">
        <CityInfo city={city} country={country} />
      </Grid>
      <Grid container item xs={12} justify="center">
        <Weather state={state} temperature={temperature} />
        {humidity && wind && <WeatherDetails humidity={humidity} wind={wind} />}
      </Grid>
      <Grid item>{!chartData && !forecastItemList && <LinearProgress />}</Grid>
      <Grid item>{chartData && <ForecastChart data={chartData} />}</Grid>
      <Grid item>
        {forecastItemList && <Forecast forecastItemList={forecastItemList} />}
      </Grid>
    </AppFrame>
  )
}

export default CityPage
