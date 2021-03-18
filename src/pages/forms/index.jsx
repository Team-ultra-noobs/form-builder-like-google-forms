import React from "react";

import Nav from "../../components/nav";
import SecondaryNav from './SecondaryNav';
import AddForm from '../build-form/AddForm';



const Forms = () => {
	return (
		<div>
			<Nav />
			<SecondaryNav/>
			<AddForm/>
		</div>
	);
};

export default Forms;
