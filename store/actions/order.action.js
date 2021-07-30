import { URL_API } from "../../constants/Database";

export const GET_ORDERS = 'GET_ORDERS';
export const DELETE_ORDER = 'DELETE_ORDER';

const orderByUserID = (data, user) => {
  const items = [];
//   se convierte el objeto en array
  Object.keys(data).forEach(key => items.push({ id: key, ...data[key] }));
  // Se filtran el array para obtener solamente la de los usuarios
  return items.filter(item => item.user === user);
}

export const getOrders = (user) => {
  return async dispatch => {
    try {
      const response = await fetch(`${URL_API}/ordenes.json`);
      const result = await response.json();
      const items = orderByUserID(result, user);

      dispatch({ type: GET_ORDERS, payload: items });
    } catch (err) {
      console.log(err.message);
    }
  }
}

export const deleteOrder = (id) => {
  return async dispatch => {
    try {
      await fetch(`${URL_API}/ordenes/${id}.json`, {
        method: 'DELETE',
      });
      dispatch({ type: DELETE_ORDER, order: id });
    } catch (err) {
      console.log(err.message);
    }
  }
}