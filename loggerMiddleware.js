export const loggerMiddleware = (store) => (next) => (action) => {
    console.log('dispatching', action);
    console.log('before', store.getState())
    next(action)
    console.log('after', store.getState())
    return ;
}