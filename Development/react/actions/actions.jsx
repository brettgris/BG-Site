import superagent from 'superagent';

export const FETCH_DATA = 'FETCH_DATA';
export const SET_FILTER = 'SET_FILTER';
export const SET_PROJECT = 'SET_PROJECT';

//GET THEM
export function fetchData(){
	return dispatch => {
		const url = "/data/data.json";
		const request = superagent.get(url).end(function(err,res){
			if (res) {
				dispatch({
					type: FETCH_DATA,
					payload: res.body
				});
			}

		});
	}
}

export function setFitler(name){
	return dispatch => {
		dispatch ({
			type: SET_FILTER,
			payload: (name) ? name : ""
		});
	}
}

export function setProject(project){
	return dispatch => {
		dispatch ({
			type: SET_PROJECT,
			payload: (project) ? project : null
		})
	}
}
