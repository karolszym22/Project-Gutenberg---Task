import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import TextInput from './FilteringInput/textInput';
import FilterSubmit from "./FilteringButton/filterButton";
const ContainerTitle = styled.h1`
padding: 10px;
`

const Container = styled.div`

 width: 100%
 height: 300px ;
`;


const FilterContainer = () =>
{
    const [type, setType] = useState("title");
    const [title, setTitle] = useState("asdasda");
    const [description, setDescription] = useState("asdasda");
    const [downloads, setDownloads] = useState("asdasda");
    const [bookshelves, setBookshelves] = useState("");
    const [resources, setResources] = useState("");
    const [agentsType, setAgentsType] = useState("");
    const [agentsName, setAgentsName] = useState("")

  return (
    <Container>
    <ContainerTitle>Filters</ContainerTitle>
    <form>
      <TextInput labelName={"Type:"} type={"text"} id={"type"} isFocus={true}  value={type} setValue={setType} />
      <TextInput labelName={"Title contains:"} type={"text"} id={"titleContains:"} isFocus={false}  value={title} setValue={setTitle} />
      <TextInput labelName={"Description contains:"} type={"text"} id={"desriptionContains"} isFocus={false}  value={title} setValue={setTitle} />
      <TextInput labelName={"Downloads is in range:"} type={"text"} id={"downloads"} isFocus={false}  value={title} setValue={setTitle} />
      <TextInput labelName={"Resources type:"} type={"text"} id={"resourcesType"} isFocus={false}  value={title} setValue={setTitle} />
      <TextInput labelName={"Agents type:"} type={"text"} id={"agentsType"} isFocus={false}  value={title} setValue={setTitle} />
      <TextInput labelName={"Agents person name contains:"} type={"text"} id={"agentsName"} isFocus={false}  value={title} setValue={setTitle} />

      <div className="date-container">
      </div>
      <FilterSubmit title="Submit" />
    </form>
</Container>
  )
   
}

   



export default FilterContainer;