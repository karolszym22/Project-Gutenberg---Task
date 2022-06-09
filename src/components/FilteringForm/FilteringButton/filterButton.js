import styled from 'styled-components'

const Button = styled.button`
width: 200px ;
height: 25px ;
`

const  FilterSubmit = ({ title }) => 
(
    <Button type="submit">
      {title}
    </Button >
)

export default FilterSubmit
  
    
  
