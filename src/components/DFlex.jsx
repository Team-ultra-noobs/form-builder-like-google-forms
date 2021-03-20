import styled from 'styled-components';

const DisplayFlex = styled.div`
    display:flex;
    align-items:center;
    justify-content:${props => props.hasSpaceEvenly ? 'space-evenly' : 'space-between'};
    width: ${props => props.width ? '20%' : 'auto'};
    width: ${props => props.hasWidth && '35%'};
`

export default DisplayFlex;