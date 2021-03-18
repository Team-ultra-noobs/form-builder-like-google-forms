import { Link } from "@reach/router";
// import Container from './Container';
import {images, icons} from '../assets/'
import styled from 'styled-components'

const Navigation = styled.nav`
	box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
`

const Profile = styled.div`
	display:flex;
	align-items:center;
	justify-content:space-between;
	width:10%;
`
const Container = styled.div`
	display:flex;
	align-items:center;
	justify-content:space-between;
	width:90%;
	margin:0 auto;
`

const Nav = () => {
	return (
			<Navigation>
				<Container>
					<div>
						<Link to='/'>
							<img src={images.logo} alt="plus icon"/>
						</Link>
					</div>
					<Profile>
						<img src={images.profile} alt="profile picture"/>
						<p>Asief Mahir</p>
						<img src={icons.downArrow} alt="down arrow icon"/>
					</Profile>
				</Container>
			</Navigation>
	);
};

export default Nav;
