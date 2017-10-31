'use strict'

import * as actions from 'actions/actions-type'

const INITIAL_STATE = {
  inputValue: '',
  cityWeather: {}
}

export default (state = INITIAL_STATE, action) => {
  // console.log('type', action.type)
  switch (action.type) {
    case actions.INPUT_SEARCH_BAR:
      return {
        ...state,
        inputValue: action.payload
      }
    case actions.FETCH_WEATHER:
      return {
        ...state,
        cityWeather: action.payload
      }
  }
  return state
}
