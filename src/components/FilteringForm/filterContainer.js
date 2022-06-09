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
 background-color: black ;
`;


const FilterContainer = () =>
{
    const [type, setType] = useState("");
    const [title, setTitle] = useState("");


    <Container>
        <ContainerTitle>Filters</ContainerTitle>
        <form>
          <TextInput labelName={"Type:"} type={"text"} id={"type"} isFocus={true}  value={type} setValue={setType} />
          <TextInput labelName={"Title contains:"} type={"text"} id={"titleContains"} isFocus={false}  value={title} setValue={setTitle} />
          <div className="date-container">
          </div>
          <FilterSubmit title="Submit" />
        </form>
    </Container>
}

   



export default FilterContainer;