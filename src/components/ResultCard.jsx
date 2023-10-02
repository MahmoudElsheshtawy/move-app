/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

const ResultCard = ({movie}) => {
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
    </div>



    </div>
  )
}

export default ResultCard