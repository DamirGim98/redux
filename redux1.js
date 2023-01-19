import { combineReducers } from "./combineReducers.js";
import { createStore } from "./createStore.js"
import { todosReducer } from "./todoReducer.js";
import { counterReducer } from "./counterReducer.js";
import applyMiddleware from "./applyMiddleware.js";
import { loggerMiddleware } from "./loggerMiddleware.js";

const initialState = {
  todosReducer: [],
  counterReducer: 0,
}

const reducer = combineReducers({todosReducer,counterReducer})
// const store = createStore(reducer, initialState);
const store = applyMiddleware(loggerMiddleware)(createStore)(reducer, initialState)


// Использование
store.dispatch({
    type: 'ADD_TODO',
    id: 1,
    text: 'Понять насколько redux прост'
  })
  
store.getState()
  // [{ id: 1, text: 'Понять насколько redux прост', completed: false }]
  
  // store.dispatch({
  //   type: 'TOGGLE_TODO',
  //   id: 1
  // })
  
store.getState()
  // [{ id: 1, text: 'Понять насколько redux прост', completed: true }]