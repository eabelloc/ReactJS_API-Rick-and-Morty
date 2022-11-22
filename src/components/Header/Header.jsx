import React, { useContext } from "react";
import { RickAndMortyContext } from "../../context/context";
import "./Header.css";

const Header = ({ setShowCharacters, setShowLocations, setShowEpisodes }) => {
  const { login, logout, user } = useContext(RickAndMortyContext);

  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="https://rickandmortyapi.com/" target="_blank">
              Rick-and-Morty-API
            </a>
          </li>
          <li>
            <button
              onClick={() =>
                setShowCharacters(true) &
                setShowLocations(false) &
                setShowEpisodes(false)
              }
            >
              Characters
            </button>
          </li>
          <li>
            <button
              onClick={() =>
                setShowLocations(true) &
                setShowCharacters(false) &
                setShowEpisodes(false)
              }
            >
              Locations
            </button>
          </li>
          <li>
            <button
              onClick={() =>
                setShowEpisodes(true) &
                setShowCharacters(false) &
                setShowLocations(false)
              }
            >
              Episodes
            </button>
          </li>
          {user != undefined ? (
            <>
              <li>
                <button onClick={() => logout()}>Logout</button>
              </li>
              <h3>Welcome {user}!🥳</h3>
            </>
          ) : (
            <li>
              <button onClick={() => login()}>Login</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
