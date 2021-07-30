import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image  } from 'react-native';
import { useSelector, useDispatch, connect } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import { deleteItem } from '../store/actions/cart.action';
import { confirmCart } from '../store/actions/cart.action';

const ShoppingCart = () => {

    const dispatch = useDispatch();

    const user = useSelector(state => state.auth.user);
    const cartList = useSelector(state => state.cart.productsCart);
    let total = 0;
      for (let i = 0; i < cartList.length; i++) {
        total += parseInt(cartList[i].precio);
      }
    
    const handleToDelete = (id) => {
      dispatch(deleteItem(id))
    }

    const handleToConfirm = (payload) => {
      dispatch(confirmCart(payload,user))
    }

    const Item = ({ id, imageSrc, titulo, precio, itemCompleto }) => {
        return (
          <View style={styles.item}>
            <Image style={styles.img} source={imageSrc} />
            <Text style={styles.title}>{titulo}</Text>
            <Text style={styles.price}>{precio}</Text>
            <TouchableOpacity style={styles.delete} onPress={()=> handleToDelete(id)}>
            <AntDesign  name="delete" size={20} color="#900"/>
            </TouchableOpacity>
          </View>
        );
      };

      const renderItem = ({ item }) => (
        <Item id={item.id} imageSrc={item.imageSrc} titulo={item.titulo} precio={item.precio} itemCompleto={item}/>
      );

    return (
        <View>

          {cartList.length === 0 
            ? <Text style={styles.withOutProducts}>No hay productos en el carrito</Text>
            : <FlatList
        
                data={cartList}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}

                ListFooterComponent={
                  <View style={styles.finalInfo}>
                    <Text style={styles.total}>Total a pagar: ${total}</Text>
                    <TouchableOpacity style={styles.confirmCart} onPress={()=> handleToConfirm(cartList)}><Text style={styles.confirmCartText}>Confirmar Carrito</Text></TouchableOpacity>
                  </View>

                }
              />
          }
            

        </View>
    )
}

export default connect()(ShoppingCart)



const styles = StyleSheet.create({
    container: {},
    item: {
      backgroundColor: "#ffffff",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      position:"relative",
      flexDirection:"row",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 15,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
      elevation: 8,
    },
    img: {
      width: "20%",
      height: "100%",
      borderRadius: 10,
      margin: 10,
    },
    title: {
      width:"40%",
      fontSize: 10,
      textAlign: "center",
      color: "#1b2522",
    },
    price: {
      width:"40%",
      fontSize: 15,
      textAlign: "center",
      padding: 20,
      color: "#1b2522",
    },
    buttonSeeMore: {
      backgroundColor: "#019c9e",
      padding: 10,
      borderRadius: 10,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
      elevation: 8,
    },
    seeMoreText: {
      color: "#FFFFFF",
      textAlign: "center",
      fontSize: 15,
    },
    total:{
      width:"100%",
      padding:50,
      justifyContent:"center",
      alignItems:"center",
      fontSize:20,
      textAlign:"center"
    },
    withOutProducts:{
      width:"100%",
      height:"100%",
      textAlign:"center",
      fontSize:25,
      justifyContent:"center",
      alignItems:"center"

    },
    delete:{
      position:"absolute",
      top:"15%",
      right:"5%"
    },
    finalInfo:{
      justifyContent:"center",
      alignItems:"center",
    },
    confirmCart:{
      backgroundColor:"#006d68",
        padding:10,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        marginBottom:20,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
    confirmCartText:{
      color:"#FFFFFF",
      textAlign:"center",
      fontSize:15,
    }
  });
