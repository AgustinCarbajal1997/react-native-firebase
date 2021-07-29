import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
const Banner = ({navigation}) => {
    return (
        <View style={stylesBanner.banner}>
            <Image style={stylesBanner.img} source={require("../assets/NIKE/banner6.jpg")}/>
            <View style={stylesBanner.titulos} >
                <Text style={stylesBanner.bussiness}>THE CROWN</Text>
                <Text style={stylesBanner.showroom}>SHOWROOM</Text>
            </View>
            <View style={stylesBanner.products}>
                <TouchableOpacity style={stylesBanner.product} onPress={()=> navigation.navigate("Zapatillas")}><Text style={stylesBanner.productText}>ZAPATILLAS</Text></TouchableOpacity>
                <TouchableOpacity style={stylesBanner.product} onPress={()=> navigation.navigate("Indumentaria")}><Text style={stylesBanner.productText}>INDUMENTARIA</Text></TouchableOpacity>
            </View>

        </View>
    )
}

export default Banner

const stylesBanner = StyleSheet.create({
    banner:{        
        width:'100%',
        height:600,
        position:'relative'
    },
    img:{
        
        backgroundColor:"green",
        resizeMode:"cover",
        position:'absolute',
        width:'100%',
        height:'100%',
        
    },
    titulos:{
        position:'absolute',
        top:'50%',
        left:'50%',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'

    },
    bussiness:{
        fontSize:40,
        color:'white',
        fontWeight:'700'
    },
    showroom:{
        fontSize:20,
        color:'white',
    },
    products:{
        position:"absolute",
        top:'70%',
        position: 'absolute',
        left: 0,
        right: 0,
        flexDirection:"row",
        justifyContent: "space-around",
        alignItems: 'center',
    },
    product:{
        backgroundColor:"whitesmoke",
        padding:"2%",
        borderRadius:10,    
    },
    productText:{
        fontWeight:"bold",
        fontSize:15,
        color:"gray"
    }
        
        

    
})