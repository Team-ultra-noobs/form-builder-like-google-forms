import React from "react";
import { navigate } from "@reach/router";
import Nav from "../../components/nav";
import { useStoreActions } from "easy-peasy";
import shortid from "shortid";
import Container from '../../components/Container'
import Dflex from '../../components/DFlex';
import styled from 'styled-components';
import {icons,images} from '../../assets'


const Button = styled.button`
	background:${props => props.primary ? '#0B85A9' : '#F5F5F5'};
	padding:.7rem;
	color:${props => props.primary ? '#fff' : '#000'};
	border:none;
	outline:none;
	cursor:pointer;
	border-radius:.5rem;
	filter: drop-shadow(1px 1px 5px rgba(0, 0, 0, 0.25));
	margin-left: ${props => props.mLeft ? '1rem' : 'inherit'};
`


const SearchBar = styled.div`
	border-radius:1.5rem;
	border: 1px solid #424242;
	display:flex;
	align-items:center;
	justify-content:space-between;
	padding:.2rem .5rem;
`

const Input = styled.input`
	border:none;
	outline:none;
	height:100%;
	padding:.4rem;
	background:transparent;
`

const Forms = () => {
	const addForm = useStoreActions((actions) => actions.forms.createForm);
	return (
		<div>
			<Nav />
			<Container margin>
				<Dflex>
					<Dflex>
						<Button>My Forms</Button>
						<Button
							primary
							mLeft
							onClick={() => {
								let id = shortid.generate();
								addForm(id);
								console.log(id);
								navigate(`forms/${id}`);
							}}>
							Create Form +
						</Button>
					</Dflex>
					<Dflex width>
						<SearchBar>
							<Input type="text" placeholder="Search"/>
							<img src={icons.searchIcon} alt="search bar icon"/>
						</SearchBar>
						<img src={icons.gridIcon} alt="grid layout icon"/>
						<img src={icons.listIcon} alt="list layout icon"/>
					</Dflex>
				</Dflex>

			</Container>



		</div>
	);
};

export default Forms;
