import React from 'react'
import './EpisodesCards.css'

const EpisodesCards = ({episodeInfo}) => {
  return (
    <ul className='episode_card'>
        <li className='episode_li'><strong>Name:</strong> {episodeInfo.name}</li>
        <li className='episode_li'><strong>Date:</strong> {episodeInfo.air_date}</li>
        <li className='episode_li'><strong>Episode:</strong> {episodeInfo.episode}</li>
    </ul>
  )
}

export default EpisodesCards