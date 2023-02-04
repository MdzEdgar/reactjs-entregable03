import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import {getRandomNumber} from './utils/handleRandom'

function App() {
  //Estado que almacena la información de la location
  const [location, setLocation] = useState()
  //Estado que almacena la información del input no controlado
  const [nameLocation, setNameLocation] = useState("")

  //Funcion que se ejecuta en el submit del formulario
  const handleSubmit = (e) => {
    e.preventDefault()
    setNameLocation(e.target.idLocation.value)
  }

  //Efecto que se ejecuta en el primer render y cuando cambia nameLocation
  useEffect(() => {
    const dimension = nameLocation === "" ? getRandomNumber(126) : nameLocation
    const URL =`https://rickandmortyapi.com/api/location/${dimension}`
    axios.get(URL)
    .then((res) => setLocation(res.data))
    .catch((err) => console.log(err))
  }, [nameLocation])

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" id='idLocation' placeholder='type a location id' />
        <button>Search</button>
      </form>
      <LocationInfo location={location}/>
      {
        location?.residents.map(residentUrl => <ResidentCard key={residentUrl} residentUrl={residentUrl}/>)
      }
    </div>
  )
}

export default App
