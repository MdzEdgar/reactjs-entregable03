import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import LocationInfo from './components/LocationInfo'
import Pagination from './components/Pagination'
import ResidentCard from './components/ResidentCard'
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

  const numbersPage = () => {
    const quantityPages = Math.ceil(location?.residents.length / RESIDENTS_PERPAGE);
    const arrayPages = []
    for (let i = 1; i <= quantityPages; i++) {
      arrayPages.push(i)
    }
    return arrayPages
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
      <form onSubmit={handleSubmit}>
        <input type="text" id='idLocation' placeholder='type a location id' />
        <button>Search</button>
      </form>
      <LocationInfo location={location}/>
      <Pagination numbersPage={numbersPage} setPage={setPage} />
      <ResidentList pagination={pagination} />
      <Pagination numbersPage={numbersPage} setPage={setPage} />
    </div>
  )
}

export default App
