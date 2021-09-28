// Create my Redux store here 
import {combineReducers, createStore} from 'redux';
// import {composeWithDevTools} from 'redux-devtools-extension';
import ReduceCategory from './categories';
import ReduceProducts from './products';

//1-  combine reducers in one reducer 
let reducers = combineReducers({ReduceCategory,ReduceProducts});
// let reducers = combineReducers({ReduceCategory});

// 2- createStore 
const store = () => {
    // return createStore(reducers, composeWithDevTools())
    return createStore(reducers)
}

// 3 export 
export default store();