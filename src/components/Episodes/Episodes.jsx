import React, { useContext } from 'react'
import { RickAndMortyContext } from '../../context/context'
import EpisodesCards from '../EpisodesCards/EpisodesCards'
import './Episodes.css'

const Episodes = () => {
  const {episodesList} = useContext(RickAndMortyContext)
  const {user} = useContext(RickAndMortyContext)

  return (
    <section className='episode_section'>
      <h2>Episodes</h2>
      <div className='episodes_container'>
        {(episodesList.length > 0) && (user != undefined) ? episodesList.map((episode) => <EpisodesCards episodeInfo={episode} key={episode.id} />
        
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

export default Episodes