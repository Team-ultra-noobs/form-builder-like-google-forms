import React 			 from "react";
import { useStoreState } from "easy-peasy";

import styled 			 from "styled-components";
import Nav 				 from "../../components/nav";
import SecondaryNav 	 from "./SecondaryNav";
import AddForm           from "./AddForm";
import FormCard          from "./FormCard";
import Container         from "../../components/Container";



const DisplayFlex = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
`;



const Forms = () => {
	const forms = useStoreState((state) => state.forms);
	console.log(Object.values(forms));
	return (
		<div>
			<Nav />
			<SecondaryNav />
			<Container marginLg scale>
				<DisplayFlex>
					<AddForm />
					{Object.values(forms).length !== 0 &&
						Object.values(forms.forms).map((form) => {
							console.log(Object.values(forms.forms).length);
							// return null;
							return <FormCard form={form} key={form.id} />;
						})}
					{/* <FormCard />
					<FormCard />
					<FormCard />
					<FormCard />
					<FormCard />
					<FormCard />
					<FormCard />
					<FormCard />
					<FormCard /> */}
				</DisplayFlex>
			</Container>
		</div>
	);
};

export default Forms;
