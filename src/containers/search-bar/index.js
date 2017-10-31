'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { inputSearchBar, fetchWeather } from 'actions'

const SearchBar = ({ handleSearch, weather }) => {
  console.log('weather', weather)
  return (
    <form className='input-group' onSubmit={handleSearch}>
      <input
        type='text'
        placeholder='Get a five-day forecast in your favorite cities'
        className='form-control'
        name='searchcity'
      />
      <span className='input-group-btn'>
        <button type='submit' className='btn btn-secondary'>
          Submit
        </button>
      </span>
    </form>
  )
}

const mapStateToProps = state => ({
  value: state.ReducerWeather.inputValue,
  weather: state.ReducerWeather.cityWeather
})

const mapDispatchToProps = dispatch => ({
  handleSearch: (e) => {
    const city = e.target.searchcity.value
    e.preventDefault()
    dispatch(inputSearchBar(city))
    dispatch(fetchWeather(city))
    e.target.searchcity.value = ''
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
