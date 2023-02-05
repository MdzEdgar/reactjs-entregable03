import React from 'react'
import { numbersPage } from '../utils/handlePagination'
import './styles/Pagination.css'

const Pagination = ({setPage, RESIDENTS_PERPAGE, location}) => {
  return (
    <ul className='pagination'>
        {
          numbersPage(location, RESIDENTS_PERPAGE).map(numberPage => <li  className='pagination__page' onClick={() => setPage(numberPage)} key={numberPage}>{numberPage}</li>)
        }
      </ul>
  )
}

export default Pagination