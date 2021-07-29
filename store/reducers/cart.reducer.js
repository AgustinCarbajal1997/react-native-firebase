import { ZapatillasProducts } from "../../components/products";
import { SELECT_ITEM, DELETE_ITEM, CONFIRM_CART } from "../actions/cart.action";

const INITIAL_STATE = {
    productsCart:[]
}

const CartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECT_ITEM:
            const productToAdd = [...state.productsCart,action.productoItem];

            return {...state, productsCart: productToAdd}
        
        case DELETE_ITEM:
            const newArray = state.productsCart.filter(newArray => newArray.id !== action.itemToDelete)    

            return {...state, productsCart:newArray}

        case CONFIRM_CART:
            return state
        default:
            return state;
    }
}

export default CartReducer;