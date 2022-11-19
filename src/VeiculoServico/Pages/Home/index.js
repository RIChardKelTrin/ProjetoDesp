import { StatusBar, StyleSheet, View } from "react-native";
import Header from "../../../Veiculo/Components/Header";
import Search from "../../Components/Search";

export default function Home(){
    return(
        <View style={styles.container}>
            <Header/>
            <Search/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignContent:"center",
        backgroundColor:"#191919"
    }
})