export function counterReducer(state, action) {
    if (action.type === 'ADD') {
      return state + 1
    } else {
      return state
    }
  }