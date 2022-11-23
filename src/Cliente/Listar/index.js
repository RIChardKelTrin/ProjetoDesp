import React, { useState, useEffect, Button, ScrollView, StatusBar } from "react";
import { FlatList, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import enviar from '../Services/api';
import Header from '../Components/Header'
import { Ionicons } from '@expo/vector-icons';
import Cabecalho from "../Components/Cabecalho";



export default function Listar() {
  const [clientes, SetClientes] = useState([]);


  useEffect(() => {

    async function ListarClientes() {
      const response = await enviar.get("/Cliente");
      console.log(response.data)
      SetClientes(response.data)
    }
    ListarClientes();
  }, [])


  const [id, setId] = useState([]);

  const solicitar = async () => {
    await enviar.get('/Cliente/' + id)
      .then(response => SetClientes(response.data))
      .catch(erro => console.error("Erro ao consultar" + erro))
  }


  return (
    <View style={styles.container}>
      <Header></Header>
      <View style={styles.viewtextcadastrar}>
        <Text style={styles.textcadastrar}>LISTA DE CLIENTES:</Text>
      </View>
      <Cabecalho
        id={id}
        setId={setId}
        solicitar={solicitar}
      />
      <FlatList style={styles.ViewText}
        data={clientes}
        renderItem={({ item }) =>
          <View style={styles.content}>
            <Ionicons style={styles.Icons} name="person-circle-sharp" size={22} color="black">PERFIL:</Ionicons>
            <Text style={styles.Text}>ID: {item.id}</Text>
            <Text style={styles.Text}>NOME: {item.nome}</Text>
            <Text style={styles.Text}>CPF: {item.cpf}</Text>
            <Text style={styles.Text}>RG: {item.rg}</Text>
            <Text style={styles.Text}>ENDEREÇO: {item.endereco}</Text>
            <Text style={styles.Text}>TELEFONE: {item.telefone}</Text>
          </View>
        }
      />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#191919',
    color: 'white'

  },
  Text: {
    color: 'white',
    fontSize: 18,
    margin: 1,
    marginTop: 2,
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray',
    width: 300,


  },
  content: {
    marginTop: 35,
    flexDirection: 'column',
    justifyContent: 'space-between',

  },
  Icons: {
    backgroundColor: 'white',
    marginBottom: 10,
  },
  textcadastrar: {
    color: "#fff",
    fontSize: 20,
    marginBottom: '-30%',
    marginTop: '-30%',
    justifyContent: "center",
    alignItems: "center",

  },
  viewtextcadastrar: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginTop: '10%',

  },
  ViewText: {
    marginTop: '5%',
  },
  cabecalho: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});