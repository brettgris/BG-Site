import axios from 'axios';

export const FETCH_DATA = 'FETCH_DATA';
export const SET_FILTER = 'SET_FILTER';
export const SET_PROJECT = 'SET_PROJECT';

//GET THEM
export function fetchData(){
	const url = "/data/data.json"
	const request = axios.get(url);

	return {
		type: FETCH_DATA,
		payload: request
	}
}

export function setFitler(name){
	return {
		type: SET_FILTER,
		payload: (name) ? name : ""
	}
}

export function setProject(project){
	return {
		type: SET_PROJECT,
		payload: (project) ? project : null
	}
}
