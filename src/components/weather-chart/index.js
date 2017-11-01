'use strict'

import React from 'react'

import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines'

const WeatherChart = ({
  height,
  width,
  data,
  color,
  avg,
  unit
}) => (
  <div>
    <Sparklines height={height} width={width} data={data}>
      <SparklinesReferenceLine type='avg' />
      <SparklinesLine color={color} />
    </Sparklines>
    <div>{avg} {unit}</div>
  </div>
)
export default WeatherChart
