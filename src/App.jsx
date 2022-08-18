import { RickAndMortyContextProvider } from './context/context'
import { useState } from 'react'
import './App.css'
import Characters from './components/Characters/Characters'
import Locations from './components/Locations/Locations'
import Episodes from './components/Episodes/Episodes'
import Header from './components/Header/Header'

function App() {
  //constante para los botones:
  const [showCharacters, setShowCharacters] = useState(false);
  const [showLocations, setShowLocations] = useState(false);
  const [showEpisodes, setShowEpisodes] = useState(false);

  return (
    <div className="App">
      <RickAndMortyContextProvider>
        <Header setShowCharacters={setShowCharacters} setShowLocations={setShowLocations} setShowEpisodes={setShowEpisodes} />
        {(showCharacters) ? <Characters /> : null}
        {(showLocations) ? <Locations /> : null}
        {(showEpisodes) ? <Episodes /> : null}
      </RickAndMortyContextProvider>
    </div>
  )
}

export default App
