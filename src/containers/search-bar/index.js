'use strict'

import React from 'react'
// import { connect } from 'react-redux'

const SearchBar = () => {
  return (
    <form className='input-group'>
      <input
        placeholder='Get a five-day forecast in your favorite cities'
        className='form-control'
      />
      <span className='input-group-btn'>
        <button type='submit' className='btn btn-secondary'>
          Submit
        </button>
      </span>
    </form>
  )
}

// export default connect()(SearchBar)
export default SearchBar
