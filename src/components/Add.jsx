import React, { useEffect, useState } from 'react'
import  axios  from 'axios'
import ResultCard from './ResultCard'
const Add = () => {


  const [movies , setMovies] = useState([]) //storeg my felms
  const [searchValue , setSearchValue] = useState("")
 useEffect(()=>{
   axios.get(`https://www.omdbapi.com/?s=${searchValue}&apikey=11a4e004`)
   .then(response=>{
    console.log(response.data.Search)
    if (response.data.Search) {       //if true
      setMovies(response.data.Search) 
    }

     }).catch(error=>console.log(error)) //handle error
 },[searchValue])








  return (
    <div className='add-container'>
      <div className="content">
        <input type="text" 
        placeholder='Search for a move...'
        onChange={(e)=>setSearchValue(e.target.value)}
        value={searchValue}
        />
      </div>
      {/* if find eny moveis render my felim in the search */}
      {movies.length > 0 &&(<ul className='results'> 
        {movies.map((movie)=> 
        <li key={movie.imdbID}>
          {/* the name failm */}
         <ResultCard movie={movie}/>     
        </li>)}
      </ul>)}





    </div>
  )
}

export default Add