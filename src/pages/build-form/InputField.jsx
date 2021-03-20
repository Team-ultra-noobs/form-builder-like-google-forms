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


const Select = styled.select`
  height: 2rem;
  width: 100%;
  background: white;
  color: gray;
  padding-left: 0.5rem;
  font-size: 14px;
  border: none;
  margin-left: 10px;
  outline:none;
  border: 1px solid #9E9E9E;
  border-radius:0.2rem;

  option {
    color: black;
    background: white;
    display: flex;
    min-height: 20px;
    padding: 2rem;
  }
`;


const Icon = styled.img`
  margin-left:${props => props.hasMargin ? '1.2rem' : 'inherite'};
  cursor:pointer;
`

const InputField = () => {
    return (
        <InputFieldWrapper>
            <DFlex>
                <Input type="text" value='untitled'/>
                <DFlex hasWidth hasSpaceEvenly>
                    <Select>
                        <option value="">
                            <img src={icons.shortPara} alt="short Paragraph icon"/>
                            Type
                        </option>
                        <option value="1">Audi</option>
                        <option value="2">BMW</option>
                        <option value="3">Citroen</option>
                        <option value="4">Ford</option>
                    </Select>
                    <Icon hasMargin src={icons.toggleOn} alt="toggle button"/>
                    <Icon src={icons.settingIconInput} alt="setting icon for edit input bar"/>
                </DFlex>
            </DFlex>
            <Input hasBg hasScale hasPadding hasMargin hasFontSize type="text" placeholder="form description(optional)"/>

        </InputFieldWrapper>
    )
}

export default InputField;