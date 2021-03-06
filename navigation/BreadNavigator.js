import React, {useState} from "react";
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
import AuthScreen from "../screens/users/AuthScreen";
import OrdersScreen from "../screens/orders";

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












// creacion del Tab navigator
const Tab = createBottomTabNavigator();

const BreadNavigator = () => {
    let badge_cart = useSelector(state => state.cart.productsCart.length);
    let badge_favs = useSelector(state => state.favs.productsFavs.length);
    return (
        
    
        
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
                      }else if (route.name === 'Ordenes') {
                        iconName = focused ? 'bars' : 'bars';
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
                <Tab.Screen name="Ordenes" component={OrdersScreen} />
                
            </Tab.Navigator>
        
    )
}
    


// creacion del auth navigator

const AuthStack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <AuthStack.Navigator 
            initialRouteName="Login"
            screenOptions={{
                headerShown:false
            }}
        >
            <AuthStack.Screen name="Login" component={AuthScreen} />
        </AuthStack.Navigator>
    )
}
// exportacion condicional
export default () => {
    // const [user, setUser] = useState(true);
    const loggedIn = useSelector(state => state.auth.token);

    return(
        <NavigationContainer>
            {   loggedIn ? (<BreadNavigator/>) : (<AuthNavigator/>)   }
            {/* {   user ? (<BreadNavigator/>) : (<AuthNavigator/>)   } */}
        </NavigationContainer>
    )

}