import React from 'react';
import Welcome from '../Pages/Login/Welcome';
import Login from '../Pages/Login/index';
import Menu from '../Pages/Menu/index';
import Home from '../Pages/Home/index'
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
import ListarServico from '../Servico/Pages/Listar';
import EditarServico from '../Servico/Pages/Editar';
import DeletarServico from '../Servico/Pages/Deletar';

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
            />
            <Stack.Screen
                name="EditarCliente"
                component={EditarCliente}
            />
            <Stack.Screen
                name="ExcluirCliente"
                component={ExcluirCliente}
            />
            <Stack.Screen
                name="CadastrarVeiculo"
                component={CadastrarVeiculo}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ListarVeiculos"
                component={ListarVeiculos}
            />
            <Stack.Screen
                name="EditarVeiculos"
                component={EditarVeiculos}
            />
            <Stack.Screen
                name="VeiculoServico"
                component={VeiculoServico}
            />
            <Stack.Screen
                name="CadastrarServico"
                component={CadastrarServico}
            />
            <Stack.Screen
                name="EditarServico"
                component={EditarServico}
            />
            <Stack.Screen
                name="ListarServico"
                component={ListarServico}
            />
            <Stack.Screen
                name="DeletarServico"
                component={DeletarServico}
            />



        </Stack.Navigator>
    );
};