import { navigate }        from "@reach/router";
import { useStoreActions } from "easy-peasy";
import shortid             from "shortid";
import styled              from 'styled-components';

import {icons} from '../../assets';

const CardBtn = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:space-evenly;
    background:#0B85A9;
    width:12.5rem;
    height:14.5rem;
    border-radius:0.625rem;
    cursor:pointer;
    margin:1.5rem;
`
const CardTitle = styled.h2`
    color:#fff;

`
const PlusIconWrapper = styled.div`
    color:inherit;
    position:relative;
`
const PlusIcon = styled.img`
    position:absolute;
    top:60%;
    left:50%;
    transform:translate(-50%,-60%);
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
                <PlusIconWrapper>
                    <PlusIcon src={icons.plusIcon} alt="plus icon"/>
                </PlusIconWrapper>
            </CardBtn>
    )
}

export default AddForm;