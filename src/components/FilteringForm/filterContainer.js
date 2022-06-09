import styled from 'styled-components'

const ContainerTitle = styled.h1`
padding: 10px;
`

const Container = styled.div`

 width: 100%
 top: 10%; left: 5%;
`;


const FilterContainer = () =>
(
    <Container>
        <ContainerTitle>Filters</ContainerTitle>
    </Container>
)


export default FilterContainer;