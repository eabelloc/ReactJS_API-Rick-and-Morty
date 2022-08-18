import axios from "axios";
import { createContext, useEffect, useState } from "react";

//Creacion de contexto :3, y exportandola a otros lugares de la aplicacion (esta es la maquina que refina la Spice :3).
export const RickAndMortyContext = createContext();

//Crear el proveedor con los datos a incluir en el contexto (en este caso le toca a House Atreides proveer de Spice al universo :3).
export const RickAndMortyContextProvider = ({children}) => {
    //FETCH con Axios:
    const RMBASEURL = "https://rickandmortyapi.com/api"
    const [charactersList, setCharactersList] = useState([])
    const [locationsList, setLocationsList] = useState([])
    const [episodesList, setEpisodesList] = useState([])

    const getCharacters = async () => {
        const rawData = await axios.get(`${RMBASEURL}/character`)
        //TODO: REVISAR QUE LA RUTA ESTÉ CORRECTA!!! (ESTÁ CORRECTA LA RUTA!!! 🥳)
        setCharactersList(rawData.data.results)
    }
    const getLocations = async () => {
        const rawData = await axios.get(`${RMBASEURL}/location`)
        setLocationsList(rawData.data.results)
    }
    const getEpisodes = async () => {
        const rawData = await axios.get(`${RMBASEURL}/episode`)
        setEpisodesList(rawData.data.results)
    }

    //Todo lo relacionado con User xD
    const [user, setUser] = useState(undefined)
    const login = () => {
        setUser("Elias")
    }
    const logout = () => {
        setUser(undefined)
    }

    //useEffect para el FETCH 
    useEffect(() => {
        getCharacters()
        getLocations()
        getEpisodes()
    }, [])
    
    return (
        //OJO!!!: NUNCA OLVIDARSE QUE DESPUIES DE 'value' VIENEN LAS CONSTANTES DENTRO DE DOBLES LLAVES!
        <RickAndMortyContext.Provider value={{charactersList, locationsList, episodesList, user, login, logout}}>
            {children}
        </RickAndMortyContext.Provider>
    )
}
