import React, { useEffect } from "react"
import { View, StyleSheet, FlatList } from "react-native"
import { useSelector, useDispatch } from "react-redux"
import { getOrders, deleteOrder } from '../store/actions/order.action'
import OrderItem from "../components/orderItem"


const OrdersScreen = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    const orders = useSelector(state => state.orders.items);
  
    useEffect(() => {
      dispatch(getOrders(user));
    }, []);
  
    const onDeleteHandler = (id) => dispatch(deleteOrder(id))
  
    const renderItem = (data) => (
      <OrderItem item={data.item} onDelete={onDeleteHandler} />
    )
    

    
    
    return (
      <View style={styles.container}>
        <FlatList
          data={orders}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 12,
    },
  });

  export default OrdersScreen