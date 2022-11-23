import React from 'react';
import { StyleSheet, View, Button, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../Components/Header';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Linking } from 'react-native';




export default function Home() {
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <Header></Header>
      <View>
        <Text style={styles.text1}>Usuário logado! Utilize todas as funcionalidades do Sistema.</Text>
      </View>
      <View style={styles.ViewButton}>
        <TouchableOpacity style={styles.Cadastrar} onPress={() => navigation.navigate('CadastroCliente')}>
          <Text style={styles.TextTitulo}><Ionicons name="add" size={18} color="white" />INICIAR UM NOVO SERVIÇO</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity
          activeOpacity={0.5} onPress={() => { Linking.openURL('mailto:keltren@hotmail.com.br') }} style={styles.TouchSuport} >
          <View style={styles.styleiconview} />
          <Text style={styles.textSuport}><MaterialCommunityIcons name="email-edit-outline" size={24} color="white" />
            Entrar em contato com o suporte!
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.textMarca}>Developed by ©LGR2022 Todos os direitos reservados.</Text>
      </View>

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
  text1: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    marginTop: '-60%',

  },
  Cadastrar: {
    marginTop: '30%',
    backgroundColor: "#ff0000",
    width: '80%',
    height: '20%',
    borderRadius: 4,
    aligndatas: "center",
    justifyContent: "center",
    position: "relative",
    padding: '5%',
    borderWidth: 0.8,
    borderColor: "white"
  },
  TextTitulo: {
    fontSize: 17,
    color: "white",
    textAlign: "center",
    fontWeight: "bold"
  },
  ViewButton: {
    marginTop: '-50%',
  },
  textSuport: {
    marginTop: '5%',
    borderBottomWidth: 0.8,
    borderBottomColor: "#f00",
    color: "white",
    fontSize: 13,
    justifyContent: 'center',
  },
  textMarca:{
    marginTop: '1%',
    color: "#e0e0e0",
    fontSize: 10,
    justifyContent: 'center',
  }


});
