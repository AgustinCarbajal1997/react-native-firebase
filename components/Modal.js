import React from 'react'
import { StyleSheet,Text,SafeAreaView, Image, TouchableOpacity, Modal,ScrollView } from 'react-native';

const ModalProduct = ({ modalOpen, setModalOpen, modalProduct, setModalProduct }) => {
    const handleCloseModal = () => {
        setModalOpen(false);
        setModalProduct({});
    }
    return (
        <Modal animationType="slide" visible={modalOpen}>
            <ScrollView>
                    <SafeAreaView style={stylesModal.container}>
                    <Image style={stylesModal.image} source={modalProduct.imageSrc}/>
                    <Text style={stylesModal.title}>{modalProduct.titulo}</Text>
                    <Text style={stylesModal.precio}>${modalProduct.precio}</Text>
                    <Text style={stylesModal.description}>{modalProduct.description}</Text>
                    <TouchableOpacity style={stylesModal.closemodal} onPress={handleCloseModal}><Text style={stylesModal.closemodalText}>CERRAR</Text></TouchableOpacity>
                    </SafeAreaView>
            </ScrollView>
        </Modal>
    )
}

export default ModalProduct

const stylesModal = StyleSheet.create({
    container:{
        justifyContent:"center",
        alignItems:"center",
        margin:20
    },
    image:{
        width:300,
        height:300
    },
    title:{
        textAlign:"center",
        margin:20,
        fontSize:25,
        fontWeight:"bold",
        color:"#1b2522",
        
    },
    precio:{
        textAlign:"center",
        fontSize:20,
        color:"#1b2522",
        fontWeight:"bold"
    },
    description:{
        color:"#1b2522",
        marginTop:20,
        marginBottom:20,
        lineHeight:22,
        textAlign:"justify"
    },
    closemodal:{
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
    closemodalText:{
        color:"#FFFFFF",
        textAlign:"center",
        fontSize:15,
    }
})
