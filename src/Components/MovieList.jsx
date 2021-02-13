import React, { useContext } from 'react'
import MovieContext from '../MovieContext'
import Movie from './Movie'

function MovieList(){
        const [movies, setMovies] = useContext(MovieContext)

        return(
            <div >
                {movies.map(movie =>{
                    return(
                        <Movie
                            name = {movie.name}
                            price = {movie.price}
                        /> 
                    )
                })}
            </div>
        )
}
export default MovieList