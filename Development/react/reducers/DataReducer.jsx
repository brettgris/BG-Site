import {FETCH_DATA,VIEW_PROJECT} from '../actions/actions.jsx';

export default function(state = null,action){
	switch(action.type){
		case FETCH_DATA:
			return action.payload.data
		default:
			return state
	}
}
