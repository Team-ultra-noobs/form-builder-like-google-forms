import styled  from 'styled-components';
import {icons} from '../../assets';


const SideNavWrapper = styled.div`
    position:fixed;
    top:3.2rem;
    left:0;
    height:100%;
    width:3rem;
    background:#F5F5F5;
    padding:2rem 0.2rem;
`

const SideNavItem = styled.li`
    cursor:pointer;
`
const SideNav = () => {
    return (
        <SideNavWrapper>
            <SideNavItem>
                <img src={icons.addSection} alt="add section"/>
            </SideNavItem>
        </SideNavWrapper>
    )
}

export default SideNav;
