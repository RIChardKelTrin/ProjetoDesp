import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Easing,
  Modal,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import Icon2 from "react-native-vector-icons/AntDesign";
import Icon3 from "react-native-vector-icons/MaterialIcons";

import Api from "../../Services/Api";

export default function PopupAcao({ navigation, veiculo, detalhar }) {
  const [visible, setVisible] = useState(false);
  const scale = useRef(new Animated.Value(0)).current;
  const [expandir, setExpandir] = useState(false);

  function resizeBox(to) {
    to === 1 && setVisible(true);
    Animated.timing(scale, {
      toValue: to,
      useNativeDriver: true,
      duration: 200,
      easing: Easing.linear,
    }).start(() => to === 0 && setVisible(false));
  }

  const ExcluirVeiculo = () => {
    Api.removerVeiculos(veiculo.id);
  };

  return (
    <>
      <TouchableOpacity
        style={{ flex: 1, justifyContent: "center" }}
        onPress={() => {
          resizeBox(1);
        }}
      >
        <Icon name={"dots-three-vertical"} size={20}></Icon>
      </TouchableOpacity>

      <Modal transparent visible={visible}>
          <SafeAreaView
            style={styles.container}
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
                style={styles.botao}
                onPress={() => {
                  setExpandir(!expandir), detalhar(expandir);
                }}
              >
                {expandir ? (
                  <>
                    <Text style={styles.texto}>Minimizar</Text>
                    <Icon3 name="compress" style={styles.texto}></Icon3>
                  </>
                ) : (
                  <>
                    <Text style={styles.texto}>Detalhar</Text>
                    <Icon3 name="expand" style={styles.texto}></Icon3>
                  </>
                )}
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.botao}
                onPress={() =>
                  navigation.navigate("Editar", {
                    veiculo: veiculo,
                  })
                }
              >
                <Text style={styles.texto}>Editar</Text>
                <Icon name="pencil" style={styles.texto} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.botao}
                onPress={() => {
                  ExcluirVeiculo();
                }}
              >
                <Text style={styles.texto}>Excluir</Text>
                <Icon2 name="delete" style={styles.texto}></Icon2>
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
    justifyContent:"center",
    alignItems:"center"
  },
  popup: {
    borderColor: "#333",
    borderWidth: 1,
    backgroundColor: "#ff0000",
    justifyContent: "center",
  },
  botao: {
    borderColor: "#000",
    borderWidth: 0.5,
    width: 120,
    height: 40,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  texto: {
    color: "#fff",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
 
});
