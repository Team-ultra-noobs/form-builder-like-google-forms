import React 		from "react";
import styled 		from 'styled-components';
import Nav 			from "../../components/nav";
import SecondaryNav from './SecondaryNav';
import AddForm 		from './AddForm';
import FormCard 	from './FormCard';
import Container 	from "../../components/Container";


const DisplayFlex = styled.div`
	display:flex;
	align-items:center;
	flex-wrap:wrap;
`;

const Forms = () => {
	return (
		<div>
			<Nav />
			<SecondaryNav/>
			<Container marginLg scale>
				<DisplayFlex>
					<AddForm/>
					<FormCard/>
					<FormCard/>
					<FormCard/>
					<FormCard/>
					<FormCard/>
					<FormCard/>
					<FormCard/>
					<FormCard/>
					<FormCard/>
				</DisplayFlex>
			</Container>
		</div>
	);
};

export default Forms;
