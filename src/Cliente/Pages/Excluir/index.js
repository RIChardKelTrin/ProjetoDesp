import React, { useState, useEffect } from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, RefreshControlComponent } from "react-native";
import enviar from "../../Services/api";
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigation } from '@react-navigation/native';
import * as yup from 'yup';
import * as Animatable from 'react-native-animatable';


export default function Excluir() {

    const navigation = useNavigation();

    const [id, setId] = useState([])

    async function deletarCLiente() {
            let cont =0;
            await enviar.delete('/Cliente/' + id,
            {
              Id: id,
            })
            .then(response=>response) 
            .catch(erro => {
                if (cont == 0) {
                    console.log("Erro ID não existe")
                    cont++
                    return alert("Erro ID não existe!")
                } else {
                    cont++
                    console.log("Erro na conexão")
                    return alert("Erro ao excluir: " + erro)

                }
            })
            if(cont == 0) {
                console.log(cont)
                console.log("Cliente excluído com sucesso!"), alert("Cliente excluído com sucesso!")
                return navigation.navigate("Menu")
            }
    }



  


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={"white"} />
            <View style={styles.viewLogo}>
                <Animatable.View delay={5} animation="fadeInUp"><Text style={styles.textLogo}>DESPFÁCIL</Text></Animatable.View>
            </View>

            <View style={styles.viewtextexcluir}>
                <Text style={styles.textexcluir}>EXCLUIR UM CLIENTE:</Text>
            </View>

            <View style={styles.content}>

                <ScrollView>
                    <Text style={styles.label}>Qual ID do cliente você deseja excluir:</Text>
                    <TextInput
                        keyboardType="numeric"
                        minLength={1}
                        maxLength={4}
                        style={styles.input}
                        placeholderTextColor={"#fff"}
                        placeholder={"Ex: 1"}
                        onChangeText={text => setId(text)} value={id}
                    />


                </ScrollView>

                <View style={styles.botoes}>
                    <TouchableOpacity style={styles.enviar} onPress={() => navigation.navigate('Menu')}>
                        <Text style={styles.nomeEnviar}>Voltar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.enviar} onPress={() => deletarCLiente()}>
                        <Text style={styles.nomeEnviar}>Excluir</Text>
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
        margin: '3%',
        justifyContent: "center",
        alignContent: "center",
    },
    input: {
        zIndex: 99,
        width: "100%",
        height: '50%',
        borderColor: '#fff',
        borderBottomWidth: 1,
        marginEnd: 5,
        paddingStart: 2,
        paddingEnd: 10,
        marginBottom: '10%',
        color: "#fff"
    },
    enviar: {
        backgroundColor: "#ff0000",
        width: '40%',
        height: '50%',
        borderRadius: 2,
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
        fontSize: 60,
        fontWeight: "bold",
        color: "#E0E0E0",
        borderTopWidth: 5,
        borderBottomWidth: 5,
        borderTopColor: "#f00",
        borderBottomColor: "#f00",
        padding: 10
    },
    textexcluir: {
        color: "#fff",
        fontSize: 30,
        marginBottom: '-30%',
        marginTop: '-40%',
        justifyContent: "center",
        alignItems: "center",

    },
    viewtextexcluir: {
        flex: 0,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        marginTop: 10,

    },
    textTitulo2: {
        fontSize: 15,
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
        paddingBottom: 4,
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#E0E0E0",
        color: 'white',
        textAlign: 'center'

    }

})