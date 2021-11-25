import React from 'react';


const ConfirmWindow = ({deleteMovie, setVisible, title})=>{

return(
  <div className="confirm-modal">
     <h3>Действительно хотите удалить <strong>{title}</strong>?</h3>
  <div className="d-flex justify-content-between mt-5">
  <button className="btn btn-outline-secondary" onClick={()=>setVisible(false)}>Отмена</button>
  <button className="btn btn-outline-secondary" onClick={deleteMovie}>Удалить</button>
  </div>
  </div>

)}

export default ConfirmWindow