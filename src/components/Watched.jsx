import React, { useContext } from 'react'
import {GlobalContext} from './context/Globalcontext'
import  {MovieCard}  from './MovieCard'
const Watched = () => {
  const  {Watched}  = useContext(GlobalContext)

  return (
    <div className='Watched'>
    <div className="container">
      <div className="header" style={{padding:'50px 20px',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
      <h1 className='heading'>My Watched</h1>
    <span className='count-pill'>
      
       {Watched.length}  
      {/* s 0 1 */}
      {Watched.length === 1 ? 'Movie':'Movies' }
    </span>
  </div> 
      {Watched.length > 0 ? 
      (<div className="movie-grid">
         {Watched.map((movie)=>(
            <MovieCard key={movie.imdbID} movie={movie} type='Watched'/>
          ))}
         
     </div>):(<h2  className='no-movies'style={{ color: "#c4c4c4",
  fontSize: '3rem',
  textAlign: "center"}}>No movies in Wactched, add some!</h2>)
    
    }
    </div>
    </div>
  )
}

export default Watched