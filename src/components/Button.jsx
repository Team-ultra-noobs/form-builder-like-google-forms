import styled from 'styled-components';

const Button = styled.button`
	background:${props => props.primary ? '#0B85A9' : '#F5F5F5'};
	padding:0.5rem;
	width:${props => props.hasWidth ? '5rem':'auto'};
	color:${props => props.primary ? '#fff' : '#000'};
	border:none;
	outline:none;
	cursor:pointer;
	border-radius:0.2rem;
	filter: drop-shadow(1px 1px 5px rgba(0, 0, 0, 0.25));
	margin-left: ${props => props.mLeft ? '1rem' : 'inherit'};
`

export default Button;