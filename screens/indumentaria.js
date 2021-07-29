import React from 'react'
import { StyleSheet, Text, View,Button,ScrollView,TouchableOpacity } from 'react-native';
import Clothes from '../components/clothes';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
const Indumentaria = ({ navigation }) => {
    return (
        
            <View>
                
                <Clothes navigation={navigation}/>
                
                
                
            </View>
        
    )
}

export default Indumentaria

