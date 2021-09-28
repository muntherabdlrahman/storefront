/* eslint-disable import/no-anonymous-default-export */
export default store=>next=>action=>
typeof action==='function'?action(store.dispatch,store.getstate):next(action)