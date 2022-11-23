import React from "react";
import { ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView } from "react-native";
import enviar from "../../Services/api";
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigation } from '@react-navigation/native';
import * as yup from 'yup';
import * as Animatable from 'react-native-animatable';


export default function Cadastro() {

    const navigation = useNavigation();

    const schema = yup.object({
        nome: yup.string().required("Digite seu nome completo!").min(6, "O nome deve ter no mínimo 6 caracteres").matches((/[A-Z][a-z]* [A-Z][a-z]*/), "Nome fora do formato, coloque ao menos o nome e sobrenome!").max(50, "O nome deve ter no máximo 40 caracteres"),
        rg: yup.string().required("Digite seu RG!").min(4, "O rg deve ter no mínimo 4 caracteres").max(15, "O rg deve ter no máximo 15 caracteres"),
        cpf: yup.string().required("Digite seu CPF!").min(11, "O CPF deve ter no 11 caracteres"),
        endereco: yup.string().required("Informe o seu endereço!").min(5, "O endereço deve ter no mínimo 5 caracteres").max(40, "Cor deve ter no máximo 40 caracteres").matches((/[A-Z][a-z]* [A-Z][a-z]*/), "Endereço fora do formato, coloque o nome da rua e o número!"),
        telefone: yup.string().required("Digite seu telefone!").max(11, "O renavam deve ter no máximo 11 números").matches((/[0-9]{2}[0-9]{9}|[0-9]{11}/), "Telefone fora do formato!"),

    })
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })


    const AddCliente = async (cliente) => {
                let cont = 0;
                await enviar.post("/Cliente", {
                nome: cliente.nome,
                cpf: cliente.cpf,
                rg: cliente.rg,
                endereco: cliente.endereco,
                telefone: cliente.telefone
            })
            .then(response=>response) 
            .catch(erro => {
                if (erro.toString().includes("403")) {
                    console.log("Erro CPF Duplicado")
                    cont++
                    return alert("CPF já cadastrado em outro cliente!")
                } else {
                    cont++
                    console.log("Erro na conexão")
                    return alert("Erro ao cadastrar: " + erro)

                }
            })
            if(cont == 0) {
                console.log(cont)
                console.log("Cadastrado com sucesso!"), alert("Cliente Cadastrado com sucesso!")
                return navigation.navigate("Menu");
            }
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={"white"} />
            <View style={styles.viewLogo}>
                <Animatable.View delay={5} animation="fadeInUp"><Text style={styles.textLogo}>DESPFÁCIL</Text></Animatable.View>
            </View>

            <View style={styles.viewtextcadastrar}>
            <Text style={styles.textcadastrar}>CADASTRAR CLIENTE</Text>
            </View>

            <View style={styles.content}>
            <ScrollView>
                <Controller
                    control={control}
                    name="nome"
                    render={({ field: { onChange, value } }) => (
                        <>
                            <Text style={styles.label}>Nome Completo:</Text>
                            <TextInput
                                maxLength={50}
                                style={errors.nome ? styles.inputError : styles.input}
                                placeholderTextColor={"#fff"}
                                placeholder={"Ex: Jose Carlos"}
                                onChangeText={onChange}
                                value={value}
                            />
                        </>
                    )}
                />
                {errors.nome && <Text style={styles.labelError}>{errors.nome?.message}</Text>}

                <Controller
                    control={control}
                    name="rg"
                    render={({ field: { onChange, value } }) => (
                        <>
                            <Text style={styles.label}>RG:</Text>
                            <TextInput
                                keyboardType="numeric"
                                maxLength={15}
                                style={errors.rg ? styles.inputError : styles.input}
                                placeholder={"Ex: 1234"}
                                placeholderTextColor={"#fff"}
                                onChangeText={onChange}
                                value={value}
                            />
                        </>
                    )}
                />
                {errors.rg && <Text style={styles.labelError}>{errors.rg?.message}</Text>}

                <Controller
                    control={control}
                    name="cpf"
                    render={({ field: { onChange, value } }) => (
                        <>
                            <Text style={styles.label}>CPF:</Text>
                            <TextInput
                                style={errors.cpf ? styles.inputError : styles.input}
                                keyboardType="numeric"
                                maxLength={11}
                                placeholder={"Ex: 12345678910"}
                                placeholderTextColor={"#fff"}
                                onChangeText={onChange}
                                value={value}
                            />
                        </>
                    )}
                />
                {errors.cpf && <Text style={styles.labelError}>{errors.cpf?.message}</Text>}

                <Controller
                    control={control}
                    name="endereco"
                    render={({ field: { onChange, value } }) => (
                        <>
                            <Text style={styles.label}>Endereço:</Text>
                            <TextInput
                                style={errors.endereco ? styles.inputError : styles.input}
                                maxLength={40}
                                placeholder={"Ex: AVENIDA DUQUE DE CAXIAS 4450"}
                                placeholderTextColor={"#fff"}
                                onChangeText={onChange}
                                value={value}
                            />
                        </>
                    )}
                />
                {errors.endereco && <Text style={styles.labelError}>{errors.endereco?.message}</Text>}

                <Controller
                    control={control}
                    name="telefone"
                    render={({ field: { onChange, value } }) => (<>
                        <Text style={styles.label}>Telefone:</Text>
                        <TextInput
                            keyboardType="numeric"
                            maxLength={11}
                            style={errors.telefone ? styles.inputError : styles.input}
                            placeholder={"EX: 43984000048"}
                            placeholderTextColor={"#fff"}
                            onChangeText={onChange}
                            value={value}
                        />
                    </>
                    )}
                />
                {errors.telefone && <Text style={styles.labelError}>{errors.telefone?.message}</Text>}
                </ScrollView>

                <View style={styles.botoes}>
                    <TouchableOpacity style={styles.enviar} onPress={() => navigation.navigate('Menu')}>
                        <Text style={styles.nomeEnviar}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.enviar} onPress={handleSubmit(AddCliente)}>
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
        height: '4%',
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
        width: '35%',
        height: '35%',
        borderRadius: 4,
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
        marginTop: 8
    },
    viewLogo: {
        flex: 0,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        marginTop: 30,

    },
    textLogo: {
        fontSize: 50,
        fontWeight: "bold",
        color: "#E0E0E0",
        borderTopWidth: 5,
        borderBottomWidth: 5,
        borderTopColor: "#f00",
        borderBottomColor: "#f00",
        padding: 10
    },
    textcadastrar:{
        color: "#fff",
        fontSize: 25,
        marginBottom: '-30%',
        marginTop: '-40%',
        justifyContent: "center",
        alignItems: "center",

    },
    viewtextcadastrar:{
        flex: 0,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        marginTop: 10,

    },
    
})