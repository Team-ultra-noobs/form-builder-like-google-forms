import styled from 'styled-components';

const DisplayFlex = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width: ${props => props.width ? '20%' : 'auto'};
`

export default DisplayFlex;