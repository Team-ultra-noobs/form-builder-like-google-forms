import { Link } from "@reach/router";
import Container from './Container';
import {images, icons} from '../assets/'
import styled from 'styled-components'
import DFlex from '../components/DFlex';

const Navigation = styled.nav`
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
`


const LogoWrap = styled.div`
	width:2.5rem;
	text-align:center;
	margin-top:.2rem;
`

const Logo = styled.img`
	width:2rem;
`;


const ProfileIcon = styled.img`
	width:2rem;
	height:2rem;
	border-radius:50%;
`

const ProfileName = styled.p`
	flex-grow:1;
	font-size:0.8rem;
	margin-left:0.5rem;
`;

const DropDown = styled.img`
	margin-left:0.5rem;
`

const Nav = () => {
	return (
			<Navigation>
				<Container>
					<DFlex>
						<LogoWrap>
							<Link to='/'>
								<Logo src={images.logo} alt="plus icon"/>
							</Link>
						</LogoWrap>
						<DFlex>
							<ProfileIcon src={images.profile} alt="profile picture"/>
							<ProfileName>Asief Mahir</ProfileName>
							<DropDown src={icons.downArrow} alt="down arrow icon"/>
						</DFlex>
					</DFlex>
				</Container>
			</Navigation>
	);
};

export default Nav;
