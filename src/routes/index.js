import React from 'react';
import Welcome  from '../pages/Login/Welcome';
import Login from '../pages/Login';
import Menu from '../pages/Menu';
import Home from '../pages/Home'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CadastroCliente from '../Cliente/Cadastro'
import ListarCliente from '../Cliente/Listar';
import EditarCliente from '../Cliente/Editar';
import ExcluirCliente from '../Cliente/Excluir/index';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <Stack.Navigator>
        <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{headerShown: false}}
            />
       <Stack.Screen       
            name="Login"
            component={Login}
            options={{headerShown: false}}
            />
        <Stack.Screen       
            name="Menu"
            component={Menu}
            options={{headerShown: false}}
            />
        <Stack.Screen       
            name="Home"
            component={Home}
            options={{headerShown: false}}
            />
        <Stack.Screen       
            name="CadastroCliente"
            component={CadastroCliente}
            options={{headerShown: false}}
            />
            <Stack.Screen       
            name="ListarCliente"
            component={ListarCliente}
            />
            <Stack.Screen       
            name="EditarCliente"
            component={EditarCliente}
            />
            <Stack.Screen       
            name="ExcluirCliente"
            component={ExcluirCliente}
            />
 
 
    </Stack.Navigator>
    );
};