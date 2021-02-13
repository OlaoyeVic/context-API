import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import Movie from './Movie'
import MovieContext from '../MovieContext'

function Nav(){
    const [movies, setMovies] = useContext(MovieContext)

    return(
        <div className = "nav">
            <ul className = "nav-link">
            
                <li>Victor</li>
            
                <li>Number of price: {movies.length}</li>
            
            </ul>
        </div>
    )
}
export default Nav