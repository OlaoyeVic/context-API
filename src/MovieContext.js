import React, { createContext, useState } from 'react'

export const MovieContext = createContext()

export const MovieProvider = (props) =>{
    const [movies, setMovies] = useState([
        {
            name: "Harry Potter",
            price: "$10",
            id: 23124
        },
        {
            name: "NeXt",
            price: "$30",
            id: 23125
        },
        {
            name: "Money Heist",
            price: "$50",
            id: 23126
        },
        {
            name: "Lupin",
            price: "$70",
            id: "23127"
        }
    ])

    return(
        <MovieContext.Provider value = {[movies, setMovies]}>{props.children}</MovieContext.Provider>
    )
}
export default MovieContext