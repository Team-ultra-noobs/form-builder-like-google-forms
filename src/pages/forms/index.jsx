import React from "react";
import { navigate } from "@reach/router";
import Nav from "../../components/nav";
import { useStoreActions } from "easy-peasy";
import shortid from "shortid";

import styled from 'styled-components';


const Button = styled.button`
	background:#0B85A9;
	padding:.7rem;
	color:#fff;
	border:none;
	outline:none;
	cursor:pointer;
	border-radius:.5rem;
`

const Forms = () => {
	const addForm = useStoreActions((actions) => actions.forms.createForm);
	return (
		<div>
			<Nav />
			<h1>Hello Forms</h1>
			<Button
				onClick={() => {
					let id = shortid.generate();
					addForm(id);
					console.log(id);
					navigate(`forms/${id}`);
				}}>
				Create Form +
			</Button>
		</div>
	);
};

export default Forms;
