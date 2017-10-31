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
  <td>
    <Sparklines height={height} width={width} data={data}>
      <SparklinesReferenceLine type='avg' />
      <SparklinesLine color={color} />
    </Sparklines>
    <div>{avg} {unit}</div>
  </td>
)
export default WeatherChart
