import { FETCH_BEGIN, FETCH_FAILURE, FETCH_SUCCESS } from '../actions/getDataActions';

const initialState = {
	data: [],
};

export default function generalReducer(state = initialState, action) {
	switch (action.type) {
	case FETCH_BEGIN:
		return {
			...state,
			error: null
		};

	case FETCH_SUCCESS:
		return {
			...state,
			data: action.payload.data
		};

	case FETCH_FAILURE:
		return {
			...state,
			error: action.payload.error,
			data: []
		};

	default:
		// ALWAYS have a default case in a reducer
		return state;
	}
}