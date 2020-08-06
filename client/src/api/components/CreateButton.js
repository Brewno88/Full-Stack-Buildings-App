import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function CreateButton() {
	return (
		<Button variant='info'>
			<Link
				to='/buildings/create'
				style={{ color: 'var(--white)', textDecoration: 'none' }}
			>
				Create
			</Link>
		</Button>
	);
}

export default CreateButton;
