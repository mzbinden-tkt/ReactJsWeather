import React, { useState, useCallback, useMemo } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import CityPage from './pages/CityPage'
import MainPage from './pages/MainPage'
import NotFoundPage from './pages/NotFoundPage'
import WelcomePage from './pages/WelcomePage'

export const App = () => {
  const [allWeather, setAllWeather] = useState({})
  const [allChartData, setChartData] = useState({})
  const [allForecastItemList, setforecastItemList] = useState({})
  const onSetAllWeather = useCallback(
    (weatherCity) => {
      setAllWeather((allWeather) => ({ ...allWeather, ...weatherCity }))
    },
    [setAllWeather]
  )
  const onSetChartData = useCallback(
    (chartDataCity) => {
      setChartData((chartData) => ({ ...chartData, ...chartDataCity }))
    },
    [setChartData]
  )
  const onSetforecastItemList = useCallback(
    (forecastItemListCity) => {
      setforecastItemList((forecastItemList) => ({
        ...forecastItemList,
        ...forecastItemListCity,
      }))
    },
    [setforecastItemList]
  )
  const actions = useMemo(
    () => ({
      onSetAllWeather,
      onSetChartData,
      onSetforecastItemList,
    }),
    [onSetAllWeather, onSetChartData, onSetforecastItemList]
  )

  const data = useMemo(
    () => ({
      allWeather,
      allChartData,
      allForecastItemList,
    }),
    [allWeather, allChartData, allForecastItemList]
  )
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <WelcomePage />
        </Route>
        <Route path="/main">
          <MainPage data={data} actions={actions} />
        </Route>
        <Route path="/city/:countryCode/:city">
          <CityPage data={data} actions={actions} />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  )
}
export default App
