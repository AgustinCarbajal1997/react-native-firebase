import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Button, ScrollView, FlatList, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import { deleteFav } from '../store/actions/favs.action';

const Favs = () => {
    const dispatch = useDispatch();

    const favList = useSelector(state => state.favs.productsFavs);

    const handleToDelete = (id) => {
      dispatch(deleteFav(id))
    }

    const Item = ({ id, imageSrc, titulo, precio, itemCompleto }) => {
        return (
          <View style={styles.item}>
            <Image style={styles.img} source={imageSrc} />
            <Text style={styles.title}>{titulo}</Text>
            <Text style={styles.price}>${precio}</Text>
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

            {favList.length === 0 
            ? <Text style={styles.withOutProducts}>No hay productos en favoritos</Text>
            : <FlatList
        
                data={favList}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
            
            
            }

        </View>
    )
}

export default Favs

const styles = StyleSheet.create({
    container: {},
    item: {
      backgroundColor: "#ffffff",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
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
      height:"100%",
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
    }
  });