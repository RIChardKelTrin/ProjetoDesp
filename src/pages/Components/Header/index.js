import { StyleSheet, Text, View } from "react-native"
import * as Animatable from 'react-native-animatable'

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.viewLogo}>
                <Animatable.View delay={20} animation="fadeInUp"><Text style={styles.textLogo}>DESPFÁCIL</Text></Animatable.View>
                <Animatable.View delay={20} animation="fadeInUp"><Text style={styles.textLogo2}>"FÁCIL E PRÁTICO"</Text></Animatable.View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: '-30%'
    },
    textLogo: {
        fontSize: 50,
        fontWeight: "bold",
        color: "#E0E0E0",
        borderTopWidth: 3,
        borderBottomWidth: 3,
        borderTopColor: "#f00",
        borderBottomColor: "#f00",
        padding: 20
    },
    textLogo2:{
        fontSize: 20,
        fontWeight: "bold",
        color: "#E0E0E0",
        borderTopColor: "#f00",
        borderBottomColor: "#f00",
        padding: 20,
        
      },
      viewLogo: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        marginTop: 30,
    
      },
})