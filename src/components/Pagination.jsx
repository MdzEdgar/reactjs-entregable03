import { numbersPage } from '../utils/handlePagination'
import './styles/Pagination.css'

const Pagination = ({setPage, RESIDENTS_PERPAGE, location, page}) => {
  console.log(page)

  return (
    
    <ul className='pagination'>
      <li><a href="#">Prev</a></li>
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
        <li><a href="#">Next</a></li>
      </ul>
  )
}

export default Pagination