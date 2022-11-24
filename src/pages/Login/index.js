import React, { useState } from "react";
import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native';
import enviar from '../../Cliente/Services/api';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { Linking } from 'react-native';


export default function Login() {
  const [id, setId] = useState(null)
  const [usuario, setUsuario] = useState(null)
  const [senha, setSenha] = useState(null)

  async function Entrar() {
    let cont =0;
    await enviar.get('/Login/' + id + '/' + usuario + '/' + senha,
    {
      id: id,
      usuario : usuario,
      senha: senha
    })
    .then(response=>response) 
    .catch(erro => {
        if (cont == 0) {
            console.log("Erro ao acessar o login")
            cont++
            return alert("Erro ao acessar o login! Preencha os valores corretamente.")
        } else {
            cont++
            console.log("Erro na conexão")
            return alert("Erro ao acessar: " + erro)

        }
    })
    if(cont == 0) {
        console.log("Acesso permitido!"), alert("Bem vindo despachante!")
        return navigation.navigate("Menu")
    }
}

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.viewLogo}>
        <Animatable.View delay={600} animation="fadeInUp"><Text style={styles.textLogo}>DESPFÁCIL</Text></Animatable.View>
        <Animatable.View delay={600} animation="fadeInUp"><Text style={styles.textLogo2}>"FÁCIL E PRÁTICO"</Text></Animatable.View>
      </View>

      <TextInput keyboardType="numeric" placeholder='Digite seu ID' style={styles.TextInput} onChangeText={(value) => setId(value)} />
      <TextInput placeholder='Digite seu usuário' style={styles.TextInput} onChangeText={(value) => setUsuario(value)} />
      <TextInput keyboardType="numeric" placeholder='Digite sua senha' style={styles.TextInput} onChangeText={(value) => setSenha(value)} />

      <TouchableOpacity style={styles.button} onPress={() => Entrar()}>
        <Text style={styles.buttonentrar}><MaterialCommunityIcons name="home-import-outline" size={20} color="#e0e0e0" /> Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5} onPress={() => { Linking.openURL('mailto:keltren@hotmail.com.br') }} style={styles.TouchSuport} >
        <View/>
        <Text style={styles.textSuport}>
          Problemas para acessar ou é novo por aqui?
          Mande um E-mail para nosso time!
        </Text>
      </TouchableOpacity>



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
  logo: {
    width: '60%',
    height: '20%',
  },
  TextInput: {
    marginTop: '5%',
    width: '90%',
    backgroundColor: 'white',
    fontSize: 13,
    fontWeight: 'bold',
    borderRadius: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: "#000"
  },
  viewLogo: {
    flex: 0,
    justifyContent: "center",
    alignItems: "center",
    padding: '5%',
    marginTop: '-25%',

  },
  textLogo: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#E0E0E0",
    borderTopWidth: 5,
    borderBottomWidth: 5,
    borderTopColor: "#f00",
    borderBottomColor: "#f00",
    padding: 10
  },
  buttonentrar: {
    fontSize: 18,
    color: '#e0e0e0',
    fontWeight: 'bold',
  },
  button: {
    position: 'relative',
    backgroundColor: '#f00',
    borderRadius: 8,
    paddingVertical: 8,
    width: '80%',
    alignSelf: 'center',
    bottom: '-12%',
    alignItems: 'center',
  },
  textLogo2: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#E0E0E0",
    borderTopColor: "#f00",
    borderBottomColor: "#f00",
    padding: 20
  },
  textSuport: {
    marginTop: '-4%',
    borderBottomWidth: 1,
    borderBottomColor: "#f00",
    color: "white",
    fontSize: 11,
    justifyContent: 'center',
  },

});