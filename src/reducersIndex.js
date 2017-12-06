import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { addUser } from './components/SignupReducers'

export default combineReducers({
	routing: routerReducer,
	addUser
});
