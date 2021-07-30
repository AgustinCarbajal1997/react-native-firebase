import { URL_API } from "../../constants/Database";

export const SELECT_ITEM = 'SELECT_ITEM';
export const DELETE_ITEM = 'DELETE_ITEM';
export const CONFIRM_CART = 'CONFIRM_CART'

export const addToCart = (item) => ({
    type:"SELECT_ITEM",
    productoItem:item
})

export const deleteItem = (id) => ({
    type:"DELETE_ITEM",
    itemToDelete:id
})

export const confirmCart = (payload, user) => {
    return async dispatch => {
        try {
            const response = await fetch(`${URL_API}/ordenes.json`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify({ date: Date.now(), items:{...payload}, user})
            })

            const result = await response.json();
            console.log(result);
            dispatch({
                type:CONFIRM_CART,
                confirm:true
            })



        } catch (error) {
            console.log(error.message)
        }
    }
}