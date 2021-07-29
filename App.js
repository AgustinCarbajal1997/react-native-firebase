import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BreadNavigator from './navigation/BreadNavigator';
import { Provider } from 'react-redux';
import store from './store';



export default function App() {
  return (

    <Provider store={store}>
      <BreadNavigator/>
    </Provider>

    
  );
}


