import styled from 'styled-components'


const InputTitle = styled.div`
width: 50% ;
`


const InputContainer = styled.div`

width: 50% ;
height: 100px;

`

const TexInput = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;


const TextInput = ({ labelName, isFocus,  type, value, setValue }) =>
(
    <InputContainer>
    <InputTitle>{labelName}</InputTitle >
    <TexInput
      value={value}
      onChange={(e) => setValue(e.target.value)}
      type={type}
      autoFocus={isFocus}
    />
  </InputContainer>

)
 
 export default TextInput    