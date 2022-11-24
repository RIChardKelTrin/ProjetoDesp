import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import React, { Component, useEffect, useState } from "react";
import Api from "../../Services/Api";

export default function Search({ callback, loadEdit }) {
  const [situacao, setSituacao] = useState("");
  const [load, setLoad] = useState(false)

  useEffect(() => {
    get()
  },[loadEdit])

  const get = async () => {
    let response
    let cont = 0
    try {
      response = await Api.getSvById(situacao);
    } catch (erro) {
      console.log("Não foi possível consultar:" + erro);
      cont++
    }
    if( cont == 0 && typeof response.data == "object")callback(response.data);
  };

  const situacoes = [
    {
      nome: "ATIVO",
      valor: 1,
    },
    {
      nome: "FINALIZADO",
      valor: 2,
    },
    {
      nome: "PENDENTE",
      valor: 3,
    },
    {
      nome: "CANCELADO",
      valor: 4,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.consulta}>
        <TextInput
          style={styles.input}
          placeholder="Digite a situação do SV..."
          onChangeText={(text) => setSituacao(text)}
        />

        <TouchableOpacity style={styles.buscar} onPress={get}>
          <Feather name="search" size={30} color={"white"} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  consulta: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "black",
    borderWidth: 1,
    marginEnd: 10,
    borderRadius: 100,
    paddingStart: 10,
    paddingEnd: 10,
    backgroundColor: "#fafafa",
  },
  buscar: {
    width: 40,
    height: 40,
    backgroundColor: "#f70b17",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
