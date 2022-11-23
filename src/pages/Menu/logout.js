import React from 'react';
import { StyleSheet, View, Button, TouchableOpacity, Text, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable'
import Marca from '../../Cliente/Components/Marca'
import { AntDesign } from '@expo/vector-icons';



export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.viewLogo}>
        <Animatable.View delay={200} animation="fadeInUp"><Text style={styles.textLogo}>DESPFÁCIL</Text></Animatable.View>
        <Animatable.View delay={200} animation="fadeInUp"><Text style={styles.textLogo2}>"FÁCIL E PRÁTICO"</Text></Animatable.View>
      </View>
      <View>
        <Text style={styles.text1}>Deseja sair do sistema:</Text>
      </View>


      <View style={styles.container}>
        <TouchableOpacity style={styles.buttonTouch} onPress={() => navigation.navigate('Welcome') + alert("Você foi deslogado!")}>
          <Text style={styles.TextTitulo}><AntDesign name="logout" size={20} color="black" />   SAIR DO SISTEMA</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonTouch} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.TextTitulo}><AntDesign name="home" size={21} color="black" /> RETORNAR A HOME</Text>
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
  textLogo: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#E0E0E0",
    borderTopWidth: 5,
    borderBottomWidth: 5,
    borderTopColor: "#f00",
    borderBottomColor: "#f00",
    padding: 10
  },
  viewLogo: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    padding: 1,
    marginTop: 30,

  },
  textLogo2: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#E0E0E0",
    borderTopColor: "#f00",
    borderBottomColor: "#f00",
    padding: 20
  },
  text1: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",

  },
  TextTitulo: {
    fontSize: 15,
    color: "red",
    textAlign: "center",
    fontWeight: "bold"
  },
  buttonTouch: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
    marginBottom: '5%',
    backgroundColor: "white",
    borderRadius: 2,
    aligndatas: "center",
    justifyContent: "center",
    position: "relative",
    padding: '5%',
    borderWidth: 0.8,
    borderColor: "black"
  },


});