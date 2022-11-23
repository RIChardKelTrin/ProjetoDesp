import { StyleSheet, Text, View } from "react-native";

export default function Item({ data }) {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}> ID: {data.id}</Text>
      <Text style={styles.sectionTitle}> Serviço: {data.nome}</Text>
      <Text style={styles.sectionTitle}> Valor: R${data.valor}</Text>
    </View>
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
      padding: 10
    },
    sectionTitle: {
        fontWeight: 'bold',
        color: "#000",
        alignSelf: 'center',
     },
});
