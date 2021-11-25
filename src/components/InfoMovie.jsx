import React,{useEffect, useState} from 'react';
import Rating from 'react-rating'



const InfoMovie = ({info, setVisible})=>{
  const [defaultPoster,setDefaultPoster] = useState({backgroundImage:'linear-gradient(45deg, rgb(0,3,38)0%, rgb(82,15,117)100%)'})
  useEffect(()=>{
    if (info.Poster) {
      setDefaultPoster({ backgroundImage: `url('${info.Poster}')` });
    } else {
      setDefaultPoster({
        backgroundImage:
        'linear-gradient(45deg, rgb(0,3,38)0%, rgb(82,15,117)100%)'
      });
  }},[info.Poster])



return(
<div className="info-wrap">
   <div className="info-header">
     <h6 className="info-header-title">Movie view</h6>
     <img className="close-icon" onClick={()=>setVisible(false)} src="https://img.icons8.com/windows/32/000000/close-window.png"/>
   </div>
   <div className="info-content">
     <div className="row">
       <div className="col-4">
         <div className="info-poster-wrap mb-3">
           <div className="movie-poster" style={defaultPoster}>
           </div>
         </div>
       </div>
       <div className="col-8">
         <h3 className="info-title">{info.Title}</h3>
         <div className="info-rating">
         <Rating stop="10" readonly={true} initialRating={Number(info.imdbRating)}/>
         <p>{info.imdbRating}/10</p>
         </div>
         <p className="movie-discription">{info.Plot}</p>
         <div className="mt-3 mb-4">
           <span className="badge rounded-pill bg-success" style={{marginRight:10}}>{info.Year}</span>
           <span className="badge rounded-pill bg-success" style={{marginRight:10}}>{info.Runtime}</span>
           <span className="badge rounded-pill bg-success" style={{marginRight:10}}>{info.Genre}</span>
           <span className="badge rounded-pill bg-success " style={{marginRight:10}}>{info.Language}</span>
         </div>
         <table className="table small">
           <tbody>
             <tr>
               <th>Production</th>
               <td>{info.Production}</td>
             </tr>
             <tr>
               <th>Country</th>
               <td>{info.Country}</td>
             </tr>
             <tr>
               <th>Director</th>
               <td>{info.Director}</td>
             </tr>
             <tr>
               <th>Writer</th>
               <td>{info.Writer}</td>
             </tr>
             <tr>
               <th>Actors</th>
               <td>{info.Actors}</td>
             </tr>
             <tr>
               <th>Awards</th>
               <td>{info.Awards}</td>
             </tr>
           </tbody>
         </table>

       </div>
     </div>
   </div>
</div>
)}

export default InfoMovie