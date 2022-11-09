import { Component } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


export default function Botao({navigation}){

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.fundo} activeOpacity={0.3} onPress={ () => navigation.navigate('Cadastrar')}>
                <View>
                    <Feather name="plus" color={'white'} size={45} />
                </View>
            </TouchableOpacity>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    fundo: {
        position: 'absolute',
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        right: 30,
        bottom: 30,
        backgroundColor: '#f70b17',
        borderRadius: 100
    }
}) 