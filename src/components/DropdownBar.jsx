import styled   from 'styled-components';
import {icons}  from '../assets/index';
import DFlex    from './DFlex';

const DropdownBarItems = styled.ul`
    padding:1rem;
`


const DropdownBar = () => {
    return (
        <DropdownBarItems>
            <DFlex>
                <img src={icons.shortPara} alt="short para"/>
                <p>Short Para</p>
            </DFlex>
            <DFlex>
                <img src={icons.longPara} alt="long para"/>
                <p>Long Para</p>
            </DFlex>
            <hr/>

            <DFlex>
                <img src={icons.multipleChoice} alt="Multiple Choice"/>
                <p>Multiple choice</p>
            </DFlex>
            <DFlex>
                <img src={icons.checkBox} alt="Check Box"/>
                <p>Check box</p>
            </DFlex>
            <hr/>

            <DFlex>
                <img src={icons.dateIcon} alt="Date"/>
                <p>Date</p>
            </DFlex>
            <DFlex>
                <img src={icons.timeIconSecondary} alt="Time Icon"/>
                <p>Check box</p>
            </DFlex>
            <DFlex>
                <img src={icons.fileUpload} alt="File Upload"/>
            </DFlex>


        </DropdownBarItems>
    )
}

export default DropdownBar;