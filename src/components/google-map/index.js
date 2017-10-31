'use strict'

import React, { Component } from 'react'

class GoogleMap extends Component {
  componentDidMount () {
    /* eslint-disable no-new */
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }

  render () {
    return <div ref='map' />
  }
}

export default GoogleMap