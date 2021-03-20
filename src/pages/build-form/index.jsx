import Nav from "../../components/nav";
import BuilderField from "./BuilderField";
import SideNav from "./SideNav";


const FormBuilder = () => {
	return (
		<>
			<Nav isBuilder/>
			<SideNav />
			<BuilderField />
		</>
	);
};

export default FormBuilder;
