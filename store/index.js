import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'

// reducers
import CartReducer from "./reducers/cart.reducer";
import FavsReducer from "./reducers/favs.reducer";

const RootReducer = combineReducers({
    cart:CartReducer,
    favs:FavsReducer
})


export default createStore(RootReducer, applyMiddleware(thunk));