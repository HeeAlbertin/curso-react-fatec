/*
	Junta todos os reducers e passa para a store
*/
import { combineReducers } from 'redux'

import loader from './loader'
import recipes from './recipes'

const appReducers = combineReducers({ 
	loader, //{ loader } === { loader: loader }, é a mesma coisa
	recipes
})

export default appReducers

