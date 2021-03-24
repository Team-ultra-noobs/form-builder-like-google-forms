import styled from "styled-components";
import { icons } from "../../assets";

const Card = styled.div`
	background: #fff;
	width: 12.5rem;
	height: 15.0625rem;
	border-radius: 0.625rem;
	cursor: pointer;
	margin: 1.5rem;
	position: relative;
	box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.25);
`;
const Title = styled.h2`
	margin-top: 4rem;
	text-align: center;
	font-weight: 400;
`;

const CardFooter = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background: #0b85a9;
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	padding: 0.8rem;
	border-radius: 0rem 0rem 0.625rem 0.625rem;
`;

const CardTime = styled.p`
	color: #fff;
`;

const FormCard = ({ form }) => {
	const { name, createdAt } = form;
	return (
		<Card>
			<Title>{name}</Title>
			<CardFooter>
				<img src={icons.timeIcon} alt='time icon' />
				<CardTime>{createdAt}</CardTime>
				<img src={icons.settingIcon} alt='setting icon' />
			</CardFooter>
		</Card>
	);
};

export default FormCard;
