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

export default function Listars({ navigation }) {
  //Listar Serviços
  const [servicos, setServicos] = useState({});
  const get = async () => {
    try {
      let { data } = await api.getServicos();
      setServicos(data);
    } catch (err) {
      console.log("erro aki: ", err);
    }
  };
  //------------------------------------------------------

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        style={{ marginTop: 30 }}
        data={servicos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Item data={item} />}
      />

      <View  style={styles.botoes}>
        <TouchableOpacity
          style={styles.Botao}
          onPress={() => navigation.navigate("Menu")}
        >
          <Text style={styles.texto}>Voltar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.Botao} onPress={() => get()}>
          <Text style={styles.texto}>Listar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#191919",
    alignItems: "center",
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
    width: 150,
    height: 50,
  },
  texto: {
    color: "#EAF0ED",
    textAlign: "center",
    justifyContent: "center",
  },
});
