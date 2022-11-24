import { StyleSheet, Text, View } from "react-native"
import * as Animatable from 'react-native-animatable'

export default function Header() {
    return (
        <View style={styles.container}>
            <Animatable.View delay={5
            } animation="fadeInUp"><Text style={styles.textLogo}>DESPFÁCIL</Text></Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 0,
        justifyContent: "center",
        alignItems: "center",
        marginTop:'5%'
    },
    textLogo: {
        fontSize: 50,
        fontWeight: "bold",
        color: "#E0E0E0",
        borderTopWidth: 3,
        borderBottomWidth: 3,
        borderTopColor: "#f00",
        borderBottomColor: "#f00",
        padding: 5
      }
})
