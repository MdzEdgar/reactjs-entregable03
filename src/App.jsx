import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import LocationInfo from './components/LocationInfo'
import Pagination from './components/Pagination'
import ResidentForm from './components/ResidentForm'
import ResidentList from './components/ResidentList'
import {getRandomNumber} from './utils/handleRandom'

const RESIDENTS_PERPAGE = 12

function App() {
  //Estado que almacena la información de la location
  const [location, setLocation] = useState()
  //Estado que almacena la información del input no controlado
  const [nameLocation, setNameLocation] = useState("")
  const [page, setPage] = useState(1)

  //Funcion que se ejecuta en el submit del formulario
  const handleSubmit = (e) => {
    e.preventDefault()
    setNameLocation(e.target.idLocation.value)
  }

  //Función que se encarga de obtener los nuevos residentes dependiendo de la pagina actual
  const pagination = () => {
    if(!location) return []
    const maxLimit = RESIDENTS_PERPAGE * page
    const minLimit = maxLimit - RESIDENTS_PERPAGE
    const newResidents = location?.residents.slice(minLimit, maxLimit)
    return newResidents
  }

  //Efecto que se ejecuta en el primer render y cuando cambia nameLocation
  useEffect(() => {
    setPage(1)
    const dimension = nameLocation === "" ? getRandomNumber(126) : nameLocation
    const URL =`https://rickandmortyapi.com/api/location/${dimension}`
    axios.get(URL)
    .then((res) => setLocation(res.data))
    .catch((err) => console.log(err))
  }, [nameLocation])

  return (
    <div className="App">
      <header className="header">
        <img src="header.jpg" alt="" />
      </header>
      <ResidentForm handleSubmit={handleSubmit} />
      <LocationInfo location={location}/>
      <Pagination RESIDENTS_PERPAGE={RESIDENTS_PERPAGE} location={location} setPage={setPage} />
      <ResidentList pagination={pagination} />
      <Pagination RESIDENTS_PERPAGE={RESIDENTS_PERPAGE} location={location} setPage={setPage} />
    </div>
  )
}

export default App
