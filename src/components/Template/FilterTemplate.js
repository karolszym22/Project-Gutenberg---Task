import React, { useEffect} from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components'
import FilterContainer from '../FilteringForm/filterContainer';
import { useGlobalState } from "../../GlobalState/globalState";



const Paginate = styled(ReactPaginate)`
display: flex;
font-weight: bold;
list-style: none;
a {
    padding 5px;
  }
`

function FilterTemplate() {

  
const [items, setItems] = useGlobalState('items');
const [numberBooks, setNumberBooks] = useGlobalState('numberBooks');
const [favoriteBooks, setFavoriteBooks] = useGlobalState('favoriteBooks');


useEffect(()=>{
  const fetchBooks = async () => {
    const res = await fetch (`https://gnikdroy.pythonanywhere.com/api/book/?agent_alias_contains=&agent_birth_date_range_max=&agent_birth_date_range_min=&agent_death_date_range_max=&agent_death_date_range_min=&agent_name_contains=&agent_webpage_contains=&description_contains=&downloads_range_max=&downloads_range_min=&has_agent_type=&has_bookshelf=&has_resource_type=&languages=&title_contains=&type=`)
    const data = await res.json();
    setItems(data.results)
    setNumberBooks(data.count)
  }
  fetchBooks()
  
}, [])


const getAnotherPage = async (currentPage) => {
  const res = await fetch (`https://gnikdroy.pythonanywhere.com/api/book/?agent_alias_contains=&agent_birth_date_range_max=&agent_birth_date_range_min=&agent_death_date_range_max=&agent_death_date_range_min=&agent_name_contains=&agent_webpage_contains=&description_contains=&downloads_range_max=&downloads_range_min=&has_agent_type=&has_bookshelf=&has_resource_type=&languages=&page=${currentPage}&title_contains=&type=`)
  const data = await res.json();
  console.log("druga data", data)
  return data
}






const handlePageClick = async (numberPage) => {
  const currentPage = numberPage.selected + 1
  const data = await getAnotherPage  (currentPage)
  setItems(data.results)
}
  
    return (
      <div>
        <FilterContainer></FilterContainer>
        {items.map((item) => {
               return <div key={item.id}>{item.title}</div>
        })}

        
         <Paginate
          nextLabel="Następny"
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={numberBooks/10}
          onPageChange = {handlePageClick}
          previousLabel="Poprzedni"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
        
     
     </div>
    );
  
  
}

export default FilterTemplate