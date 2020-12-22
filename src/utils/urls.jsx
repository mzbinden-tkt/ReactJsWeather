const appid = '23e4ffa4a56b3622ab81dc02e6b19a2c'
export const getWeatherUrl = ({ city, countryCode }) =>
  `https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${appid}`
export const getForecastUrl = ({ city, countryCode }) =>
  `https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${appid}`
