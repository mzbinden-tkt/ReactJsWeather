import React, { useMemo } from 'react'
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

const CityPage = ({ data, actions }) => {
  const { onSetAllWeather, onSetChartData, onSetforecastItemList } = actions
  const { allWeather, allChartData, allForecastItemList } = data
  const { city, countryCode } = useCityPage(
    onSetChartData,
    onSetforecastItemList,
    allChartData,
    allForecastItemList
  )
  const cities = useMemo(() => [{ city, countryCode }], [city, countryCode])
  useCityList(cities, onSetAllWeather, allWeather)
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
