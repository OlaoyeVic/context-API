import React from 'react'

function Movie({name, price}){
    return(
        <div className = "movie-container">
            <h2>{name}</h2><br/>
            <p>{price}</p>
        </div>
    )
}
export default Movie