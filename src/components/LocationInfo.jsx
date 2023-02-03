import React from 'react'

const LocationInfo = ({location}) => {
  return (
    <section>
        <h2>{location?.name}</h2>
        <ul>
          <li><span>Type: {location?.type}</span></li>
          <li><span>Dimension: {location?.dimension}</span></li>
          <li><span>Population: {location?.residents.length}</span></li>
        </ul>
      </section>
  )
}

export default LocationInfo