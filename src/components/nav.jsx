import { Link } from "@reach/router";
import Container from './Container';
import {images} from '../assets/'

const Nav = () => {
	return (
		<Container>
			<div>
				<div>
					<Link to='/'>
						<img src={images.logo} alt="plus icon"/>
					</Link>
				</div>
				<div>
				</div>
			</div>
		</Container>
	);
};

export default Nav;
