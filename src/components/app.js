import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import FilterTemplate from './Template/FilterTemplate'


const BooksContainer = styled.div `
width: 100% ;
height: 100vh;
`



function App() {

    return (
      <BooksContainer>
         <FilterTemplate>
         </FilterTemplate>
      </BooksContainer>
    );
  
  
}

export default App