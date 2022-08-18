import React from 'react'
import './LocationsCards.css'

const LocationsCards = ({locationInfo}) => {
  return (
    <ul className='location_card'>
        <li className='location_li'><strong>Name:</strong> {locationInfo.name}</li>
        <li className='location_li'><strong>Type:</strong> {locationInfo.type}</li>
        <li className='location_li'><strong>Dimension:</strong> {locationInfo.dimension}</li>
    </ul>
  )
}

export default LocationsCards