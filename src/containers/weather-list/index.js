'use strict'

import React from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import WeatherChar from 'components/weather-chart'
import GoogleMap from 'components/google-map'

const average = (data) => _.round(_.sum(data) / data.length)

const WeatherList = ({ weather }) => {
  const renderWeather = (cityData) => {
    const temps = cityData.list.map(weather => weather.main.temp)
    const humidity = cityData.list.map(weather => weather.main.humidity)
    const pressure = cityData.list.map(weather => weather.main.pressure)
    const { lon, lat } = cityData.city.coord

    return (
      <tr key={cityData.city.id}>
        <td>
          <GoogleMap
            city={cityData.city.name}
            lon={lon}
            lat={lat}
          />
        </td>
        <WeatherChar
          height={150}
          width={210}
          data={temps}
          color='blue'
          avg={average(temps) - 273}
          unit='°C'
        />
        <WeatherChar
          height={150}
          width={210}
          data={pressure}
          color='grey'
          avg={average(pressure)}
          unit='hPa'
        />
        <WeatherChar
          height={150}
          width={210}
          data={humidity}
          color='green'
          avg={average(humidity)}
          unit='%'
        />
      </tr>
    )
  }

  return (
    <table className='table table-hover'>
      <thead>
        <tr>
          <th>City</th>
          <th>Temperature (°C)</th>
          <th>Pressure (hPa)</th>
          <th>Humidity (%)</th>
        </tr>
      </thead>
      <tbody>
        {weather.map(renderWeather)}
      </tbody>
    </table>
  )
}

const mapStateToProps = ({ weather }) => ({
  weather
})

export default connect(mapStateToProps, null)(WeatherList)
