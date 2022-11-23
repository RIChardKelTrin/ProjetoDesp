import { StyleSheet, Text, View } from "react-native"

export default function Header() {
    return (
        <View>
        <Text style={styles.textMarca}>Developed by ©LGR2022 Todos os direitos reservados.</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    textMarca:{
        marginTop: '3%',
        color: "#e0e0e0",
        fontSize: 10,
        justifyContent: 'center',
      }
})