import { SELECT_ITEM_FAV, DELETE_ITEM_FAV } from "../actions/favs.action";

const INITIAL_STATE = {
    productsFavs:[]
}

const FavsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECT_ITEM_FAV:
            const productToAddFav = [...state.productsFavs,action.productoItem];

            return {...state, productsFavs: productToAddFav}
        
        case DELETE_ITEM_FAV:
            const newArray = state.productsFavs.filter(newArray => newArray.id !== action.itemToDelete)    

            return {...state, productsFavs:newArray}
        default:
            return state;
    }
}

export default FavsReducer;