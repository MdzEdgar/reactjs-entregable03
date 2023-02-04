import React from 'react'
import { numbersPage } from '../utils/handlePagination'

const Pagination = ({setPage, RESIDENTS_PERPAGE, location}) => {
  return (
    <ul>
        {
          numbersPage(location, RESIDENTS_PERPAGE).map(numberPage => <li onClick={() => setPage(numberPage)} key={numberPage}>{numberPage}</li>)
        }
      </ul>
  )
}

export default Pagination