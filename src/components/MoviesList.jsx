import React, {useState, useEffect} from 'react';
import MovieItem from './MovieItem';
import MyModal from './UI/Modal/MyModal';
import InfoMovie from './InfoMovie';


const MoviesList = ({ movies , getMovieUrl, deleteMovieById, isSearch}) => {
  const [mainTitle, setMainTitle] = useState('IMDB Top 250')
  const [informationMovie, setInformationMovie] = useState({})
  const [showModal, setShowModal] = useState(false)
  useEffect(()=>{
     if (isSearch){
      setMainTitle('Search Film')
     }
     else{
      setMainTitle('IMDB Top 250')
     }
  },[isSearch])
  const infoMovie = (id)=>{
     const movie = movies.find(m=>m.imdbID ===id)
     console.log(movie);
     setInformationMovie(movie)
     setShowModal(true)
  }
  return (
    <div className="container">
      <h3 className="list-title">{mainTitle}</h3>
      {movies?<div className="row">
      {movies.map((movie) => (
         <div key={movie.imdbID} className="col-3">
             <MovieItem
              movie={movie}
              getMovieUrl={getMovieUrl}
              deleteMovieById={deleteMovieById}
              infoMovieById={infoMovie}
              />
         </div>
        ))}

      </div>:<h3>Нема фильмов</h3>}
      <MyModal visible={showModal} setVisible={setShowModal}>
        <InfoMovie info={informationMovie} setVisible={setShowModal}/>
      </MyModal>


    </div>
  );
};

export default MoviesList;
