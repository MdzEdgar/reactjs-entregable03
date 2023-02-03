import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import {getRandomNumber} from './utils/handleRandom'

function App() {
  const [location, setLocation] = useState()

  useEffect(() => {
    const URL =`https://rickandmortyapi.com/api/location/${getRandomNumber(126)}`
    axios.get(URL)
    .then((res) => setLocation(res.data))
    .catch((err) => console.log(err))
  }, [])

  return (
    <div className="App">
      <h1>Hola mundo</h1>
      <LocationInfo location={location}/>
      {
        location?.residents.map(residentUrl => <ResidentCard key={residentUrl} residentUrl={residentUrl}/>)
      }
    </div>
  )
}

export default App
