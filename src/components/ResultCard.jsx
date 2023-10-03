/* eslint-disable jsx-a11y/alt-text */


 import { useContext } from 'react'
import {GlobalContext} from'./context/Globalcontext'
 
const ResultCard = ({movie}) => {
  // const {MoviesDispatch} = useMoveContext();
  // const {MoviesDispatch , wahtchlist , wahched} = useMoveContext()
  const {MoviesDispatch ,Watched ,watchlist } = useContext(GlobalContext)
  const Sroremovielist =watchlist.find((find)=>find.imdbID ===movie.imdbID)// لو الفيلم متخزن  return true 
  const SroremovieWatched =Watched.find((find)=>find.imdbID ===movie.imdbID)
    
    const watchlistdisapbe = Sroremovielist ? true : SroremovieWatched ? true: false
    const watchedDisabled = SroremovieWatched ? true: false
  return (
    <div className='result-card'>
        <div className="poster-wrapper">
           {movie.Poster ? <img src={movie.Poster} alt={movie.Poster}/>
           :<div className='filter-poster'></div>}
        </div>
        
    <div className="info">
        <div className="header">
            <h3 className='title'> {movie.Title}</h3>
            {movie.Year ? <h4 className='release-date'>{movie.Year}</h4>:'-'}
        </div>
        <div className="controls" style={{display:'flex'}}>
            <button
              className='btn'
              disabled={watchlistdisapbe}
              onClick={()=>MoviesDispatch({type : 'ADD_MOVIE_TO_WATCHLIST' , payload : movie })}
             >Add to Watchlist
            </button>
            <button
             className='btn'
              disabled={watchedDisabled}
              onClick={()=>MoviesDispatch({type : 'ADD_MOVIE_TO_WATCHED' , payload : movie })}
             >Add to Watched
            </button>
        </div>
    </div>



    </div>
  )
}

export default ResultCard