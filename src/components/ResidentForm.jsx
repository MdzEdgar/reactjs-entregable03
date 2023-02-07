import React from 'react'
import './styles/ResidentForm.css'

const ResidentForm = ({handleSubmit}) => {
  return (
    <form className='residentForm' onSubmit={handleSubmit}>
        <input className='residentForm__input' type="text" id='idLocation' placeholder='type a location id' />
        <button className='residentForm__btn' >Search</button>
      </form>
  )
}

export default ResidentForm