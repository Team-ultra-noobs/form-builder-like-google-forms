import React from "react";
import { Router } from "@reach/router";
import Forms from "../pages/forms";
import FormBuilder from "../pages/build-form";

const AppRouter = () => {
	return (
		<Router>
			<Forms path='/' />
			<FormBuilder path='forms/:formId' />
		</Router>
	);
};
export default AppRouter;
