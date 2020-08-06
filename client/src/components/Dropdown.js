import React, { useContext } from 'react';
import { BuildContext } from '../context/GlobalContext';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

const FiltersDropdown = () => {
	const { buildings, dispatchFilters } = useContext(BuildContext);

	const statusValues = [...new Set(buildings.map(building => building.status))];
	const typeValues = [...new Set(buildings.map(building => building.type))];

	const filterTypes = type =>
		dispatchFilters({
			type: 'TYPE',
			payload: { type, buildings },
		});

	const filterStatus = status =>
		dispatchFilters({
			type: 'STATUS',
			payload: { status, buildings },
		});

	return (
		<div>
			<DropdownButton
				variant='secondary'
				size='sm'
				title='Type'
				style={{ margin: 0 }}
			>
				{typeValues.map(type => (
					<Dropdown.Item
						key={type}
						onClick={() => filterTypes(type)}
						style={{
							textDecoration: 'none',
						}}
					>
						{type}
					</Dropdown.Item>
				))}
			</DropdownButton>
			<DropdownButton
				variant='secondary'
				size='sm'
				title='Status'
				style={{ margin: 0 }}
			>
				{statusValues.map(status => (
					<Dropdown.Item
						key={status}
						onClick={() => filterStatus(status)}
						style={{
							textDecoration: 'none',
						}}
					>
						{status}
					</Dropdown.Item>
				))}
			</DropdownButton>
			<Button
				variant='danger'
				size='sm'
				onClick={() =>
					dispatchFilters({
						type: 'RESET',
						payload: buildings,
					})
				}
			>
				Reset
			</Button>
		</div>
	);
};

export default FiltersDropdown;
