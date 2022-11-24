import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Api from "../../../VeiculoServico/Services/Api";

export default function Escolhas({ data, callback }) {

  return (
    <TouchableOpacity style={styles.container} onPress={() => callback(data)}>
      <Text style={styles.sectionTitle}> ID: {data.id}</Text>
      <Text style={styles.sectionTitle}> Serviço: {data.nome}</Text>
      <Text style={styles.sectionTitle}> Valor: R${data.valor}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      width:"100%",
      justifyContent:"center",
      alignItems:"center",
      borderBottomWidth:1,
      borderColor:"#000",
      backgroundColor:"#fff",
      padding: 10,
      marginBottom:10,
      borderRadius: 8
    },
    sectionTitle: {
        fontWeight: 'bold',
        color: "#000",
        alignSelf: 'center',
     },
});
