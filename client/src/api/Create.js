import React, { useState } from 'react';
import { MyForm } from './APIStyle';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

function Buildings() {
	// const { buildings } = useContext(BuildContext);
	const [addFloor, setAddFloor] = useState(false);
	const [floor, setFloor] = useState({
		label: '',
		availableSpace: 0,
		occupier: '',
		disabled: false,
	});
	const initialState = {
		name: '',
		type: '',
		description: '',
		status: '',
		grossArea: 0,
		location: '',
		imageSrc: '',
		floors: [],
	};
	const [details, setDetails] = useState(initialState);

	const onInputChange = (value, property) => {
		setDetails({ ...details, [property]: value });
	};

	const onFormSubmit = e => {
		e.preventDefault();
		console.log(details);
		axios.post('/api/buildings', details);
		setDetails(initialState);
	};

	return (
		<>
			<MyForm className='container' onSubmit={e => onFormSubmit(e)}>
				<Form.Group controlId='formName'>
					<Form.Label>Name</Form.Label>
					<Form.Control
						value={details.name}
						onChange={e => onInputChange(e.target.value, 'name')}
					></Form.Control>
				</Form.Group>

				<Form.Group controlId='formType'>
					<Form.Label>Type</Form.Label>
					<Form.Control
						value={details.type}
						onChange={e => onInputChange(e.target.value, 'type')}
					></Form.Control>
				</Form.Group>

				<Form.Group controlId='formStatus'>
					<Form.Label>Status</Form.Label>
					<Form.Control
						value={details.status}
						onChange={e => onInputChange(e.target.value, 'status')}
					></Form.Control>
				</Form.Group>

				<Form.Group controlId='formDescription'>
					<Form.Label>Description</Form.Label>
					<Form.Control
						as='textarea'
						value={details.description}
						onChange={e => onInputChange(e.target.value, 'description')}
					></Form.Control>
				</Form.Group>

				<Form.Group controlId='formFloors'>
					<Form.Label>Floors</Form.Label>
					<Table>
						<thead>
							<tr>
								<th>Label</th>
								<th>Available Space</th>
								<th>Occupier</th>
								<th>Disabled</th>
							</tr>
						</thead>
						<tbody>
							{!details.floors.length
								? null
								: details.floors.map((floor, index) => (
										<tr key={index}>
											<td>{floor.label}</td>
											<td>{floor.availableSpace}</td>
											<td>{floor.occupier}</td>
											<td>{floor.disabled.toString()}</td>
										</tr>
								  ))}
							{addFloor && (
								<tr>
									<td>
										<Form.Group>
											<Form.Control
												required
												onChange={e => {
													setFloor({ ...floor, label: e.target.value });
												}}
											/>
										</Form.Group>
									</td>
									<td>
										<Form.Control
											required
											onChange={e => {
												setFloor({
													...floor,
													availableSpace: e.target.value,
												});
											}}
										/>
									</td>
									<td>
										<Form.Control
											onChange={e => {
												setFloor({ ...floor, occupier: e.target.value });
											}}
										/>
									</td>
									<td>
										<Form.Check
											onChange={e => {
												setFloor({ ...floor, disabled: e.target.checked });
											}}
										/>
									</td>
								</tr>
							)}
						</tbody>
					</Table>
					<Button
						onClick={() => {
							return setAddFloor(true);
						}}
					>
						+
					</Button>{' '}
					{addFloor && (
						<Button
							onClick={() => {
								details.floors.push(floor);
								setAddFloor(false);
							}}
						>
							Add Floor
						</Button>
					)}
				</Form.Group>

				<Form.Group controlId='formGrossAre'>
					<Form.Label>GrossArea</Form.Label>
					<Form.Control
						value={details.grossArea}
						onChange={e => onInputChange(e.target.value, 'grossArea')}
					></Form.Control>
				</Form.Group>

				<Form.Group controlId='formLocation'>
					<Form.Label>Location</Form.Label>
					<Form.Control
						value={details.location}
						onChange={e => onInputChange(e.target.value, 'location')}
					></Form.Control>
				</Form.Group>

				<Form.Group controlId='formImage'>
					<Form.Label>Image Source</Form.Label>
					<Form.Control
						value={details.imageSrc}
						onChange={e => onInputChange(e.target.value, 'imageSrc')}
					></Form.Control>
				</Form.Group>

				<Button variant='primary' type='submit'>
					Submit
				</Button>
			</MyForm>
		</>
	);
}

export default Buildings;
