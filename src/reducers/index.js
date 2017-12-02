import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import addUser from './addUser';

export default combineReducers({
	routing: routerReducer,
	addUser
});
