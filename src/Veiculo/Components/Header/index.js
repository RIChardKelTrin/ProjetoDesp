import { StyleSheet, Text, View } from "react-native"
import * as Animatable from 'react-native-animatable'

export default function Header() {
    return (
        <View style={styles.container}>
            <View delay={600} animation="fadeInUp"><Text style={styles.textLogo}>DESPFÁCIL</Text></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: "center",
        alignItems: "center",
        paddingTop:20,
    },
    textLogo: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#E0E0E0",
        borderTopWidth: 3,
        borderBottomWidth: 3,
        borderTopColor: "#f00",
        borderBottomColor: "#f00",
        padding: 5
      }
})