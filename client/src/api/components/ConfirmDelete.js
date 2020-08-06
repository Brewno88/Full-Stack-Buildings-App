import React from 'react';
import { MyConfirmDelete } from '../APIStyle.js';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function ConfirmDelete({ id, setOnDelete }) {
	const confirmDelete = () => {
		axios.delete(`/api/buildings/${id}`);
	};

	return (
		<MyConfirmDelete>
			Are you sure you want delete?
			<div>
				<Button onClick={() => confirmDelete()}>Yes</Button>
				<Button onClick={() => setOnDelete(false)}>No</Button>
			</div>
		</MyConfirmDelete>
	);
}

export default ConfirmDelete;
