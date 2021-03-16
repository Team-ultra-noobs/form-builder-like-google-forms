const FormCard = ({ form }) => {
	const { title, createdAt, fieldCount } = form;
	return (
		<tr>
			<th>{title}</th>
			<th>{createdAt}</th>
			<th>{fieldCount}</th>
		</tr>
	);
};

export default FormCard;
