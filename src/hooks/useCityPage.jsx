import axios from 'axios'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getForecastUrl } from './../utils/urls'
import getChartData from './../utils/transform/getChartData'
import getForecastItemList from './../utils/transform/getForecastItemList'
import { getCityCode } from '../utils/utils'

const useCityPage = (actions, allChartData, allForecastItemList) => {
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
        // onSetChartData({ [cityCode]: dataAux })
        actions({ type: 'SET_CHART_DATA', payload: { [cityCode]: dataAux } })
        const forecastListAux = getForecastItemList(data)
        // onSetforecastItemList({ [cityCode]: forecastListAux })
        actions({
          type: 'SET_FORCAST_ITEM_LIST',
          payload: { [cityCode]: forecastListAux },
        })
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
  }, [city, countryCode])

  return { city, countryCode }
}

export default useCityPage
