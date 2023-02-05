import React from 'react'
import './styles/LocationInfo.css'

const LocationInfo = ({location}) => {
  return (
    <section className='locationCard'>
        <h2 className='locationCard__name'>{location?.name}</h2>
        <ul className='locationCard__list'>
          <li className='locationCard__item'><span>Type: </span>{location?.type}</li>
          <li className='locationCard__item'><span>Dimension: </span>{location?.dimension}</li>
          <li className='locationCard__item'><span>Population: </span>{location?.residents.length}</li>
        </ul>
      </section>
  )
}

export default LocationInfo