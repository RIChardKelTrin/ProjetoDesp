import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import Routes from './src/routes/index'
import { StatusBar } from 'react-native';


export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="red" barStyle="light-content"/>
      <Routes/>
    </NavigationContainer>
     
  );
}

