import React, { useContext } from 'react';
import {
	MyCard,
	MyCardButton,
	MyCardDetails,
	MyCardDetailsList,
	MyCardDetailsRow,
} from '../Elements.style';
import { BuildContext } from '../context/GlobalContext';

const Card = ({ building }) => {
	const { grossArea, imageSrc, name, status, type } = building;
	const { sideBar, setSideBar, dispatchSelected, formatNumber } = useContext(
		BuildContext
	);

	const selectCard = () => {
		setSideBar(true);
		dispatchSelected({ type: 'SELECTED', payload: building });
	};

	return (
		<MyCard
			sideBar={sideBar}
			whileHover={{
				boxShadow: '1px 1px 15px var(--black)',
				borderRadius: '15px',
				scale: 1.01,
			}}
		>
			{/* Card Thumbnail */}
			<img src={require(`../assets/${imageSrc}`)} alt={name} />
			<MyCardDetails>
				{/* Title */}
				<h2>{name.toUpperCase()}</h2>
				<MyCardDetailsList>
					{/* Remove Card's details when scroll horizontally */}
					{sideBar && window.innerWidth < 1024 ? (
						<></>
					) : (
						<>
							<MyCardDetailsRow>
								<span>Type:</span>
								<span>{type}</span>
							</MyCardDetailsRow>
							<MyCardDetailsRow>
								<span>Status:</span>
								<span>{status}</span>
							</MyCardDetailsRow>
							<MyCardDetailsRow>
								<span>Grass area:</span>
								<span>{formatNumber(grossArea)} sq ft</span>
							</MyCardDetailsRow>
						</>
					)}
				</MyCardDetailsList>
				{/* View Details button */}
				<MyCardButton
					onClick={() => selectCard()}
					whileHover={{ scale: 1.05, borderRadius: '5px' }}
				>
					VIEW DETAILS
				</MyCardButton>
			</MyCardDetails>
		</MyCard>
	);
};
export default Card;
