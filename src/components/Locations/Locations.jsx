import React, { useContext } from 'react'
import { RickAndMortyContext } from '../../context/context'
import LocationsCards from '../LocationsCards/LocationsCards'
import './Locations.css'

const Locations = () => {
  const {locationsList} = useContext(RickAndMortyContext)
  const {user} = useContext(RickAndMortyContext)

  return (
    <section className='location_section'>
      <h2>Locations</h2>
      <div className='locations_container'>
        {(locationsList.length > 0) && (user != undefined) ? locationsList.map((location) => <LocationsCards locationInfo={location} key={location.id} />
        
        ) : (
          <div>
            <h2>Please, log in!</h2>
            <img src="https://media.giphy.com/media/uZrLs0rcNc9sA/giphy.gif" alt="PLEASE DO LOG IN!!!" />
          </div>
        )}            
      </div>
    </section>
  )
}

export default Locations