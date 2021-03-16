import { Link } from "@reach/router";

const Nav = () => {
	return (
		<ul>
			<Link to='/'>All Forms</Link>
			<br />
			<Link to='forms/:formId'>Buuildewr</Link>
		</ul>
	);
};

export default Nav;
