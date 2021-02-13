import React from 'react'
import MovieList from './MovieList'
import MovieContext, { MovieProvider } from '../MovieContext'
import Nav from './Nav'
import AddMovies from './AddMovies'

function App(){
    return(
        <MovieProvider>
            <div>
                <Nav />
                <AddMovies />
                <MovieList />
            </div>
        </MovieProvider>
    )
}
export default App