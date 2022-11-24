import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import api from "../../../Services/api";
import Header from "../../Components/Header";
import { NumberSchema } from "yup";
export default function Editar({ navigation }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      id: "",
      nome: "",
      valor: "",
    },
  });

  const handleSignIn = async (servico) => {
    console.log(servico);
    try {
      await api.EditServico(servico);
    } catch (erro) {
      console.log("Erro ao Editar ", erro);
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
              placeholder="ID"
              style={styles.borda}
              onChangeText={onChange}
              value={value}
              placeholderTextColor={"#fff"}
            />
          )}
          name="id"
        />

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="Nome Do Serviço"
              style={styles.borda}
              onChangeText={onChange}
              value={value}
              placeholderTextColor={"#fff"}
            />
          )}
          name="nome"
        />

        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, value } }) => (
            <TextInput
              placeholder="Valor Do Serviço"
              style={styles.borda}
              onChangeText={onChange}
              value={value}
              placeholderTextColor={"#fff"}
            />
          )}
          name="valor"
        />
      </View>

      <View style={styles.botoes}>
        <TouchableOpacity
          style={styles.Botao}
          onPress={() => navigation.navigate("Menu")}
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

  input: {},

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
