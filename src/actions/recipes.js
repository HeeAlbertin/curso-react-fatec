import * as types from './types'
import * as loader from './loader'

import API from '../api'

//executa quando chama o loader
export const fetchRecipes = (ingredients) => {
	// o thunk é utilizado aqui
	return (dispatch) => {
		dispatch(loader.displayLoader()) // dispatch reutiliza a action (dispara ela)

		const params = { i: ingredients }

		API.get('/', { params })
			.then((response) => {
				const recipes = response.data.results

				dispatch(setRecipes(recipes))
			})
			.catch((err) => {
				console.error(err)
				alert('Deu Ruim!')
			})
			.then(() => {
				dispatch(loader.hideLoader())
			})

	}
}

// se der sucesso, seta o array recipes
export const setRecipes = (recipes) => {
	return {
		type: types.SET_RECIPES,
		recipes
	}
}