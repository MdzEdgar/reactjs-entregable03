import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './styles/ResidentForm.css'

const ResidentForm = ({handleSubmit}) => {
const [locationName, setLocationName] = useState([])
const [input, setInput] = useState()

const handleInput = (e) => {
  let evalue = e
  if(evalue !== "") {
    const URL = `https://rickandmortyapi.com/api/location/?name=${evalue}`
  console.log(URL)
  axios.get(URL)
  .then((res) => setInput(res.data.results))
  .catch((err) =>console.log(err))
  } else {
    let evalue = ""
  }
}


  return (
    <section>
      <form className='residentForm'>
        <input className='residentForm__input' type="text" id='inputLocation' placeholder='Enter name' 
        onChange={(e) => handleInput(e.target.value)} />
        <button className='residentForm__btn' >Search</button>
        <select name="resultsLocation" id="resultsLocation">
        </select>
      </form>
      <div className="locations">
        {
          input && (
            <ul className='pagination'>
            {
              input.map(i => <li  className='locations' key={i.url}>{i.url}</li>)
            }
          </ul>
          )
        }
      </div>
    </section>
  )
}

export default ResidentForm