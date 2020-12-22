import moment from 'moment'
import 'moment/locale/es'
import { toCelsius } from './../utils'

const getForecastItemList = (data) => {
  const interval = [4, 8, 12, 16, 20, 24]

  return data.list
    .filter((item, index) => interval.includes(index))
    .map((item) => {
      return {
        hour: moment.unix(item.dt).hour,
        weekDay: moment.unix(item.dt).format('dddd'),
        state: item.weather[0].main.toLowerCase(),
        temperature: toCelsius(item.main.temp),
      }
    })
}
export default getForecastItemList
