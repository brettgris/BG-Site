import {SET_PROJECT} from '../actions/actions.jsx';

export default function(state = null,action){
	switch(action.type){
		case SET_PROJECT:
			return action.payload
		default:
			return state
	}
}
