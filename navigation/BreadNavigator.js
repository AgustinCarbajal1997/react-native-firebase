import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import Zapatillas from "../screens/zapatillas";
import Indumentaria from "../screens/indumentaria";
import ShoppingCart from "../screens/shoppingCart";
import Favs from "../screens/favs";
import { useSelector } from "react-redux";


const HomeStack = createStackNavigator();
const HomeStackScreen = () =>{
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name = "Home" component={Home}/>
            <HomeStack.Screen name="Zapatillas" component={Zapatillas}/>
            <HomeStack.Screen name="Indumentaria" component={Indumentaria}/>
        </HomeStack.Navigator>
    )
}



const ShoppingCartNav = createStackNavigator();
const ShoppingCartScreen = () => {
    return (
        <ShoppingCartNav.Navigator>
            <ShoppingCartNav.Screen name="Mi carrito" component={ShoppingCart} />
        </ShoppingCartNav.Navigator>
    )
}



const FavsNav = createStackNavigator();
const FavsScreen = () => {
    return (
        <FavsNav.Navigator>
            <FavsNav.Screen name="Favoritos" component={Favs} />
        </FavsNav.Navigator>
    )
}













const Tab = createBottomTabNavigator();

const BreadNavigator = () => {
    let badge_cart = useSelector(state => state.cart.productsCart.length);
    let badge_favs = useSelector(state => state.favs.productsFavs.length);
    return (
        
    
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home"
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                      let iconName;
          
                      if (route.name === 'Home') {
                        iconName = focused
                          ? 'home'
                          : 'home';
                      } else if (route.name === 'Carrito') {
                        iconName = focused ? 'shoppingcart' : 'shoppingcart';
                      }else if (route.name === 'Favoritos') {
                        iconName = focused ? 'hearto' : 'hearto';
                      }
          
                      
                      return <AntDesign name={iconName} size={size} color={color} />;
                    },
                  })}
                tabBarOptions={{
                    activeTintColor:"tomato",
                    inactiveTintColor:"gray"
                }}
            >
                <Tab.Screen name="Home" component={HomeStackScreen}/>
                <Tab.Screen name="Carrito" component={ShoppingCartScreen} options={{ tabBarBadge:badge_cart}}/>
                <Tab.Screen name="Favoritos" component={FavsScreen} options={{ tabBarBadge:badge_favs}}/>
                
            </Tab.Navigator>
        </NavigationContainer>
    )
}
    
export default BreadNavigator