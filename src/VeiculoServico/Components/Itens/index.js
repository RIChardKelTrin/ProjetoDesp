import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Itens({ data }) {
  const [date, SetDate] = useState(data.dataDeEntrada);
  const [veiculo, setVeiculo] = useState(data.v);

  const formataData = () => {
    let data = new Date(date),
      dia = (data.getDate() + 1).toString(),
      diaF = dia.length == 1 ? "0" + dia : dia,
      mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
      mesF = mes.length == 1 ? "0" + mes : mes,
      anoF = data.getFullYear();

    return diaF + "/" + mesF + "/" + anoF;
  };
  useEffect(() => {
    formataData();
  }, []);

  

  const list2 = [
    {
      nome: "Data De Entrada:",
      valor: formataData(),
    },
  ];
  // <View style={styles.container}>
  //   <View style={styles.content}>
  //     <View style={styles.teste}>
  //       {list1.map((item, index) => {
  //         return (
  //           <View key={index + 1} style={styles.label}>
  //             <Text style={styles.title}>{item.nome}</Text>
  //             <Text style={styles.subtitle}>{item.valor}</Text>
  //           </View>
  //         )
  //       })}
  //     </View>
  //   </View>
  // </View>

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{data.situacaoSV.nome}</Text>
        <Text style={styles.Text}>CLIENTE: {data.veiculo.cliente.nome}</Text>
        <Text style={styles.Text}>VEICULO: {data.veiculo.placa} </Text>
        {/* <Text style={styles.Text}>SERVICO: {data.servico.nome}</Text> */}
        <Text style={styles.Text}>VALOR: R${data.servico.valor}</Text>
        <Text style={styles.Text}>DATA DE ENTRADA: {formataData()}</Text>
      </View>
    </View>
  );
}
/* <Text>{data.id}</Text>
        <Text>{data.dataDeEntrada}</Text>
        <Text>{data.fk_Servico}</Text>
        <Text>{data.fk_Veiculo}</Text>
      <Text>{data.fk_Situacao}</Text>  */

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   flexDirection: "row",
  //   backgroundColor: "#fff",
  // },
  // acao: {
  //   width: "10%",
  //   justifyContent: "center",
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  // },
  // content: {
  //   height: 72,
  //   width: "90%",
  //   backgroundColor: "#fff",
  //   flexDirection: "column",
  //   justifyContent: "center",
  // },
  // expandir: {
  //   width: "90%",
  //   backgroundColor: "#fff",
  //   flexDirection: "column",
  // },
  // teste: {
  //   flexDirection: "row",
  //   margin: 5,
  // },
  // label: {
  //   width: "33.3%",
  //   flexDirection: "column",
  // },
  // title: {
  //   textAlign: "center",
  //   fontSize: 14,
  //   fontWeight: "bold",
  // },
  // subtitle: {
  //   fontSize: 12,
  //   textAlign: "center",
  // },

  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#191919",
    color: "white",
    marginBottom: 20,
  },
  Text: {
    color: "#000",
    fontSize: 14,
    margin: 1,
    marginTop: 2,
  },
  content: {
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    marginStart: 15,
    marginEnd: 15,
    padding: 5,
    borderRadius:10

  },
  title: {
    backgroundColor: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  textcadastrar: {
    color: "#fff",
    fontSize: 20,
    marginBottom: "-30%",
    marginTop: "-30%",
    justifyContent: "center",
    alignItems: "center",
  },
  viewtextcadastrar: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginTop: "10%",
  },
});
