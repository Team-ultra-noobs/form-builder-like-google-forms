import React from "react";
import { navigate } from "@reach/router";
import Nav from "../../components/nav";
import { useStoreActions } from "easy-peasy";
import shortid from "shortid";

const Forms = () => {
	const addForm = useStoreActions((actions) => actions.forms.createForm);
	return (
		<div>
			<Nav />
			<h1>Hello Forms</h1>
			<button
				onClick={() => {
					let id = shortid.generate();
					addForm(id);
					console.log(id);
					navigate(`forms/${id}`);
				}}>
				Add New Form
			</button>
		</div>
	);
};

export default Forms;
