import { useState } from "react";
import Nav 			from "../../components/nav";
import BuilderField from "./BuilderField";
import SideNav 		from "./SideNav";

const FormBuilder = () => {
	const [inputs, setInputs] = useState({
		name: "untitled",
		description: "",
	});

	const handleChange = (e) => {
		setInputs({ ...inputs, [e.target.name]: e.target.value });
	};

	return (
		<>
			<Nav inputs={inputs} isBuilder />
			<SideNav />
			<BuilderField inputs={inputs} handleChange={handleChange} />
		</>
	);
};

export default FormBuilder;
