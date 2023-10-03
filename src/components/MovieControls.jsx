import React, { useContext } from 'react'
import { GlobalContext } from './context/Globalcontext'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CloseIcon from '@mui/icons-material/Close';
const MovieControls = ({movie, type}) => {
    const {MoviesDispatch} =useContext(GlobalContext)
  return (
    <div>
        <div className='inner-card-controls'>
      {type === 'watchlist' &&
        <>
          <button
            className="ctrl-btn"
            onClick={() => MoviesDispatch({ type: 'ADD_MOVIE_TO_WATCHED', payload: movie })}

          >
            {/* <i className="fa-solid fa-eye"></i> */}
            <VisibilityIcon/>
          </button>
          <button
            className="ctrl-btn"
            onClick={() => MoviesDispatch({ type: 'REMOVE_MOVIE_FROM_WATCHLIST', payload: movie.imdbID })}
          >
            {/* <i className='fa-fw fa fa-times' /> */}
            <CloseIcon/>
          </button>
        </>
      }
      {
        type === 'Watched' &&
        <>
          <button
            className='ctrl-btn'
            onClick={()=>MoviesDispatch({ type: 'MOVE_TO_WATCHLIST', payload: movie })}
          >
            {/* <i className="fa-solid fa-eye-slash"></i> */}
            <VisibilityOffIcon/>
          </button>
          <button
            className='ctrl-btn'
            onClick={()=>MoviesDispatch({ type: 'REMOVE_FROM_WATCHED', payload: movie.imdbID })}
          >
            {/* <i className='fa-fw fa fa-times' /> */}
            <CloseIcon/>
          </button>
        </>
      }
    </div>
    </div>
  )
}

export default MovieControls