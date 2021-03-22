import {useState} from 'react';
import styled from 'styled-components';
import {icons} from '../../assets';
import DFlex from '../../components/DFlex';

const InputFieldWrapper = styled.div`
    margin: 0 auto;
    background:#F5F5F5;
    padding:1rem;
    border-radius:0.5rem;
`
const Input = styled.input`
    border:none;
    outline:none;
    background:${props => props.hasBg ? 'inherit' : '#EEEEEE'};
    width:${props => props.hasScale ? '100%' : '60%'};
    padding:${props => props.hasPadding ? '0.8rem' : '1rem 2rem 1rem 0.8rem'};
    font-size:${props => props.hasFontSize ? '0.8rem' : '2rem'};
    margin-top:${props => props.hasMargin && '0.5rem'};
    border-bottom:1px solid #424242;
    color:#424242;
`



const Icon = styled.img`
  margin-left:${props => props.hasMargin ? '1.2rem' : 'inherite'};
  cursor:pointer;
`

const InputField = ({inputs, handleChange}) => {
    const [text, setText] = useState('Dropdown Button')
    const [toggle, setToggle] = useState(false);    

    
    return (
        <InputFieldWrapper>
            <DFlex>
                <Input name='name' type="text" value={inputs.name} onChange={handleChange} />
                <DFlex hasWidth hasSpaceEvenly>
                    

                    <Icon hasMargin onClick={()=> setToggle((prev) => !prev)}  src={toggle === false ? icons.toggleOff : icons.toggleOn} alt="toggle button"/>
                    <Icon src={icons.settingIconInput} alt="setting icon for edit input bar"/>
                </DFlex>
            </DFlex>
            <Input onChange={handleChange} name= 'description' value={inputs.description} hasBg hasScale hasPadding hasMargin hasFontSize type="text" placeholder="form description(optional)"/>

        </InputFieldWrapper>
    )
}

export default InputField;