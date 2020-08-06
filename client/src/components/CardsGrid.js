import React, { useContext } from 'react';
import { MyCardGrid } from '../Elements.style';
import Card from './Card';
import SideBar from './SideBar';
import { BuildContext } from '../context/GlobalContext';
import Spinner from 'react-bootstrap/Spinner';

const CardsGrid = () => {
	const { buildings, fetching, filtered, sideBar } = useContext(BuildContext);
	return !fetching ? (
		<>
			<MyCardGrid
				initial={{ x: 300 + 'px', opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ duration: 1 }}
				sideBar={sideBar}
				className='container-lg'
			>
				{filtered.length
					? filtered.map(building => {
							return <Card building={building} key={building._id} />;
					  })
					: buildings.map(building => (
							<Card building={building} key={building._id} />
					  ))}
			</MyCardGrid>
			{sideBar && <SideBar />}
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
};

export default CardsGrid;
