import styled from 'styled-components';
import {icons} from '../../assets';
import Container from '../../components/Container';
import { navigate } from "@reach/router";
import { useStoreActions } from "easy-peasy";
import shortid from "shortid";

const CardBtn = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:space-evenly;
    background:#0B85A9;
    width:12.5rem;
    height:15.0625rem;
    border-radius:0.625rem;
    cursor:pointer;
    margin:1.5rem;
`
const CardTitle = styled.h2`
    color:#fff;

`
const AddForm = () => {
	const addForm = useStoreActions((actions) => actions.forms.createForm);

    return (
            <CardBtn 
                onClick={() => {
                    let id = shortid.generate();
                    addForm(id);
                    console.log(id);
                    navigate(`forms/${id}`);
                }}
            >
                <CardTitle>Blank</CardTitle>
                <div>
                    <img src={icons.plusIcon} alt="plus icon"/>
                </div>
            </CardBtn>
    )
}

export default AddForm;