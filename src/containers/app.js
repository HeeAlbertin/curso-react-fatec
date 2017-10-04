import React, { Component } from 'react'
import Header from '../components/header'

import API from '../api.js'
import Loader from '../components/loader'
import RecipesList from '../components/recipes-list'

const ENTER_CHAR_CODE = 13

class App extends Component {
  constructor () {
    super();

    this.state = { 
      isFetching: false,
      recipes: []
    }

    this.fetchRecipes = this.fetchRecipes.bind(this)
    this.onSearchRecipes = this.onSearchRecipes.bind(this)
    this.onFetchRecipesSuccess = this.onFetchRecipesSuccess.bind(this)
  }

  fetchRecipes (ingredientList) {
    
    const params = { i: ingredientList }
    this.setState({ isFetching: true })

    API.get('/', { params })
      .then(this.onFetchRecipesSuccess)
      .catch(this.onFetchRecipesFailure)
      .then(() => {
        this.setState({ isFetching: false })
      })
  }

  onFetchRecipesSuccess (response) {
    console.log(response);
    this.setState({ recipes: response.data.results })
  }

  onFetchRecipesFailure (err) {
    console.error(err.message, err)
    alert('Deu Ruim!')  
  }

  onSearchRecipes (event) {
    if (event.charCode !== ENTER_CHAR_CODE) {
      return
    }

    this.fetchRecipes(event.target.value)
  }

  render() {
    return (
      <div className="container">
        <Header onSearchRecipes={ (this.onSearchRecipes) }/>

        { this.state.isFetching && <Loader /> }

        {
          !this.state.isFetching &&
          <RecipesList recipes={ this.state.recipes } />
        }
      </div>
    )
  }
}

export default App
