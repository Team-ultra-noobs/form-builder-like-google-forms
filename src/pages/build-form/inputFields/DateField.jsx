import {useState} from 'react';
import styled from 'styled-components';
import {icons}    from '../../../assets';
import DFlex      from '../../../components/DFlex';


const InputFieldWrapper = styled.div`
    margin: 0.5rem auto;
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
    font-size:${props => props.hasFontSizeSecondary && '1.5rem'};
    margin-top:${props => props.hasMargin && '0.5rem'};
    border-bottom:1px solid #9E9E9E;
    color:#424242;
`


const DropdownWrapper = styled.div`
    height:2rem;
    display:flex;
    justify-content:space-around;
    align-items:center;
    border: 1px solid #9E9E9E;
    flex-grow:1;
    cursor:pointer;
    border-radius:0.4rem;
    padding:0.2rem;
`

const DropdownItemTitle = styled.p`
    font-size:0.9rem;
`;

const Icon = styled.img`
  margin-left:${props => props.hasMargin ? '1rem' : 'inherite'};
  cursor:pointer;
`

const DateField = () => {
    const [text, setText] = useState('Dropdown Button')
    const [toggle, setToggle] = useState(false); 
    return (
        <InputFieldWrapper>
           <DFlex>
                <Input name='name' type="text"/>
                <DFlex hasWidth hasSpaceEvenly>
                    <DropdownWrapper>
                        <Icon src={icons.dateIcon}/>
                        <DropdownItemTitle>Date</DropdownItemTitle>
                        <Icon src={icons.dropDownArrow}/>
                    </DropdownWrapper>
                    <Icon hasMargin onClick={()=> setToggle((prev) => !prev)}  src={toggle === false ? icons.toggleOff : icons.toggleOn} alt="toggle button"/>
                    <Icon src={icons.settingIconInput} alt="setting icon for edit input bar"/>
                </DFlex>
            </DFlex>
            <Input  name= 'description' hasBg hasScale hasPadding hasMargin hasFontSizeSecondary type="date" placeholder="form description(optional)"/> 
        </InputFieldWrapper>
    );
}

export default DateField;