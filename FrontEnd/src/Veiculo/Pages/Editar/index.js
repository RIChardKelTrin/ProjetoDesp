import React, { Component, useEffect, useState } from "react";
import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useForm, Controller, set } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import Api from "../../Services/Api";

export default function Editar({ navigation, route }) {

    const [veiculo, setVeiculo] = useState(route.params.veiculo)
    const [modelo, setModelo] = useState(veiculo.marcaModelo)
    const [placa, setPlaca] = useState(veiculo.placa)
    const [ano, setAno] = useState(veiculo.ano)
    const [cor, setCor] = useState(veiculo.cor)
    const [renavam, setRenavam] = useState(veiculo.renavam)

    const schema = yup.object({
        modelo: yup.string().required("Informe a marca/modelo do veículo").max(40, "marca/modelo deve ter no máximo 40 caracteres"),
        placa: yup.string().required("Informa a placa do veículo").length(7, "A placa deve ter 7 caracteres").max(7, "A placa deve ter no máximo 7 caracteres")
        .matches((/[A-Za-z]{3}[0-9]{4}|[A-Za-z]{3}[0-9]{1}[A-Za-z]{1}[0-9]{2}/), "Placa inválida"),
        ano: yup.string().required("Informe o ano do veículo"),
        cor: yup.string().required("Informe a cor do veículo").matches(/\b[A-Za-zÀ-ú]{1,}\b/, "cor inválida"),
        renavam: yup.string().required("Informe o renavam do veículo").max(11, "O renavam deve ter no maximo 11 numeros")

    })
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues:{
            modelo: modelo,
            placa: placa,
            ano: ano,
            cor: cor,
            renavam: renavam
        },
        resolver: yupResolver(schema)
    })

    const put = async (car) => {
        try {
            
            veiculo.modelo = car.modelo.toUpperCase();
            veiculo.placa = car.placa.toUpperCase();
            veiculo.cor = car.cor.toUpperCase();
            veiculo.renavam = car.renavam
            veiculo.ano = car.ano

            await Api.editarVeiculo(veiculo)

        } catch (err) {
            return console.error('Erro ao transmitir dados: ' + err)
        }
        navigation.navigate('Listar')
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={"#191919"} />


            <View style={styles.content}>


                <Controller
                    control={control}
                    name="modelo"
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            style={errors.modelo ? styles.inputError : styles.input}
                            placeholder={"Modelo do veículo"}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                />
                {errors.modelo && <Text style={styles.labelError}>{errors.modelo?.message}</Text>}

                <Controller
                    control={control}
                    name="placa"
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            maxLength={7}
                            style={errors.placa ? styles.inputError : styles.input}
                            placeholder={"Placa do veículo"}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                />
                {errors.placa && <Text style={styles.labelError}>{errors.placa?.message}</Text>}

                <Controller
                    control={control}
                    name="ano"
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            style={errors.ano ? styles.inputError : styles.input}
                            placeholder={"Ano do veículo"}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                />
                {errors.ano && <Text style={styles.labelError}>{errors.ano?.message}</Text>}

                <Controller
                    control={control}
                    name="cor"
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            style={errors.cor ? styles.inputError : styles.input}
                            placeholder={"Cor do veículo"}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                />
                {errors.cor && <Text style={styles.labelError}>{errors.cor?.message}</Text>}

                <Controller
                    control={control}

                    name="renavam"
                    render={({ field: { onChange, value } }) => (
                        <TextInput
                            keyboardType="numeric"
                            style={errors.renavam ? styles.inputError : styles.input}
                            placeholder={"Renavam do veículo"}
                            onChangeText={onChange}
                            value={value}
                        />
                    )}
                />
                {errors.renavam && <Text style={styles.labelError}>{errors.renavam?.message}</Text>}

                <View style={styles.botoes}>
                    <TouchableOpacity style={styles.enviar} onPress={() => navigation.navigate('Listar')}>
                        <Text style={styles.nomeEnviar}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.enviar} onPress={handleSubmit(put)}>
                        <Text style={styles.nomeEnviar}>Salvar</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191919',
        alignContent: "center"
    },
    content: {
        margin: 20,
        justifyContent: "center",
        alignContent: "center",
    },
    input: {
        zIndex:99,
        backgroundColor:"#fff",
        width: "100%",
        height: 40,
        borderWidth: 1,
        marginEnd: 10,
        borderRadius: 5,
        paddingStart: 10,
        paddingEnd: 10,
        marginBottom: 10,
    },
    inputError: {
        zIndex:99,
        backgroundColor:" #fff",
        width: "100%",
        height: 40,
        borderColor: '#ff0000',
        borderWidth: 1,
        marginEnd: 10,
        borderRadius: 5,
        paddingStart: 10,
        paddingEnd: 10,
        color:'#fff'

    },
    nomeInput: {
        textAlign: "left",
        fontSize: 18,
        fontWeight: "bold",
        paddingBottom: 3
    },
    enviar: {
        backgroundColor: "#ff0000",
        width: 65,
        height: 35,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },
    nomeEnviar: {
        fontSize: 20,
        color: "#fff",
        fontWeight:"bold"

    },
    botoes: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginTop: 50
    },
    labelError: {
        alignSelf: 'flex-start',
        color: '#ff0000',
        marginBottom: 10
    }
})