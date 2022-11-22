import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  SafeAreaView,
  Animated,
  Easing,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/Entypo";
import Api from "../../Services/Api";

export default function Itens({ data }) {
  const [visible, setVisible] = useState(false);
  const [date, SetDate] = useState(data.dataDeEntrada);
  const [veiculo, setVeiculo] = useState(data.veiculo);
  const [cliente, setCliente] = useState(veiculo.cliente);
  const [servico, setServico] = useState(data.servico);
  const [situacao, setSituacao] = useState(data.situacaoSV);
  const scale = useRef(new Animated.Value(0)).current;

  const formataData = () => {
    let date2 = new Date(date),
      dia = (date2.getDate() + 1).toString(),
      diaF = dia.length == 1 ? "0" + dia : dia,
      mes = (date2.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
      mesF = mes.length == 1 ? "0" + mes : mes,
      anoF = date2.getFullYear();
    return diaF + "/" + mesF + "/" + anoF;
  };

  const put = async(situacaoID) =>{
    let sv = data
    sv.fk_Situacao = situacaoID
    await Api.EditaSituacaoSV(sv)
  }

  const defineCor = () => {
    switch (situacao.id) {
      case 1:
        return styles.ativo;
        break;
      case 2:
        return styles.finalizado;
        break;
      case 3:
        return styles.pendente;
        break;
      case 4:
        return styles.cancelado;
    }
  };

  function resizeBox(to) {
    to === 1 && setVisible(true);
    Animated.timing(scale, {
      toValue: to,
      useNativeDriver: true,
      duration: 200,
      easing: Easing.linear,
    }).start(() => to === 0 && setVisible(false));
  }

  return (
    <>
      <TouchableOpacity
        style={styles.container}
        onLongPress={() => resizeBox(1)}
      >
        <View style={styles.content}>
          <Text style={defineCor()}>{situacao.nome}</Text>
          <Ionicons name="calendar" size={14} style={styles.icon}>
            <Text style={styles.Text}> {formataData()}</Text>
          </Ionicons>
          <Ionicons name="body" size={14} style={styles.icon}>
            <Text style={styles.Text}> {cliente.nome}</Text>
          </Ionicons>
          <Ionicons name="car" size={14} color="red" style={styles.icon}>
            <Text style={styles.Text}> {veiculo.placa}</Text>
          </Ionicons>
          <Ionicons name="cash" size={14} color="green" style={styles.icon}>
            <Text style={styles.Text}> R${servico.valor}</Text>
          </Ionicons>
        </View>
      </TouchableOpacity>

      <Modal transparent visible={visible}>
        <SafeAreaView
          style={styles.containerModal}
          onTouchStart={() => resizeBox(0)}
        >
          <Animated.View
            style={[
              styles.popup,
              {
                transform: [{ scale }],
              },
            ]}
          >
            <TouchableOpacity
              style={[styles.botaoModal, { backgroundColor: "#008000" }]}
              onPress={() => put(1)}
            >
              <Text style={styles.textoModal}>ATIVO</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.botaoModal, { backgroundColor: "#006400" }]}
              onPress={() => put(2)}
            >
              <Text style={styles.textoModal}>FINALIZADO</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.botaoModal,{ backgroundColor: "#ffa500" }]}
              onPress={() =>put(3)}
            >
              <Text style={styles.textoModal}>PENDENTE</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.botaoModal}
              onPress={() => put(4)}
            >
              <Text style={styles.textoModal}>CANCELADO</Text>
            </TouchableOpacity>
          </Animated.View>
        </SafeAreaView>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#191919",
    color: "white",
    marginBottom: "5%",
    marginStart: "10%",
    marginEnd: "10%",
  },
  icon: {
    marginTop: 8,
  },
  Text: {
    color: "#000",
    fontSize: 14,
    textAlign: "center",
    fontWeight: "bold",
  },
  content: {
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    alignContent: "center",
    padding: 8,
    borderRadius: 4,
  },
  ativo: {
    backgroundColor: "#229a00",
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  finalizado: {
    backgroundColor: "#006400",
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  pendente: {
    backgroundColor: "#ffa500",
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  cancelado: {
    backgroundColor: "red",
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },

  containerModal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  popup: {
    borderColor: "#333",
    borderWidth: 1,
    backgroundColor: "#ff0000",
    justifyContent: "center",
  },
  botaoModal: {
    borderColor: "#000",
    borderWidth: 0.5,
    width: 120,
    height: 40,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  textoModal: {
    color: "#fff",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
