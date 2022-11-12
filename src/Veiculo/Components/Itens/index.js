import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import PopupAcao from "../PopupAcao";

export default function Itens({ data, navigation }) {
  let veiculo = data;
  const [modelo, setModelo] = useState(veiculo.marcaModelo);
  const [trocarExibicao, setTrocarExibicao] = useState(true);

  const modeloSimplificado = () => {
    modelo.length > 13
      ? setModelo(veiculo.marcaModelo.substring(0, 14))
      : setModelo(veiculo.marcaModelo);
  };

  const callback = (valor) => setTrocarExibicao(valor);

  useEffect(() => {
    modeloSimplificado();
  }, [data]);

  const list1 = [
    {
      nome: "Modelo:",
      valor: modelo,
    },
    {
      nome: "Placa:",
      valor: veiculo.placa,
    },
    {
      nome: "Renavam:",
      valor: veiculo.renavam,
    },
  ];

  const list2 = [
    {
      nome: "Cor:",
      valor: veiculo.cor,
    },
    {
      nome: "Ano:",
      valor: veiculo.ano,
    },
    {
      nome: "Cliente",
      valor: veiculo.fk_Cliente,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={trocarExibicao ? styles.content : styles.expandir}>
        {trocarExibicao ? (
          <View style={styles.teste}>
            {list1.map((item) => {
              return (
                <View style={styles.label}>
                  <Text style={styles.title}>{item.nome}</Text>
                  <Text style={styles.subtitle}>{item.valor}</Text>
                </View>
              );
            })}
          </View>
        ) : (
          <>
            <View style={styles.teste}>
              {list1.map((item) => {
                return (
                  <View style={styles.label}>
                    <Text style={styles.title}>{item.nome}</Text>
                    <Text style={styles.subtitle}>{item.valor}</Text>
                  </View>
                );
              })}
            </View>

            <View style={styles.teste}>
              {list2.map((item) => {
                return (
                  <View style={styles.label}>
                    <Text style={styles.title}>{item.nome}</Text>
                    <Text style={styles.subtitle}>{item.valor}</Text>
                  </View>
                );
              })}
            </View>
          </>
        )}
      </View>
      <View style={styles.acao}>
        <PopupAcao
          navigation={navigation}
          veiculo={veiculo}
          detalhar={callback}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  acao: {
    width: "10%",
    justifyContent: "center",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  content: {
    height: 70,
    width: "90%",
    backgroundColor: "#fff",
    flexDirection: "column",
    justifyContent: "center",
  },
  expandir: {
    width: "90%",
    backgroundColor: "#fff",
    flexDirection: "column",
  },
  teste: {
    flexDirection: "row",
    margin: 5,
  },
  label: {
    width: "33.3%",
    flexDirection: "column",
  },
  title: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 12,
    textAlign: "center",
  },
});
