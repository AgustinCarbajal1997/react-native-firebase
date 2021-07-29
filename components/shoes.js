import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  FlatList,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Button
} from "react-native";
import ModalProduct from "./Modal";
import { ZapatillasProducts } from "./products";
import { AntDesign } from "@expo/vector-icons";
import { useSelector, useDispatch, connect } from "react-redux";
import { addToCart } from "../store/actions/cart.action";
import { addToFavs } from "../store/actions/favs.action";


const Shoes = ({navigation}) => {
  const dispatch = useDispatch();
  const [calzados, setCalzados] = useState(ZapatillasProducts);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState({})

  const handleOpenModal = (itemCompleto) => {
    setModalOpen(true);
    setModalProduct(itemCompleto)
  }
  const handleAddToCart = (itemCompleto) => {
    const productToAddCart = {
      id:itemCompleto.id,
      imageSrc:itemCompleto.imageSrc,
      precio:itemCompleto.precio,
      titulo:itemCompleto.titulo
    }
    dispatch(addToCart(productToAddCart))
  }
  const handleAddToFavs = (itemCompleto) => {
    const productToAddFavs = {
      id:itemCompleto.id,
      imageSrc:itemCompleto.imageSrc,
      precio:itemCompleto.precio,
      titulo:itemCompleto.titulo
    }
    dispatch(addToFavs(productToAddFavs))
  }

  const Item = ({ imageSrc, titulo, precio, itemCompleto }) => {
    return (
      <View style={styles.item}>
        <Image style={styles.img} source={imageSrc} />
        <Text style={styles.title}>{titulo}</Text>
        <Text style={styles.price}>{precio}</Text>
        <TouchableOpacity onPress={() => handleOpenModal(itemCompleto)} style={styles.buttonSeeMore}>
          <Text style={styles.seeMoreText}>VER MAS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cart} onPress={()=> handleAddToCart(itemCompleto)} >
        <AntDesign name="shoppingcart" size={30} color="gray"/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.favs} onPress={()=> handleAddToFavs(itemCompleto)} >
        <AntDesign name="hearto" size={30} color="gray"/>
        </TouchableOpacity>
      </View>
    );
  };

  const renderItem = ({ item }) => (
    <Item imageSrc={item.imageSrc} titulo={item.titulo} precio={item.precio} itemCompleto={item}/>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        
        data={calzados}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />

      <ModalProduct modalOpen={modalOpen} setModalOpen={setModalOpen} modalProduct={modalProduct} setModalProduct={setModalProduct} /> 
    </SafeAreaView>
  );
};

export default Shoes;

const styles = StyleSheet.create({
  container: {},
  item: {
    backgroundColor: "#ffffff",
    position:"relative",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
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
    width: 200,
    height: 200,
    borderRadius: 10,
    margin: 10,
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    color: "#1b2522",
  },
  price: {
    fontSize: 20,
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
  cart:{
    position:"absolute",
    top:"2%",
    right:"20%"
  },
  favs:{
    position:"absolute",
    top:"2%",
    right:"5%"
  }
});