import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'

// reducers
import CartReducer from "./reducers/cart.reducer";
import FavsReducer from "./reducers/favs.reducer";
import AuthReducer from "./reducers/auth.reducer";
import OrderReducer from "./reducers/order.reducer";

const RootReducer = combineReducers({
    cart:CartReducer,
    favs:FavsReducer,
    auth:AuthReducer,
    orders:OrderReducer
})


export default createStore(RootReducer, applyMiddleware(thunk));