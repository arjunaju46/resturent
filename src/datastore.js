import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { restReducer } from "./restReducer/rReducer";


// create reducer

const reducer=combineReducers({
    reducer1:restReducer
    

})

// create middileware
const middileware=[thunk]


// create store
//                      reducer,middileware
const store=createStore(reducer,applyMiddleware(...middileware))



export default store


