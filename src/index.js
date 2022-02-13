import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import { allReducers } from './Redux/Reducers';
//Selector is only use in big project
export const VAIDVELU_COMEDY = "VAIDVELU_COMEDY"
export const GOUNDAMNI_COMEDY = "GOUNDAMNI_COMEDY"

//The created store
const store = createStore(
  allReducers
)



//Actions
// we can whatever we want in instead of type
export const vadivelComedyAction = () => ({ type: "VAIDVELU_COMEDY" })
export const goundamaniComedyAction = () => ({ type: "GOUNDAMNI_COMEDY" })

//Reducer means find what these two action and reducer will join when we call in store function
// state means initial varaible
const comedyReducer = (state, actions) => {
  switch (actions.type) {
    case VAIDVELU_COMEDY:
      return state = "Kadupethuraar my lord"
    case GOUNDAMNI_COMEDY:
      return state = "Arasiyal ah ithellam saathranamppa"
    default:
      return state = "No comedy "
  }
}
// let store = createStore(comedyReducer);
// store.subscribe(() => { console.log(store.getState()) }) // it is just console.log purpose





ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

