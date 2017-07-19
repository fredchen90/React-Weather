import { FETCH_WEATHER } from '../actions/index';

// state is pre-date, action is new data
export default function(state = [], action) {
	switch(action.type) {
		case FETCH_WEATHER:
			return [action.payload.data, ...state];
	}
	return state;
}