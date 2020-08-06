import styled from 'styled-components';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';

export const MyTable = styled(Table)`
	margin-top: 6.5rem;
`;

export const MyForm = styled(Form)`
	margin-top: 6.5rem;
`;

export const MyConfirmDelete = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 30%;
	height: 20%;
	background: white;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
