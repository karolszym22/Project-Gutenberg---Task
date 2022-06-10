import React, { useEffect} from 'react';
import styled from 'styled-components'
import FilterContainer from '../FilteringForm/filterContainer';
import { useGlobalState } from "../../GlobalState/globalState";





function FilterTemplate() {

  
const [items, setItems] = useGlobalState('items');
const [favoriteBooks, setFavoriteBooks] = useGlobalState('favoriteBooks');
const [numberBooks, setNumberBooks] = useGlobalState('numberBooks');

const fetchBooks = async () => {
  const res = await fetch (`https://gnikdroy.pythonanywhere.com/api/book/?agent_alias_contains=&agent_birth_date_range_max=&agent_birth_date_range_min=&agent_death_date_range_max=&agent_death_date_range_min=&agent_name_contains=&agent_webpage_contains=&description_contains=&downloads_range_max=&downloads_range_min=&has_agent_type=&has_bookshelf=&has_resource_type=&languages=&title_contains=&type=`)
  const data = await res.json();
  setItems(data.results)
  setNumberBooks(data.count)
}



useEffect(()=>{
  
 fetchBooks()
  
}, [])



  
    return (
      <div>
        <FilterContainer></FilterContainer>
        {items.map((item) => {
               return <div key={item.id}>{item.title}</div>
        })}
       </div>
    );
  
  
}

export default FilterTemplate