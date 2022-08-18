import React from 'react'
import './CharactersCards.css'

const CharactersCards = ({characterInfo}) => {
  return (
    <figure className='character_card'>
        <div className='character_img_container'>
            <img src={characterInfo.image} alt={characterInfo.name} />
        </div>
        <h3>{characterInfo.name}</h3>
        <p><strong>Status:</strong> {characterInfo.status}</p>
        <p><strong>Species:</strong> {characterInfo.species}</p>
        <p><strong>Gender:</strong> {characterInfo.gender}</p>
    </figure>
  )
}

export default CharactersCards