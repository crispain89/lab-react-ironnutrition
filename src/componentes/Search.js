import React from 'react'

function Search({ search}) {
  return (
      <div className="search">
          <label>Search</label>
          <input type="search" onChange={ (e)=>search(e.target.value)}></input>

    </div>
  )
}

export default Search