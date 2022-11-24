import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  FlatList,
  Alert,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import api from "../../../Services/api";
import Header from "../../Components/Header";

export default function Cadastrar({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  async function handleSignIn(data) {
    let cont = 0
    console.log(data);
    try {
      cont = await api.addServicos(data);
    } catch (erro) {
      console.log("erro no formulário: ", erro);
    }
    if(cont == 0 ) navigation.navigate("Listar")
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Controller
          control={control}
          name="nome"
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="Nome Do Serviço"
              style={styles.borda}
              onChangeText={onChange}
              value={value}
              placeholderTextColor={"#fff"}
            />
          )}
        />

        <Controller
          control={control}
          name="valor"
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="Valor Do Serviço"
              style={styles.borda}
              onChangeText={onChange}
              value={value}
              placeholderTextColor={"#fff"}
            />
          )}
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
  Botao: {
    marginTop: 100,
    padding: 5,
    justifyContent: "center",
    AlignItems: "center",
    backgroundColor: "#ff0000",
    width: 100,
    height: 50,
  },

  content: {
    marginTop: 20,
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
  botoes: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

/*const Cadastro = ()=>{
    alert(nome);
    alert(valor);
    alert(dataDeEntrada)
  <TouchableOpacity onPress={()=>Cadastro()} >
        <Text>Cadastrar</Text>
      </TouchableOpacity>
}*/

{
  /* 
<Controller
        control={control}
        name="dataDeEntrada"
        render={({field:{onChange, value}}) => (
          <TextInput
            placeholder="Data De Entrada"
            style={styles.TextInput}
            onChangeText={onChange}
            value={value}
          />
        )}
      /> */
}
