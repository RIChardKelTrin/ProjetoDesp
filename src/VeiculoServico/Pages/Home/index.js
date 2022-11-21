import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Header from "../../../Veiculo/Components/Header";
import Itens from "../../Components/Itens";
import Search from "../../Components/Search";

export default function Home(){
    
    const[SVs, setSVs] = useState([]);

    const getSVs = (itens) => {
        setSVs(itens)
    }
    

    return(
        <View style={styles.container}>
            <Header/>
            <Search callback={getSVs}/>
            <FlatList
            data={SVs}
            keyExtractor={item => item.id}
            renderItem={({item}) => <Itens data={item}/>}
            />
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