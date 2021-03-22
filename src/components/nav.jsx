import { Link } from "@reach/router";
import Container from './Container';
import {images, icons} from '../assets/'
import styled from 'styled-components'
import DFlex from '../components/DFlex';
import Button from './Button';

const Navigation = styled.nav`
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
`


const LogoWrap = styled.div`
	text-align:center;
	margin-top:.2rem;
	display:flex;
	align-items:center;
	padding:0.5rem;
`

const Logo = styled.img`
	width:2rem;
`;

const LogoTitle = styled.span`
	color:black;
`

const ProfileIcon = styled.img`
	width:2rem;
	height:2rem;
	border-radius:50%;
	margin-left:0.5rem;
`

const ProfileName = styled.p`
	flex-grow:1;
	font-size:0.8rem;
	margin-left:0.5rem;
`;

const DropDown = styled.img`
	margin-left:0.5rem;
`

const Nav = ({ isBuilder, inputs}) => {
	return (
			<Navigation>
				<Container scale = {isBuilder}>
					<DFlex>
						<Link to='/'>
							<LogoWrap>
								<Logo src={images.logo} alt="plus icon"/>
								{
								isBuilder && 
								 	<>
										<LogoTitle>{inputs.name}</LogoTitle> 
								 		<img src={icons.settingIconSecondary} alt="setting icon"/> 
									</>
								 }
								
							</LogoWrap>
						</Link>
						
						<DFlex>
							{isBuilder && <Button primary hasWidth>Publish</Button>}
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
