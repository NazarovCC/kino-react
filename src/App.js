import React, { useEffect, useState } from 'react';
import './App.css';
import { KinoService } from './API/KinoService';
import IDs from './imdb_top250';
import { useFetching } from './hooks/useFetching';
import Pagination from './components/UI/Pagination/Pagination'
import MoviesList from './components/MoviesList';
import PosterBg from './components/UI/PosterBg'
import {getPageCount} from './utils/pages'
import Loader from './components/UI/Loader/Loader'
import MyModal from './components/UI/Modal/MyModal';
import ConfirmWindow from './components/ConfirmWindow';
import Header from './components/Header'
import useDebounce from './hooks/useDebounce'
import Notifacation from './components/UI/Notification/Notification';

function App() {
  const [kino, setKino] = useState([]);
  const [modalConfirm, setModalConfirm] = useState(false);
  const [idKino, serIdKino] = useState({id:'', title:''})
  const [listIdFilm, setListIdFilm] = useState(IDs);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);
  const [totalPage, setTotalPage] = useState(0)
  const [backImage, setBackImage] = useState('')
  const [filter, setFilter] = useState('')
  const [isSearch,setIsSearch] = useState(false)
  const [notification, setNotification] = useState({
    msg: '',
    show: false,
    delay: 5000
  })
  const [fetchKinoAll, isLoadingAll, errorAll] = useFetching(async () => {
    const response = await KinoService.fetchMovies(page, limit, slicedIds);
    setKino(response);
    setTotalPage(getPageCount(listIdFilm.length,limit))
  });
  const [fetchKinoBySearch, isLoading, error] = useFetching
  (async()=>{
      const response = await KinoService.fetchMoviesBySearch(debouncedSearch)
      if (response.data.Error){
        setNotification({...notification,show:true,msg:response.data.Error,delay:3000})
        setKino([]);
         setTotalPage(0)
      }
      else{
        setKino(response.data.Search);
        setTotalPage(getPageCount(response.data.Search.length,limit) )
      }


    }
  )

  const slicedIds = (from, to) => listIdFilm.slice(from, to);

  useEffect(() => {
    fetchKinoAll();
  }, [page]);


  const changeBG = (poster)=>{
    setBackImage(poster)
  }

   //Pagination
  const changePage = (page)=>{
    setPage(page)
  }
  const nextHandler = (page)=>{
    setPage(page+1)
  }
  const perviousHandler = (page)=>{
    setPage(page-1)

  }


  //Remove film
  const deleteMovie = ()=>{
    setListIdFilm(listIdFilm.filter(k=>k!==idKino.id))
    setKino(kino.filter(k=>k.imdbID!==idKino.id))
    setModalConfirm(false)
    setNotification({...notification,show:true,msg:'Успешно удалили'})
  }
  const addIdKino = (id, title)=>{
    setModalConfirm(true)
    serIdKino({id, title})
  }

  //Filter film
  const debouncedSearch = useDebounce(filter, 1000)
  useEffect(()=>{
     if(debouncedSearch.length!==0){
      setIsSearch(true)
      fetchKinoBySearch()
      setPage(1)
      setLimit(12)
     }
     else{
      setIsSearch(false)
      fetchKinoAll();
      setPage(1)
      setLimit(12)
     }

  },[debouncedSearch])



  return (
    <div className="App">

       <Loader isLoading={isLoadingAll}/>
       <Notifacation notif={notification} setNotification={setNotification}/>
       <PosterBg imageUrl={backImage}/>
       <Header filter={filter} setFilter={setFilter}/>
       <MoviesList
       movies={kino}
       getMovieUrl={changeBG}
       deleteMovieById={addIdKino}
       isSearch={isSearch}
       />
       <MyModal visible={modalConfirm} setVisible={setModalConfirm}>
           <ConfirmWindow
            deleteMovie={deleteMovie}
            setVisible={setModalConfirm}
            title={idKino.title}/>

      </MyModal>

       <Pagination
       totalPage={totalPage}
       currentPage={page}
       changePage={changePage}
       changePageNext={nextHandler}
       changePagePrevious={perviousHandler}
       />
    </div>
  );
}

export default App;
