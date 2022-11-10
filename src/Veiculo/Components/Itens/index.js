import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from "react-native";
import PopupAcao from "../PopupAcao";


export default function Itens({ data, navigation }) {
    let veiculo = data
    const [modelo, setModelo] = useState(veiculo.marcaModelo)
    const [trocarExibicao, setTrocarExibicao] = useState(true)

    const modeloSimplificado = () => {
        modelo.length > 13 ? setModelo(veiculo.marcaModelo.substring(0, 14)) : setModelo(veiculo.marcaModelo);

    }

    const callback = (valor) => setTrocarExibicao(valor)

    useEffect(() => {
        modeloSimplificado()
    }, [data]
    )

    return (
        <SafeAreaView style={styles.container}>
            <View style={(trocarExibicao ? styles.content : styles.expandir)}>
                {
                    trocarExibicao ?

                        <View style={styles.teste}>
                            <View style={styles.label}>
                                <Text style={styles.title}>Veículo:</Text>
                                <Text style={styles.subtitle}>{modelo}</Text>
                            </View>

                            <View style={styles.label}>
                                <Text style={styles.title}>Placa:</Text>
                                <Text style={styles.subtitle}>{veiculo.placa}</Text>
                            </View>

                            <View style={styles.label}>
                                <Text style={styles.title}>Renavam:</Text>
                                <Text style={styles.subtitle}>{veiculo.renavam}</Text>
                            </View>
                        </View>
                        :
                        <>

                            <View style={styles.teste}>
                                <View style={styles.label}>
                                    <Text style={styles.title}>Veículo:</Text>
                                    <Text style={styles.subtitle}>{veiculo.marcaModelo}</Text>
                                </View>

                                <View style={styles.label}>
                                    <Text style={styles.title}>Placa:</Text>
                                    <Text style={styles.subtitle}>{veiculo.placa}</Text>
                                </View>

                                <View style={styles.label}>
                                    <Text style={styles.title}>Renavam:</Text>
                                    <Text style={styles.subtitle}>{veiculo.renavam}</Text>
                                </View>
                            </View>

                            <View style={styles.teste}>
                                <View style={styles.label}>
                                    <Text style={styles.title}>Cor:</Text>
                                    <Text style={styles.subtitle}>{veiculo.cor}</Text>
                                </View>

                                <View style={styles.label}>
                                    <Text style={styles.title}>Ano:</Text>
                                    <Text style={styles.subtitle}>{veiculo.ano}</Text>
                                </View>

                                <View style={styles.label}>
                                    <Text style={styles.title}>Cliente:</Text>
                                    <Text style={styles.subtitle}>{veiculo.fk_Cliente}</Text>
                                </View>
                            </View>
                        </>
                }
            </View>
            <View style={styles.acao} >
                <PopupAcao navigation={navigation} veiculo={veiculo} detalhar={callback}/>
            </View>
        </SafeAreaView>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderBottomColor:0.5,
        borderBottomWidth:0.5
    },
    acao: {
        width: "10%",
        justifyContent: 'center',
        backgroundColor: "#fff",
        alignItems: "center"
    },
    content: {
        height:70,
        width: "90%",
        backgroundColor: "#fff",
        flexDirection: "column",
        justifyContent:"center"
    },
    expandir: {
        width: "90%",
        backgroundColor: "#fff",
        flexDirection: "column"
    },
    teste: {
        flexDirection: 'row',
        margin: 5,
    },
    label: {
        width: "33%",
        flexDirection: 'column',
    },
    title: {
        textAlign: "center",
        fontSize: 14,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 12,
        textAlign: "center",
    }

})