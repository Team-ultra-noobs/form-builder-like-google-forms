import styled from 'styled-components';

const Container = styled.div`
    width:  ${props => props.scale ? '94%' : '90%'};
    margin: ${props => props.margin ? '2rem auto' : '0 auto'};
    margin: ${props => props.marginLg && '5rem auto'};
`

export default Container;