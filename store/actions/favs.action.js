export const SELECT_ITEM_FAV = 'SELECT_ITEM_FAV';
export const DELETE_ITEM_FAV = 'DELETE_ITEM_FAV';


export const addToFavs = (item) => ({
    type:"SELECT_ITEM_FAV",
    productoItem:item
})

export const deleteFav = (id) => ({
    type:"DELETE_ITEM_FAV",
    itemToDelete:id
})