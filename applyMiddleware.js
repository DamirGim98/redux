import compose from "./compose.js"
/*
    Реализация метода applyMiddleware, сводится к очень
    простой вещи: createStore возвращает объект с полем
    «dispatch». dispatch, как мы помним (не помним) из 
    первого листинга кода, — это функция, которая всего
    лишь применяет редюсер к нашему текущему состоянию 
    (newState = reducer(state, action)).
    Так вот applyMiddleware не более чем переопределяет
     метод dispatch, добавляя перед (или после) обновлением
      состояния какую-то пользовательскую логику.
    Миддлевар вызывается между диспатчем и до того как он достигнет reducer.
*/

export default function applyMiddleware(
    ...middlewares
  ){
    return (createStore) =>
      (
        reducer,
        preloadedState
      ) => {
        const store = createStore(reducer, preloadedState)
        let dispatch = () => {
          throw new Error(
            'Dispatching while constructing your middleware is not allowed. ' +
              'Other middleware would not be applied to this dispatch.'
          )
        }
  
        const middlewareAPI = {
          getState: store.getState,
          dispatch: (action, ...args) => dispatch(action, ...args)
        }
        const chain = middlewares.map(middleware => middleware(middlewareAPI))
        dispatch = compose(...chain)(store.dispatch)
  
        return {
          ...store,
          dispatch
        }
      }
  }