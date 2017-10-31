'use strict'

import * as actions from 'actions/actions-type'

const INITIAL_STATE = []

export default (state = INITIAL_STATE, action) => {
  // console.log('type', action.type)
  switch (action.type) {
    case actions.FETCH_WEATHER:
      return [
        ...state,
        action.payload.data
      ]
  }
  return state
}
