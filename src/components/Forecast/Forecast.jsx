import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import ForecastItem from './../ForecastItem'
import { validValues } from './../IconState'

const renderForecastItem = (forecast) => {
  const { hour, temperature, weekDay, state } = forecast
  return (
    <Grid item data-testid="forecast-item-container" key={`${weekDay}${hour}`}>
      <ForecastItem
        hour={hour}
        temperature={temperature}
        weekDay={weekDay}
        state={state}
      />
    </Grid>
  )
}

const Forecast = ({ forecastItemList }) => {
  return (
    <Grid container justify="space-around" alignItems="center">
      {forecastItemList.map((item) => renderForecastItem(item))}
    </Grid>
  )
}

Forecast.propTypes = {
  forecastItemList: PropTypes.arrayOf(
    PropTypes.shape({
      weekDay: PropTypes.string.isRequired,
      hour: PropTypes.number.isRequired,
      state: PropTypes.oneOf(validValues).isRequired,
      temperature: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default Forecast
