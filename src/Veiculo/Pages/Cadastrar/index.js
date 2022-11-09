import React from "react";
import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Api from "../../Services/Api";
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';
import { HttpStatusCode } from "axios";

export default function Cadastrar({ navigation }) {

    const schema = yup.object({
        modelo: yup.string().required("Informe a marca/modelo do veículo").min(5, "marca/modelo deve ter no mínimo 5 caracteres").max(40, "marca/modelo deve ter no máximo 40 caracteres"),
        placa: yup.string().required("Informa a placa do veículo").length(7, "A placa deve ter 7 caracteres").max(7, "A placa deve ter no máximo 7 caracteres")
            .matches((/[A-Za-z]{3}[0-9]{4}|[A-Za-z]{3}[0-9]{1}[A-Za-z]{1}[0-9]{2}/), "Placa inválida"),
        ano: yup.string().required("Informe o ano do veículo").max(9, "O ano de fabricação/modelo deve ter no máximo 11 caracteres"),
        cor: yup.string().required("Informe a cor do veículo").max(25, "Cor deve ter no máximo 25 caracteres").matches(/\b[A-Za-zÀ-ú]{1,}\b/, "cor inválida"),
        renavam: yup.string().required("Informe o renavam do veículo").max(11, "O renavam deve ter no máximo 11 números").matches(/[0-9]{1,}/, "Renavam inválido")

    })
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })

    const post = async (car) => {
        let cont = 0;
        try {
            car.modelo = car.modelo.toUpperCase();
            car.placa = car.placa.toUpperCase();
            car.cor = car.cor.toUpperCase();
            let cont2 = await Api.addVeiculos(car, cont);
            cont += cont2
        } catch (err) {
            cont++
            return alert('Erro ao transmitir dados: ' + err)
        }
        if(cont == 0) return navigation.navigate("Listar")          
            }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={"white"} />


            <View style={styles.content}>


                <Controller
                    control={control}
                    name="modelo"
                    render={({ field: { onChange, value } }) => (
                        <>
                            <Text style={styles.label}>Marca/Modelo:</Text>
                            <TextInput
                                maxLength={40}
                                style={errors.modelo ? styles.inputError : styles.input}
                                placeholderTextColor={"#fff"}
                                placeholder={"Ex: VOLKSWAGEN GOL"}
                                onChangeText={onChange}
                                value={value}
                            />
                        </>
                    )}
                />
                {errors.modelo && <Text style={styles.labelError}>{errors.modelo?.message}</Text>}

                <Controller
                    control={control}
                    name="placa"
                    render={({ field: { onChange, value } }) => (
                        <>
                            <Text style={styles.label}>Placa:</Text>
                            <TextInput
                                maxLength={7}
                                style={errors.placa ? styles.inputError : styles.input}
                                placeholder={"Ex: ABC1234/ABC1C4"}
                                placeholderTextColor={"#fff"}
                                onChangeText={onChange}
                                value={value}
                            />
                        </>
                    )}
                />
                {errors.placa && <Text style={styles.labelError}>{errors.placa?.message}</Text>}

                <Controller
                    control={control}
                    name="ano"
                    render={({ field: { onChange, value } }) => (
                        <>
                            <Text style={styles.label}>Ano Modelo/Fabricação:</Text>
                            <TextInput
                                style={errors.ano ? styles.inputError : styles.input}
                                maxLength={9}
                                placeholder={"Ex: 2010/2012"}
                                placeholderTextColor={"#fff"}
                                onChangeText={onChange}
                                value={value}
                            />
                        </>
                    )}
                />
                {errors.ano && <Text style={styles.labelError}>{errors.ano?.message}</Text>}

                <Controller
                    control={control}
                    name="cor"
                    render={({ field: { onChange, value } }) => (
                        <>
                            <Text style={styles.label}>Cor:</Text>
                            <TextInput
                                style={errors.cor ? styles.inputError : styles.input}
                                maxLength={40}
                                placeholder={"Ex: PRETO"}
                                placeholderTextColor={"#fff"}
                                onChangeText={onChange}
                                value={value}
                            />
                        </>
                    )}
                />
                {errors.cor && <Text style={styles.labelError}>{errors.cor?.message}</Text>}

                <Controller
                    control={control}
                    name="renavam"
                    render={({ field: { onChange, value } }) => (<>
                        <Text style={styles.label}>Renavam:</Text>
                        <TextInput
                            keyboardType="numeric"
                            maxLength={11}
                            style={errors.renavam ? styles.inputError : styles.input}
                            placeholder={"EX: 12345098121"}
                            placeholderTextColor={"#fff"}
                            onChangeText={onChange}
                            value={value}
                        />
                    </>
                    )}
                />
                {errors.renavam && <Text style={styles.labelError}>{errors.renavam?.message}</Text>}

                <View style={styles.botoes}>
                    <TouchableOpacity style={styles.enviar} onPress={() => navigation.navigate('Listar')}>
                        <Text style={styles.nomeEnviar}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.enviar} onPress={handleSubmit(post)}>
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
        alignContent: "center"
    },
    input: {
        zIndex: 99,
        width: "100%",
        height: 40,
        borderColor: '#fff',
        borderBottomWidth: 0.5,
        marginEnd: 10,
        paddingStart: 10,
        paddingEnd: 10,
        marginBottom: 10,
        color: "#fff"
    },
    inputError: {
        zIndex: 99,
        width: "100%",
        height: 40,
        borderColor: '#ff0000',
        borderBottomWidth: 0.5,
        marginEnd: 10,
        paddingStart: 10,
        paddingEnd: 10,
        color: "#fff"
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
        aligndatas: "center",
        justifyContent: "center",
        position: "relative",
    },
    nomeEnviar: {
        fontSize: 20,
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold"
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
    },
    label: {
        color: "#fff",
        fontSize: 18,
        marginBottom: 5,
        marginTop: 10
    }
})