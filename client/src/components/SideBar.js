import React, { useContext } from 'react';
import {
	MySideBar,
	MySideDetailsRow,
	MySideDetails,
	MyCloseButton,
} from '../Elements.style';
import { BuildContext } from '../context/GlobalContext';
import { MyTable } from '../Elements.style';

const SideBar = React.memo(() => {
	const { selected, setSideBar, formatNumber } = useContext(BuildContext);

	const {
		description,
		floors,
		grossArea,
		imageSrc,
		location,
		name,
		status,
		type,
	} = { ...selected };
	// Assignment #1: Recursive function
	const availableSpaces = floors.map(num => num.availableSpace);

	const totalRecursive = (arr, init) => {
		let total = init;
		let copyArr = [...arr];
		while (copyArr.length) {
			total += copyArr[0];
			copyArr.shift();
			totalRecursive(copyArr, total);
		}
		return total;
	};
	const totalAvailable = totalRecursive(availableSpaces, 0);

	// Without Recursion
	// const totalAvailable = floors  ? floors.map(e => e.availableSpace).reduce((acc = 0, cur) => acc + cur) : 0;

	const closeSide = () => {
		setSideBar(false);
	};

	return (
		<MySideBar
			initial={{ x: 500, opacity: 0 }}
			animate={{ x: 0, opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			{/* Close Button and Image */}
			<div style={{ position: 'relative' }}>
				<MyCloseButton onClick={() => closeSide()} whileHover={{ scale: 1.2 }}>
					X
				</MyCloseButton>
				<img
					src={require(`../assets/${imageSrc}`)}
					alt={name}
					style={{ width: '100%' }}
				/>
			</div>
			{/* Title */}
			<h1>{name.toUpperCase()}</h1>
			{/* Building Details */}
			<MySideDetails>
				<MySideDetailsRow>
					<span>Type:</span>
					<span>{type}</span>
				</MySideDetailsRow>

				<MySideDetailsRow>
					<span>Location:</span>
					<span>{location}</span>
				</MySideDetailsRow>

				<MySideDetailsRow>
					<span>Status:</span>
					<span>{status}</span>
				</MySideDetailsRow>

				<MySideDetailsRow>
					<span>Gross area:</span>
					<span>{formatNumber(grossArea)} sq ft</span>
				</MySideDetailsRow>

				<MySideDetailsRow>
					<span>Current total available space:</span>
					<span>{formatNumber(totalAvailable)} sq ft</span>
				</MySideDetailsRow>
			</MySideDetails>
			{/* Description */}
			<p style={{ fontWeight: '700', padding: '1rem 0' }}>{description}</p>
			{/* Floors Details */}
			<MyTable>
				<tbody>
					<tr>
						<th>FLOOR</th>
						<th>AVAILABLE SPACE</th>
						<th>OCCUPER(S)</th>
					</tr>

					{floors.map(e => (
						<tr key={e.label}>
							<td>{e.label}</td>
							<td>
								{e.availableSpace === 0
									? '-'
									: `${formatNumber(e.availableSpace)} sq ft`}
							</td>
							<td>{e.occupier}</td>
						</tr>
					))}
				</tbody>
			</MyTable>
		</MySideBar>
	);
});
export default SideBar;
