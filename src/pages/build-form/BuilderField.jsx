import styled     from 'styled-components'
import InputField from './inputFields/InputField';
import McqField   from './inputFields/McqField';
import CheckField from './inputFields/CheckField';
import DateField  from './inputFields/DateField';
import TimeField  from './inputFields/TimeField';


const BuilderFieldWrapper = styled.div`
    width:50%;
    background:#e5e5e5;
    height:92vh;
    margin-left:3rem;
    padding:1.5rem;
    overflow:scroll;

    ::-webkit-scrollbar{
        display:none;
    }
`;



const BuilderField = ({inputs, handleChange}) => {
    return (
        <BuilderFieldWrapper>
            <InputField inputs= {inputs} handleChange={handleChange}/>
            <McqField/>
            <CheckField/>
            <DateField/>
            <TimeField/>
        </BuilderFieldWrapper>
    )
}

export default BuilderField;