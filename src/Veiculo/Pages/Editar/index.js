import React, { Component, useEffect, useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useForm, Controller, set } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Api from "../../Services/Api";
import Header from "../../Components/Header";

export default function Editar({ navigation, route }) {
  const [veiculo, setVeiculo] = useState(route.params.veiculo);
  const [modelo, setModelo] = useState(veiculo.marcaModelo);
  const [placa, setPlaca] = useState(veiculo.placa);
  const [ano, setAno] = useState(veiculo.ano);
  const [cor, setCor] = useState(veiculo.cor);
  const [renavam, setRenavam] = useState(veiculo.renavam);

  const schema = yup.object({
    modelo: yup
      .string()
      .required("Informe a marca/modelo do veículo")
      .max(40, "marca/modelo deve ter no máximo 40 caracteres"),
    placa: yup
      .string()
      .required("Informa a placa do veículo")
      .length(7, "A placa deve ter 7 caracteres")
      .max(7, "A placa deve ter no máximo 7 caracteres")
      .matches(
        /[A-Za-z]{3}[0-9]{4}|[A-Za-z]{3}[0-9]{1}[A-Za-z]{1}[0-9]{2}/,
        "Placa inválida"
      ),
    ano: yup.string().required("Informe o ano do veículo"),
    cor: yup
      .string()
      .required("Informe a cor do veículo")
      .matches(/\b[A-Za-zÀ-ú]{1,}\b/, "cor inválida"),
    renavam: yup
      .string()
      .required("Informe o renavam do veículo")
      .max(11, "O renavam deve ter no maximo 11 numeros"),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      modelo: modelo,
      placa: placa,
      ano: ano,
      cor: cor,
      renavam: renavam,
    },
    resolver: yupResolver(schema),
  });

  const list = [
    {
      nome: "modelo",
      label: "Marca/Modelo:",
      ph: "Ex: Volksvagem Gol",
      maxSize: 40,
      error: errors.modelo,
    },
    {
      nome: "placa",
      label: "Placa:",
      ph: "Ex: ABC1234/ABC1C4",
      maxSize: 7,
      error: errors.placa,
    },
    {
      nome: "ano",
      label: "Ano Modelo/Fabricação:",
      ph: "Ex: 2012/2014",
      maxSize: 9,
      error: errors.ano,
    },
    {
      nome: "cor",
      label: "Cor:",
      ph: "Ex: Cinza",
      maxSize: 40,
      error: errors.cor,
    },
    {
      nome: "renavam",
      label: "Renavam:",
      ph: "Ex: 14239873457",
      maxSize: 11,
      error: errors.renavam,
    },
  ];

  const put = async (car) => {
    let cont = 0
    try {
      veiculo.modelo = car.modelo.toUpperCase();
      veiculo.placa = car.placa.toUpperCase();
      veiculo.cor = car.cor.toUpperCase();
      veiculo.renavam = car.renavam;
      veiculo.ano = car.ano;
      cont = await Api.editarVeiculo(veiculo);
    } catch (err) {
      return console.error("Erro ao transmitir dados: " + err);
    }
    if(cont == 0) return navigation.navigate("ListarVeiculos");
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {list.map((item) => {
          return (
            <>
              <Controller
                control={control}
                name={item.nome}
                render={({ field: { onChange, value } }) => (
                  <>
                    <Text style={styles.label}>{item.label}</Text>
                    <TextInput
                      maxLength={item.maxSize}
                      style={item.error ? styles.inputError : styles.input}
                      placeholderTextColor={"#fff"}
                      placeholder={item.ph}
                      onChangeText={onChange}
                      value={value}
                    />
                  </>
                )}
              />
              {item.error && (
                <Text style={styles.labelError}>{item.error?.message}</Text>
              )}
            </>
          );
        })}

        <View style={styles.botoes}>
          <TouchableOpacity
            style={styles.enviar}
            onPress={() => navigation.navigate("ListarVeiculos")}
          >
            <Text style={styles.nomeEnviar}>Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.enviar} onPress={handleSubmit(put)}>
            <Text style={styles.nomeEnviar}>Salvar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919",
    alignContent: "center",
  },
  content: {
    margin: 20,
    justifyContent: "center",
    alignContent: "center",
  },
  input: {
    zIndex: 99,
    width: "100%",
    height: 40,
    borderColor: "#fff",
    borderBottomWidth: 0.5,
    marginEnd: 10,
    paddingStart: 10,
    paddingEnd: 10,
    marginBottom: 10,
    color: "#fff",
  },
  inputError: {
    zIndex: 99,
    width: "100%",
    height: 40,
    borderColor: "#ff0000",
    borderBottomWidth: 0.5,
    marginEnd: 10,
    paddingStart: 10,
    paddingEnd: 10,
    color: "#fff",
  },
  nomeInput: {
    textAlign: "left",
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 3,
  },
  enviar: {
    backgroundColor: "#ff0000",
    width: 65,
    height: 35,
    borderRadius: 5,
    aligndatas: "center",
    justifyContent: "center",
    position: "relative",
  },
  nomeEnviar: {
    fontSize: 20,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  botoes: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 50,
  },
  labelError: {
    alignSelf: "flex-start",
    color: "#ff0000",
    marginBottom: 10,
  },
  label: {
    color: "#fff",
    fontSize: 18,
    marginBottom: 5,
    marginTop: 10,
  },
});
