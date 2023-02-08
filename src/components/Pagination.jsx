import { numbersPage } from '../utils/handlePagination'
import './styles/Pagination.css'

const Pagination = ({setPage, RESIDENTS_PERPAGE, location, page}) => {
  const nPages = Math.ceil(location?.residents.length / RESIDENTS_PERPAGE);

  const nextPage = () => {
    if(page !== nPages) setPage(page + 1)
  }

  const prevPage = () => {
    if(page !== 1) setPage(page -1)
  }

  return (
    
    <ul className='pagination'>
      <li>
        <a onClick={prevPage} href="#">
          <i className='bx bx-chevron-left'></i>
        </a>
      </li>
        {
          numbersPage(location, RESIDENTS_PERPAGE).map(numberPage => 
          <li key={numberPage} 
          className={`pagination__page ${page == numberPage && 'active'} `} 
          onClick={
            () => {
              setPage(numberPage)
              window.scrollTo( 0, 0);
            }
          }>
            {numberPage}
          </li>)
        }
        <li>
          <a onClick={nextPage} href="#">
            <i className='bx bx-chevron-right' ></i>
          </a>
        </li>
      </ul>
  )
}

export default Pagination