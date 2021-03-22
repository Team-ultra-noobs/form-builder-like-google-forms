import React 		from "react";
import styled 		from 'styled-components';
import Nav 			from "../../components/nav";
import SecondaryNav from './SecondaryNav';
import AddForm 		from './AddForm';
import FormCard 	from './FormCard';
import Container 	from "../../components/Container";
import DFlex 		from '../../components/DFlex'

const Forms = () => {
	return (
		<div>
			<Nav />
			<SecondaryNav/>
			<Container marginLg scale>
				<DFlex>
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
				</DFlex>
			</Container>
		</div>
	);
};

export default Forms;
