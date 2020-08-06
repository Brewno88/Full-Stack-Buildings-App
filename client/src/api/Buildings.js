import React, { useContext, useState } from 'react';
import { BuildContext } from '../context/GlobalContext';
import { MyTable } from './APIStyle';
import MyConfirmDelete from './components/ConfirmDelete';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Buildings() {
	const { buildings, dispatchSelected } = useContext(BuildContext);

	const [onDelete, setOnDelete] = useState(false);
	const [id, setId] = useState('');

	return (
		<>
			<MyTable className='container'>
				<thead>
					<tr>
						<th>Name</th>
						<th>Type</th>
						<th>Status</th>
						<th>Location</th>
					</tr>
				</thead>
				<tbody>
					{buildings.map(build => (
						<tr key={build._id}>
							<td>{build.name}</td>
							<td>{build.type}</td>
							<td>{build.status}</td>
							<td>{build.location}</td>
							<td>
								<Link
									to={`/buildings/edit/${build._id}`}
									onClick={() =>
										dispatchSelected({ type: 'SELECTED', payload: build })
									}
								>
									Edit
								</Link>
								|
								<Button
									onClick={() => {
										setId(build._id);
										setOnDelete(true);
									}}
								>
									Delete
								</Button>
							</td>
						</tr>
					))}
				</tbody>
			</MyTable>
			{onDelete && <MyConfirmDelete id={id} setOnDelete={setOnDelete} />}
		</>
	);
}

export default Buildings;
