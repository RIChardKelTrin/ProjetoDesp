import React, { useEffect, useState } from "react";
import api from "../../../Services/api";
import ApiSv from "../../../VeiculoServico/Services/Api";
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
import Escolhas from '../../Components/Escolhas'
export default function Escolher({ navigation , route}) {
  //Listar Serviços
  const [servicos, setServicos] = useState({});
  const [veiculo, setSVeiculo] = useState(route.params.veiculo);

  const get = async () => {
    try {
      let { data } = await api.getServicos();
      setServicos(data);
    } catch (err) {
      console.log("erro aki: ", err);
    }
  };
  //------------------------------------------------------

useEffect(() => {
  get()
},[])

const post = async (servico) => {
  let cont = 0
  try{
    ApiSv.addSV(veiculo, servico)
  }catch(erro){
    cont++
    console.log("Erro ao transmistir dados do cadastro SV: " + erro)
  }

  if(cont == 0) return navigation.navigate("Menu")

}

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        style={{ marginTop: 30 }}
        data={servicos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Escolhas data={item} callback={post} />}
      />

      <View  style={styles.botoes}>
        <TouchableOpacity
          style={styles.Botao}
          onPress={() => navigation.navigate("Menu")}
        >
          <Text style={styles.texto}>Voltar</Text>
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
