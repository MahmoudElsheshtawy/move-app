import React, { useContext } from 'react'
import {GlobalContext} from './context/Globalcontext'
import { MovieCard } from './MovieCard'
const Watchedlist = () => {
  const { watchlist } = useContext(GlobalContext)

  return (
    <div className="movie-page">
    <div className="container">
      <div className="header" style={{padding:'40px 20px'}}>
      <h1 className='heading'>My Watchlist</h1>
    <span className='count-pill'>
      {/* count  */}
      {watchlist.length} 
      {/* s 0 1 */}
      {watchlist.length === 1 ? 'Movie':'Movies' }
    </span>
  </div>
      {watchlist.length > 0 ? 
      (<div className="movie-grid">
         {watchlist.map((movie)=>(
            <MovieCard key={movie.imdbID} movie={movie} type='watchlist'/>
          ))}
         
     </div>):(<h2  className='no-movies'>No movies in your list, add some!</h2>)
    
    }
    </div>
  </div>
  )
}

export default Watchedlist
