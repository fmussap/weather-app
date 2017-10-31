'use strict'

import React from 'react'
import { connect } from 'react-redux'
import { fetchWeather } from 'actions'

const SearchBar = ({ handleSearch, weather }) => {
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

const mapStateToProps = ({ weather }) => ({
  weather
})

const mapDispatchToProps = dispatch => ({
  handleSearch: (e) => {
    const city = e.target.searchcity.value
    e.preventDefault()
    dispatch(fetchWeather(city))
    e.target.searchcity.value = ''
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
