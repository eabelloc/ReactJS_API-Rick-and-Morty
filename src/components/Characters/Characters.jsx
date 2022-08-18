import React, {useContext} from 'react'
import { RickAndMortyContext } from '../../context/context'
import CharactersCards from '../CharactersCards/CharactersCards'
import './Characters.css'

const Characters = () => {
  const {charactersList} = useContext(RickAndMortyContext)
  const {user} = useContext(RickAndMortyContext)

  return (
    <figure className='characters_figure'>
      <h2>Characters</h2>
      <div className='characters_container'>
        {(charactersList.length > 0) && (user != undefined) ? charactersList.map((character) => 
        <CharactersCards characterInfo={character} key={character.id} />
        ) : (
        <div>
          <h2>Please, log in!</h2>
          <img src="https://media.giphy.com/media/uZrLs0rcNc9sA/giphy.gif" alt="PLEASE DO LOG IN!!!" />
        </div>
        )}
      </div>
    </figure>
  )
}

export default Characters