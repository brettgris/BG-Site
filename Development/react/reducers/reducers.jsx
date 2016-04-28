import { combineReducers } from 'redux';
import DataReducer from './DataReducer.jsx';
import FilterReducer from './FilterReducer.jsx';
import ProjectReducer from './ProjectReducer.jsx';

const rootReducer = combineReducers({
	data: DataReducer,
	filter: FilterReducer,
	project: ProjectReducer
});

export default rootReducer;
