import React from 'react';

const MovieItem = ({ movie, getMovieUrl, deleteMovieById,infoMovieById }) => {
  return (
    <div className="movie-item mb-3" onMouseOver={()=>getMovieUrl(movie.Poster)}>

        <div
          className="movie-item-poster"
          style={{ backgroundImage: `url(${movie.Poster})` }}
        ></div>
         <div className="movie-info-wrap d-flex flex-column justify-content-between">
        <div className="movie-item-info">
          <h3 className="movie-title">{movie.Title}</h3>
          <span className="movie-year">{movie.Year}</span>
        </div>

      <div className="movie-item-controls">
        <button className="col-6 btn btn-outline-light" onClick={()=>infoMovieById(movie.imdbID)}>
               Info
             </button>
             <button className="col-6 btn btn-outline-light" onClick={()=>deleteMovieById(movie.imdbID, movie.Title)}>
                Remove
             </button>
      </div>
      </div>
    </div>
  );
};

export default MovieItem;
