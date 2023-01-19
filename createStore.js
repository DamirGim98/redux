// Создаем стор, возвращаем обьект с функцией диспатч и получения состояния, в свою очередь получает reducer и начальное состояние.
export function createStore(reducer, initialState) {
    /*
        Здесь через замыкание будем хранить наш стейт,
        в данном примере используется let, каждый раз когда
        будет использоваться dispatch, стейт будет обновлятся 
        и переприсваиваться результату из скомбинированного reducer.    
    */
    let state = initialState
    return {
        dispatch: action => { state = reducer(state, action) },
        getState: () => state,
    }
}
