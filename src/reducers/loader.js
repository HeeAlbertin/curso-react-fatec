import * as types from '../actions/types'

const loader = (state = false, action) => {
	switch (action.type) {
		case types.DISPLAY_LOADER:
			return true
		case types.HIDE_LOADER:
			return false
		default:
			return state
	}
}

export default loader