import React, { useContext, useState } from 'react'
import MovieContext from '../MovieContext'

function AddMovies(){
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [movies, setMovies] = useContext(MovieContext)

    function addName(event){
       setName(event.target.value) 
    }

    function addPrice(event){
        setPrice(event.target.value) 
     }
    
    function handleSubmit(event){
        event.preventDefault()
        setMovies(prevValue => [...prevValue, {name: name, price: price}])
        setName('')
        setPrice('')
    }

    return(
        <div className = "form">
            <form onSubmit = {handleSubmit}>
                <input type = "text" placeholder = "Name of movie" value = {name} onChange = {addName} />
                <input type = "text" placeholder = "Price of movie" value = {price} onChange = {addPrice} /><br/>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default AddMovies