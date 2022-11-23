import React, { useState } from "react";
import api from "../../../Services/api";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  FlatList,
} from "react-native";
import Item from "../../Components/item";
import Header from "../../Components/Header";

import { useForm, Controller } from "react-hook-form";

export default function Deletar({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: "",
    },
  });

  const handleSignIn = async (data) => {
    console.log(data);
    try {
      await api.DeleteServico(data.id);
    } catch (erro) {
      console.log("Erro Ao Deletar ", erro);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="Digite ID Que Deseja Deletar"
              style={styles.borda} // dps troca o styles
              onChangeText={onChange}
              value={value}
              placeholderTextColor={"#fff"}
            />
          )}
          name="id"
        />
      </View>

      <View style={styles.botoes}>
        <TouchableOpacity
          style={styles.Botao}
          onPress={() => navigation.navigate("Listar")}
        >
          <Text style={styles.texto}>Voltar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.Botao}
          onPress={handleSubmit(handleSignIn)}
        >
          <Text style={styles.texto}> Salvar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#191919",
  },
  content: {
    marginTop: 20,
  },
  botoes: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  Botao: {
    marginTop: 100,
    padding: 5,
    justifyContent: "center",
    AlignItems: "center",
    backgroundColor: "#ff0000",
    width: 100,
    height: 50,
  },

  texto: {
    color: "#EAF0ED",
    textAlign: "center",
    justifyContent: "center",
  },

  borda: {
    color: "#fff",
    fontSize: 18,
    borderColor: "#D32F2F",
    borderRadius: 5,
    borderBottomWidth: 1,
    backgroundColor: "#191919",
    textShadowRadius: 20,
    alignItems: "center",
    padding: 5,
    margin: 10,
  },
});
