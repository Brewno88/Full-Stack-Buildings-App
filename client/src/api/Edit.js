import React, { useContext, useReducer, useState, useEffect } from 'react';
import { BuildContext } from '../context/GlobalContext';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { MyForm } from './APIStyle';
import { updateBuildReducer } from '../context/reducers';
import axios from 'axios';

function Buildings() {
	const { buildings } = useContext(BuildContext);
	const [id, setId] = useState('');
	const [update, dispatchUpdate] = useReducer(updateBuildReducer, {
		name: '',
		type: '',
		description: '',
		status: '',
		grossArea: 0,
		location: '',
		imageSrc: '',
		floors: [],
	});

	const getIdFromUrl = () => {
		const params = window.location.pathname.split('/');
		const urlId = params[params.length - 1];
		return urlId;
	};

	const onInputChange = (inputValue, property) => {
		dispatchUpdate({
			type: 'UPDATE',
			payload: { update, inputValue, property },
		});
	};

	const onFormSubmit = async e => {
		e.preventDefault();
		axios.patch(`/api/buildings/edit/${id}`, update);
	};

	useEffect(() => {
		setId(getIdFromUrl());
		const selected = buildings.filter(building => building._id === id)[0];
		dispatchUpdate({ type: 'SET', payload: selected });
	}, [buildings, id]);

	return update ? (
		<>
			<MyForm className='container' onSubmit={e => onFormSubmit(e)}>
				<Form.Group controlId='formId'>
					<Form.Label>Building id</Form.Label>
					<Form.Control value={update._id} disabled />
				</Form.Group>

				<Form.Group controlId='formName'>
					<Form.Label>Name</Form.Label>
					<Form.Control
						value={update.name}
						onChange={e => onInputChange(e.target.value, 'name')}
					></Form.Control>
				</Form.Group>

				<Form.Group controlId='formType'>
					<Form.Label>Type</Form.Label>
					<Form.Control
						value={update.type}
						onChange={e => onInputChange(e.target.value, 'type')}
					></Form.Control>
				</Form.Group>

				<Form.Group controlId='formStatus'>
					<Form.Label>Status</Form.Label>
					<Form.Control
						value={update.status}
						onChange={e => onInputChange(e.target.value, 'status')}
					></Form.Control>
				</Form.Group>

				<Form.Group controlId='formDescription'>
					<Form.Label>Description</Form.Label>
					<Form.Control
						as='textarea'
						value={update.description}
						onChange={e => onInputChange(e.target.value, 'description')}
					></Form.Control>
				</Form.Group>

				<Form.Group controlId='formGrossAre'>
					<Form.Label>GrossArea</Form.Label>
					<Form.Control
						value={update.grossArea}
						onChange={e => onInputChange(e.target.value, 'grossArea')}
					></Form.Control>
				</Form.Group>

				<Form.Group controlId='formLocation'>
					<Form.Label>Location</Form.Label>
					<Form.Control
						value={update.location}
						onChange={e => onInputChange(e.target.value, 'location')}
					></Form.Control>
				</Form.Group>

				<Form.Group controlId='formImage'>
					<Form.Label>Image Source</Form.Label>
					<Form.Control
						value={update.imageSrc}
						onChange={e => onInputChange(e.target.value, 'imageSrc')}
					></Form.Control>
				</Form.Group>

				<Button variant='primary' type='submit'>
					Submit
				</Button>
			</MyForm>
		</>
	) : (
		<div
			style={{
				height: '100vh',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Spinner animation='border' role='status'>
				<span className='sr-only'>Loading...</span>
			</Spinner>
		</div>
	);
}

export default Buildings;
