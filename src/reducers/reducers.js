/*
	Junta todos os reducers e passa para a store
*/
import { combineReducers } from 'redux'

import loader from './loader'

const appReducers = combineReducers({ 
	loader //{ loader } === { loader: loader }, é a mesma coisa
})

export default appReducers

