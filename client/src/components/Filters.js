import React from 'react';
import { MyFilters } from '../Elements.style';
import FilterButtons from './Dropdown';

const Filters = () => {
	return (
		<MyFilters>
			<span>Filter by:</span>
			<FilterButtons />
		</MyFilters>
	);
};
export default Filters;
