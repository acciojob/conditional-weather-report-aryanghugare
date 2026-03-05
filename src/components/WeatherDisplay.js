import React from 'react'

function WeatherDisplay({ data }) {
  return (
    <div>
      <h2>Weather Report</h2>
      <span style={{ color: data.temperature > 20 ? 'red' : 'blue' }}>
      <p> Temperature : {data.temperature} </p> 
      </span>
      <p>Conditions: {data.conditions}</p>
    </div>
  )
}

export default WeatherDisplay