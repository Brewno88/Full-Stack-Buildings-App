import React, { createContext, useState, useReducer, useEffect } from 'react';
import axios from 'axios';
// import buildingsJSON from '../buildings.json';
import { selectedReducer, filterReducer } from './reducers';

export const BuildContext = createContext();

export const BuildProvider = ({ children }) => {
	const [sideBar, setSideBar] = useState(false);
	const [buildings, setBuildings] = useState({ fetching: true, data: [] });
	const [filtered, dispatchFilters] = useReducer(filterReducer, []);
	const [selected, dispatchSelected] = useReducer(selectedReducer, {});

	const formatNumber = num =>
		num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

	const getBuildings = async () => {
		try {
			const buildings = await axios.get('/api/buildings').then(res => res.data);
			setBuildings({ fetching: false, data: [...buildings] });
		} catch (error) {
			console.log(error.message);
		}
	};

	useEffect(() => {
		getBuildings();
	}, []);

	const contextValues = {
		buildings: buildings.data,
		fetching: buildings.fetching,
		filtered,
		dispatchFilters,
		selected,
		dispatchSelected,
		formatNumber,
		sideBar,
		setSideBar,
	};

	return (
		<BuildContext.Provider value={contextValues}>
			{children}
		</BuildContext.Provider>
	);
};
