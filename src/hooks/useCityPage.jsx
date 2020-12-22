import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getForecastUrl } from './../utils/urls'
import getChartData from './../utils/transform/getChartData'
import getForecastItemList from './../utils/transform/getForecastItemList'
import { getCityCode } from '../utils/utils'

const useCityPage = (
  onSetChartData,
  onSetforecastItemList,
  allChartData,
  allForecastItemList
) => {
  const { city, countryCode } = useParams()
  // const [chartData, setChartData] = useState(null)
  // const [forecastItemList, setforecastItemList] = useState(null)
  useEffect(async () => {
    const getForecast = async () => {
      const url = getForecastUrl({ city, countryCode })
      const cityCode = getCityCode(city, countryCode)
      try {
        const { data } = await axios.get(url)
        const dataAux = getChartData(data)
        onSetChartData({ [cityCode]: dataAux })

        const forecastListAux = getForecastItemList(data)
        onSetforecastItemList({ [cityCode]: forecastListAux })
      } catch (error) {
        console.log(error)
      }
    }
    const cityCode = getCityCode(city, countryCode)
    if (
      allChartData &&
      allForecastItemList &&
      !allChartData[cityCode] &&
      !allForecastItemList[cityCode]
    ) {
      getForecast()
    }
  }, [city, countryCode, onSetChartData, onSetforecastItemList])

  return { city, countryCode }
}

export default useCityPage
