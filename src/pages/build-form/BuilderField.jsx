import styled     from 'styled-components'
import InputField from './inputFields/InputField';
import McqField   from './inputFields/McqField';

const BuilderFieldWrapper = styled.div`
    width:50%;
    background:#e5e5e5;
    height:92vh;
    margin-left:3rem;
    padding:1.5rem;

`;



const BuilderField = ({inputs, handleChange}) => {
    return (
        <BuilderFieldWrapper>
            <InputField inputs= {inputs} handleChange={handleChange}/>
            <McqField/>
        </BuilderFieldWrapper>
    )
}

export default BuilderField;