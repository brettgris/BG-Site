import {SET_FILTER} from '../actions/actions.jsx';

export default function(state = null,action){
	switch(action.type){
		case SET_FILTER:
			return action.payload
		default:
			return state
	}
}
