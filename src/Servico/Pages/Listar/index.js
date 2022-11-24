import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Header from "../../Components/Header";

export default function Listar({ navigation }) {
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("Editar")}
      >
        <Text style={styles.texto}>Editar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("CadastrarServico")}
      >
        <Text style={styles.texto}>Cadastrar</Text>
      </TouchableOpacity>
      
      
      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("ListarsServico")}>
        <Text style={styles.texto}>Listar</Text>
    </TouchableOpacity>
    
    <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("Deletar")}>
        <Text style={styles.texto}>Deletar</Text>
    </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor:"#191919"
  },
  content:{
    justifyContent:"center",
    marginTop: 200
  },
  botao: {
    height: 40,
    width: 100,
    backgroundColor: "#ff0000",
    justifyContent: "center",
    borderWidth:1,
    borderColor:"#191919"
  },
  texto: {
    color: "#fff",
    textAlign: "center",
    fontWeight:"bold"
  },
});
