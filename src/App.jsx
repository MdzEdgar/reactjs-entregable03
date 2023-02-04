import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import {getRandomNumber} from './utils/handleRandom'

function App() {
  const [location, setLocation] = useState()
  const [nameLocation, setNameLocation] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setNameLocation(e.target.idLocation.value)
  }

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
