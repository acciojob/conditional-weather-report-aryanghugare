import React from 'react'

function WeatherDisplay({ data }) {
  return (
    <div>
      <h2>Weather Report</h2>
      <p style={{ color: data.temperature > 20 ? 'red' : 'blue' }}>
        Temperature : {data.temperature}°C
      </p>
      <p>Conditions: {data.conditions}</p>
    </div>
  )
}

export default WeatherDisplay