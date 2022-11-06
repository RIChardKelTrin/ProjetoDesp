import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableHighlightBase, TouchableOpacity, View } from 'react-native';
import Botao from '../../Components/Botao';
import Itens from '../../Components/Itens';
import Pesquisar from '../../Components/Pesquisar';


export default function Listar({ navigation }) {

    const [veiculos, setVeiculos] = useState([]);
    const [load, setLoad] = useState(true)
    const [semResposta, setSemResposta] = useState()

    const getVeiculos = (cars) => {
        setSemResposta(true)
        setVeiculos([])
        setTimeout(() => { setVeiculos(cars), setSemResposta(false)
        }, 1000) 

    }

    useEffect(() => {
        navigation.addListener('focus', () => {
            setLoad(!load)
        });
    }, [load, navigation])

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={"#191919"} />

            <Pesquisar callBack={getVeiculos} consultar={load} />

            {
                (veiculos.length > 0) ?
                    <>
                    <FlatList style={styles.FlatList}
                        data={veiculos}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <Itens data={item} navigation={navigation} />}
                    />
                    </>
                    :
                    semResposta ?
                     <ActivityIndicator size={40} color="#f70b17"/>
                    :
                    <Text style={styles.texto}>Nenhum Veículo encontrado!</Text>
            }

            <Botao navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191919',
        justifyContent: 'center',
        alignContent: 'center',

    },
    FlatList: {
        paddingTop:0
    },
    texto: {
        fontSize: 20,
        textAlign: 'center',
        color: '#f70b17'
    }
});

