import * as types from './types'

export const displayLoader = () => {
	return {
		type: types.DISPLAY_LOADER
	}
}

export const hideLoader = () => {
	return { // object
		type: types.HIDE_LOADER
	}
}