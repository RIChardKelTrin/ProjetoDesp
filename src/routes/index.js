import React from 'react';
import Welcome from '../pages/Login/Welcome';
import Login from '../pages/Login/index';
import Menu from '../pages/Menu/index';
import Home from '../pages/Home/index'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CadastroCliente from '../Cliente/Pages/Cadastro/index';
import ListarCliente from '../Cliente/Pages/Listar';
import EditarCliente from '../Cliente/Pages/Editar';
import ExcluirCliente from '../Cliente/Pages/Excluir';
import CadastrarVeiculo from '../Veiculo/Pages/Cadastrar';
import ListarVeiculos from '../Veiculo/Pages/Listar/index';
import EditarVeiculos from '../Veiculo/Pages/Editar/';
import VeiculoServico from '../VeiculoServico/Pages/Home';
import CadastrarServico from '../Servico/Pages/Cadastrar';
import ListarsServico from '../Servico/Pages/Listars'
import EditarServico from '../Servico/Pages/Editar';
import DeletarServico from '../Servico/Pages/Deletar';
import EscolherServico from '../Servico/Pages/Escolher';


const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Menu"
                component={Menu}
                options={{ headerShown: false }}
                
            />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="CadastroCliente"
                component={CadastroCliente}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ListarCliente"
                component={ListarCliente}
                options={{
                    headerShown:false
                  }}
            />
            <Stack.Screen
                name="EditarCliente"
                component={EditarCliente}
                options={{
                    headerShown:false
                  }}
            />
            <Stack.Screen
                name="ExcluirCliente"
                component={ExcluirCliente}
                options={{
                    headerShown:false
                  }}
            />
            <Stack.Screen
                name="CadastrarVeiculo"
                component={CadastrarVeiculo}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ListarVeiculos"
                component={ListarVeiculos}
                options={{
                    headerShown:false
                  }}
            />
            <Stack.Screen
                name="EditarVeiculos"
                component={EditarVeiculos}
                options={{
                    headerShown:false
                  }}
            />
            <Stack.Screen
                name="VeiculoServico"
                component={VeiculoServico}
                options={{
                    headerShown:false
                  }}
            />
            <Stack.Screen
                name="CadastrarServico"
                component={CadastrarServico}
                options={{
                    headerShown:false
                  }}
            />
            <Stack.Screen
                name="EditarServico"
                component={EditarServico}
                options={{
                    headerShown:false
                  }}
            />
            <Stack.Screen
                name="ListarsServico"
                component={ListarsServico}
                options={{
                    headerShown:false
                  }}
            />
            <Stack.Screen
                name="DeletarServico"
                component={DeletarServico}
                options={{
                    headerShown:false
                  }}
            />
            <Stack.Screen
                name="EscolherServico"
                component={EscolherServico}
                options={{
                    headerShown:false
                  }}
            />



        </Stack.Navigator>
    );
};