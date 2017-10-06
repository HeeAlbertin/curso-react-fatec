import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import registerServiceWorker from './register-service-worker'

import appReducers from './reducers/reducers'

import App from './containers/app'

import './styles/font.css'
import './styles/base.css'

const loggerMiddleware = createLogger()

// middleware, quando se tem mais de um, tem que compor os middlewares em uma coisa só
const enhancer = compose (
	applyMiddleware( 		
		loggerMiddleware,
		thunk // para criar uma action creator que retorna uma funcao
	)
)

// reducers são apenas funcoes que recebem dois paranaues, o estado atual e a action que foi disparada
const store = createStore(appReducers, enhancer)

//console.log(store.getState())

ReactDOM.render(
	// com redux, renderiza com o provider
	<Provider store={ store }>
		<App />
	</Provider>,
	document.getElementById('root')
)
registerServiceWorker()



// cria um reducer => edita o arquivo reducers.js (adiciona) => cria a action => faz o maps no app