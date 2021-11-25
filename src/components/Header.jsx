import React from 'react';


const Heder = ({filter, setFilter})=>{

return(
<div className="header">
<nav className="navbar navbar-dark bg-dark my-navbar">
  <div className="container-fluid">
  <a className="navbar-brand" href="#zalupa">MovieDB</a>
    <form className="d-flex">
      <input
        className="form-control me-2 search-input"
        type="search"
        placeholder="Search"
        aria-label="Search"
        value={filter}
        onChange={e=>setFilter(e.target.value)}
        />
    </form>
  </div>
</nav>
</div>
)}

export default Heder