import { ImageComponent, LogBox, StyleSheet, Text, View } from 'react-native'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Cadastrar from './src/Veiculo/Pages/Cadastrar'
import Listar from './src/Veiculo/Pages/Listar';
import Editar from './src/Veiculo/Pages/Editar';
import Home from './src/VeiculoServico/Pages/Home';

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen 
        name="Home" 
        component={Home}
        options={{
          headerShown:false
        }}
        />
        <Stack.Screen 
        name="Listar" 
        component={Listar}
        options={{
          headerShown:false
        }}
        />
        <Stack.Screen 
        name="Cadastrar" 
        component={Cadastrar}
        options={{
          headerShown:false
        }}
        />
        <Stack.Screen 
        name="Editar" 
        component={Editar}
        options={{
          headerShown:false
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})