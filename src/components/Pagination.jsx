import React from 'react'

const Pagination = ({numbersPage, setPage}) => {
  return (
    <ul>
        {
          numbersPage().map(numberPage => <li onClick={() => setPage(numberPage)} key={numberPage}>{numberPage}</li>)
        }
      </ul>
  )
}

export default Pagination