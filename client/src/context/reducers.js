const TYPE = 'TYPE';
const STATUS = 'STATUS';
const RESET = 'RESET';
const SELECTED = 'SELECTED';
const UPDATE = 'UPDATE';
const SET = 'SET';

// Selected Building from Card VIEW DETAILS button
export const selectedReducer = (state, action) => {
	switch (action.type) {
		case SELECTED:
			console.log(action.payload);
			return action.payload;
		default:
			return state;
	}
};

// Update selected Building
export const updateBuildReducer = (state, action) => {
	switch (action.type) {
		case UPDATE:
			return {
				...action.payload.update,
				[action.payload.property]: action.payload.inputValue,
			};
		case SET:
			return action.payload;
		default:
			return state;
	}
};

// Filter Reducer function
export const filterReducer = (state, action) => {
	switch (action.type) {
		case TYPE:
			const type = action.payload.buildings.filter(
				build => build.type === action.payload.type
			);
			return type;
		case STATUS:
			const status = action.payload.buildings.filter(
				build => build.status === action.payload.status
			);
			return status;
		case RESET:
			return action.payload;
		default:
			return state;
	}
};
