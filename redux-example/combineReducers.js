    /* Метод, который позволяет вместо того, 
    чтобы создавать один огромный reducer для всего состояния приложения сразу, разбивать его на отдельные модули. */
export function combineReducers(reducersMap) {
    console.log('All Reducers -> ', reducersMap)
    /* Комбинация редьсеров возвращает функции в замыкании которой лежит массив наших редьюсеров, получается так, что при вызове комбинирующего reducer action попадет во все reducers сразу, если он не обрабатывается просто возращается текущий стейт. */

    return function combinationReducer(state, action) {
      const nextState = {}
      /*
        Для обращения к правильному стейту и редьюсеру, обращаемся в некст стейт по ключу.
      */
      Object.entries(reducersMap).forEach(([key, reducer]) => {
        nextState[key] = reducer(state[key], action)
      })
      return nextState
    }
  } 