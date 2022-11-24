import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../Pages/Components/Header';
import Marca from './../Cliente/Components/Marca'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';



export default function Veiculos() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header></Header>
      <View>
        <Text style={styles.text1}>Usuário logado! Utilize todas as funcionalidades do Sistema.</Text>
      </View>
      <View>
        <Text style={styles.text2}>Você está na aba de "VEÍCULOS"</Text>
        <Text style={styles.text2}>Escolha uma opção:</Text>
      </View>

      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonTouch} onPress={() => navigation.navigate('ListarVeiculos')}>
          <Text style={styles.TextTitulo}><FontAwesome5 name="list-alt" size={18} color="white" /> LISTA DE VEÍCULOS</Text>
        </TouchableOpacity>
      </View>
      <Marca></Marca>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#191919'
  },
  rotasCliente:{
    backgroundColor: '#fff',
    fontSize: 19,
    marginBottom: 15,
    padding: 7,
    borderRadius: 8,
    width: 280,
    alignItems: 'center',
    alignSelf: 'center'
  },
  text1: {
    marginTop: '10%',
    color: "white",
    fontSize: 12,
    fontWeight: "bold",

  },
  text2:{
    marginTop: '10%',
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: 'center',
    borderBottomWidth: 3,
    borderBottomColor: "#f00",
    padding: 4
  },
  TextTitulo: {
    fontSize: 15,
    color: "white",
    textAlign: "center",
    fontWeight: "bold"
  },
  buttonTouch:{
    borderTopWidth: 2,
    borderBottomWidth: 2,
    marginBottom: '5%',
    backgroundColor: "#ff0000",
    borderRadius: 8,
    aligndatas: "center",
    justifyContent: "center",
    position: "relative",
    padding: '5%',
    borderWidth: 0.8,
    borderColor: "white"

    

  },

});