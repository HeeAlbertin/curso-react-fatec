import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' //dispatch = um dos metodos do store -> dispara uma action

import * as loaderActionCreators from '../actions/loader'

import Header from '../components/header'

import API from '../api.js'
import Loader from '../components/loader'
import RecipesList from '../components/recipes-list'

const actionCreators = {
  ...loaderActionCreators //os ... pega cada fetch do array, pois aqui recebe os dois objetos (display e hide)
}

class App extends Component {
  /* INICIALIZAÇÃO DOS COMPONENTES NA MÃO, APENAS PARA TESTE
  //cada escopo tem seu this
  componentDidMount() {
    this.props.displayLoader()

    setTimeout(() => {
      this.props.hideLoader()
    }, 2000)
  }  */

  render() {
    const { props } = this //apenas gracinha do ES6 que é igual a:
    /*
    const props = this.props // destroi e constroi novamente
    // com isso não é necessário dar um this. em todas as chamadas de props
    */

    return (
      <div className="container">
        <Header />

        { props.isFetching && <Loader /> }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.loader 
  }
}

// funcao que recebe o dispatch
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App) // chama duas vezes, na segunda chamada passa o App
  //connect recebe dois argumentos. Primeiro é o que mapeia o estado da store e o segundo parametro é o dispatch
