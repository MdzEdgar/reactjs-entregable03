import React from 'react'
import './styles/Loader.css'

const Loader = () => {
  return (
    <div className='Loader'>
      <h1>Loading...</h1>
      <div className="Loader__img">
        <img src="/loader.gif" alt="Loading..." />
      </div>
    </div>
  )
}

export default Loader