import React, { useContext, useEffect, useState } from "react";
import styled from 'styled-components'
import TextInput from './FilteringInput/textInput';
import FilterSubmit from "./FilteringButton/filterButton";
import ReactPaginate from 'react-paginate';
import { useGlobalState } from "../../GlobalState/globalState";
const { useForm } = "ReactHookForm"




const Paginate = styled(ReactPaginate)`
display: flex;
font-weight: bold;
list-style: none;
a {
    padding 5px;
  }
`



const ContainerTitle = styled.h1`
padding: 10px;
`

const Container = styled.div`

 width: 100%
 height: 300px ;
`;


const FilterContainer = ({number}) =>
{
    

    


    const [items, setItems] = useGlobalState('items');
    const [numberBooks, setNumberBooks] = useGlobalState('numberBooks');



    const [type, setType] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [downloads, setDownloads] = useState("");;
    const [resources, setResources] = useState("");
    const [agentsType, setAgentsType] = useState("");
    const [agentsName, setAgentsName] = useState("")


    const getAnotherPage = async (currentPage) => {
      const res = await fetch (`https://gnikdroy.pythonanywhere.com/api/book/?agent_alias_contains=&agent_birth_date_range_max=&agent_birth_date_range_min=&agent_death_date_range_max=&agent_death_date_range_min=&agent_name_contains=&agent_webpage_contains=&description_contains=&downloads_range_max=&downloads_range_min=&has_agent_type=&has_bookshelf=&has_resource_type=&languages=&page=${currentPage}&title_contains=&type=`)
      const data = await res.json();
      return data
    }
    
    const filterPage = async () => {
      const res = await fetch (`https://gnikdroy.pythonanywhere.com/api/book/?type=${type}&languages=&title_contains=${title}&description_contains=${description}&downloads_range_min=&downloads_range_max=&has_bookshelf=&has_resource_type=${resources}&has_agent_type=${agentsType}&agent_name_contains${agentsName}=&agent_alias_contains=&agent_webpage_contains=&agent_birth_date_range_min=&agent_birth_date_range_max=&agent_death_date_range_min=&agent_death_date_range_max=`)
      const data = await res.json();
      return data
    }
    
    const handleSubmit = async (e) => {
     e.preventDefault();
     const data = await filterPage()
     setItems(data.results)
     setNumberBooks(data.count)
    };
    
    
    const handlePageClick = async (numberPage) => {
      const currentPage = numberPage.selected + 1
      const data = await getAnotherPage  (currentPage)
      setItems(data.results)
    }




  return (
    <Container>
    <ContainerTitle>Filters</ContainerTitle>
    <form onSubmit={handleSubmit}>
      <TextInput labelName={"Type:"} type={"text"} id={"type"} isFocus={true}  value={type} setValue={setType} />
      <TextInput labelName={"Title contains:"} type={"text"} id={"titleContains:"} isFocus={false}  value={title} setValue={setTitle} />
      <TextInput labelName={"Description contains:"} type={"text"} id={"desriptionContains"} isFocus={false}  value={description} setValue={setDescription} />
      <TextInput labelName={"Downloads is in range:"} type={"text"} id={"downloads"} isFocus={false}  value={downloads} setValue={setDownloads} />
      <TextInput labelName={"Resources type:"} type={"text"} id={"resourcesType"} isFocus={false}  value={resources} setValue={setResources} />
      <TextInput labelName={"Agents type:"} type={"text"} id={"agentsType"} isFocus={false}  value={agentsType} setValue={setAgentsType} />
      <TextInput labelName={"Agents person name contains:"} type={"text"} id={"agentsName"} isFocus={false}  value={agentsName} setValue={setAgentsName} />

      <div className="date-container">
      </div>
      <FilterSubmit title="Submit" />
    </form>
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
</Container>
  )
   
}

   



export default FilterContainer;