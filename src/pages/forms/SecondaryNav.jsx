import {useState}          from 'react'
import { useStoreActions } from "easy-peasy";
import shortid             from "shortid";
import { navigate }        from "@reach/router";
import styled              from 'styled-components';

import Button              from '../../components/Button';
import Container           from '../../components/Container'
import Dflex               from '../../components/DFlex';
import {icons,images}      from '../../assets'



const SearchBar = styled.div`
    border-radius:1.5rem;
    border: ${props => props.active ? '2px solid #198754' : '1px solid #424242'};
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:.2rem 1rem;
`

const Input = styled.input`
	border:none;
	outline:none;
	height:100%;
	padding:.4rem;
	background:transparent;
`

const Icon = styled.img`
    cursor:pointer;
    margin-left:.5rem;
`

const SecondaryNav = () => {
    const [active, setActive] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

	const addForm = useStoreActions((actions) => actions.forms.createForm);
    return(
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
                <Dflex>
                    <SearchBar active = {active} onBlur = {() => setActive(false)} onClick = {() => setActive(true)} >
                        <Input value = {searchTerm} onChange = {e=> setSearchTerm(e.target.value)} type="text" placeholder="Search"/>
                        <img src={icons.searchIcon} alt="search bar icon"/>
                    </SearchBar>
                    <Icon src={icons.gridIcon} alt="grid layout icon"/>
                    <Icon src={icons.listIcon} alt="list layout icon"/>
                </Dflex>
            </Dflex>
        </Container>
    )
}

export default SecondaryNav;