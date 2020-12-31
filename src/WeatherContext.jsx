import React, { createContext, useReducer, useCallback, useContext } from 'react'
const initialValue = {
  allWeather: {},
  allChartData: {},
  allForecastItemList: {},
}
const WeatherStateContext = createContext()
const WeatherDispatchContext = createContext()

const reducer = (state, actions) => {
  switch (actions.type) {
    case 'SET_ALL_WEATHER':
      const weatherCity = actions.payload
      const newAllWeather = { ...state.allWeather, ...weatherCity }
      return { ...state, allWeather: newAllWeather }
    case 'SET_CHART_DATA':
      const chartDataCity = actions.payload
      const newAllChartDataCity = { ...state.allChartData, ...chartDataCity }
      return { ...state, allChartData: newAllChartDataCity }
    case 'SET_FORCAST_ITEM_LIST':
      const forecastItemListCity = actions.payload
      const newAllForecastItemListCity = {
        ...state.allForecastItemList,
        ...forecastItemListCity,
      }
      return { ...state, allForecastItemList: newAllForecastItemListCity }
    default:
      return state
  }
}

const WeatherContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue)
  return (
    <WeatherDispatchContext.Provider value={dispatch}>
      <WeatherStateContext.Provider value={state}>
        {children}
      </WeatherStateContext.Provider>
    </WeatherDispatchContext.Provider>
  )
}

const useWeatherDispatchContext = () => {
  const dispatch = useContext(WeatherDispatchContext)
  if (!dispatch) {
    throw Error('Must set dispatch provider')
  }
  return dispatch
}
const useWeatherStateContext = () => {
  const state = useContext(WeatherStateContext)
  if (!state) {
    throw Error('Must set state provider')
  }
  return state
}

export { WeatherContext, useWeatherDispatchContext, useWeatherStateContext }
