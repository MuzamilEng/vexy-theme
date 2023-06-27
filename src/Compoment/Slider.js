import React, { useState } from 'react'
import MultiRangeSlider from 'multi-range-slider-react'

function Slider() {
  const [minValue, set_minValue] = useState(25)
  const [maxValue, set_maxValue] = useState(75)

  const handleInput = e => {
    set_minValue(e.minValue)
    set_maxValue(e.maxValue)
  }

  return (
    <div style={{ height: '10px' }}>
      <MultiRangeSlider
        style={{ marginTop: '-7%', border: 'none', boxShadow: 'none' }}
        label='false'
        ruler='false'
        barInnerColor='#0000ff'
        barLeftColor='white'
        barRightColor='white'
        thumbLeftColor='white'
        thumbRightColor='white'
        min={0}
        max={100}
        step={5}
        minValue={minValue}
        maxValue={maxValue}
        onInput={e => {
          handleInput(e)
        }}
      />
    </div>
  )
}

export default Slider
