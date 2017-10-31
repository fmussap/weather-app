'use strict'

import React, { PureComponent } from 'react'

import SearchBar from 'containers/search-bar'
import WeatherList from 'containers/weather-list'

class App extends PureComponent {
  render () {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    )
  }
}

export default App
