import * as types from '../actions/types'

const recipes = (state = [], action) => {
	switch (action.type) {
		case types.SET_RECIPES:
			return action.recipes
		default:
			return state
	}
}

export default recipes