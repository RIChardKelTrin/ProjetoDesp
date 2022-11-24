import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import Header from "../../../Veiculo/Components/Header";
import Itens from "../../Components/Itens";
import Search from "../../Components/Search";

export default function Home(){
    
    const[SVs, setSVs] = useState([]);
    const [load, setLoad] = useState(true)
    const [semResposta, setSemResposta] = useState()

    const getSVs = (itens) => {
        setSemResposta(true)
        setSVs([])
        setTimeout(() => {setSVs(itens), setSemResposta(false)}, 1000)
        
    }

    const loadEdit = () =>{
        setLoad(!load)
    }
    
    return(
        <View style={styles.container}>
            <Header/>
            <Search callback={getSVs} loadEdit={load}/>
            {(SVs.length > 0) ?
            <FlatList
            data={SVs}
            keyExtractor={item => item.id}
            renderItem={({item}) => <Itens data={item} callback={loadEdit}/>}
            />
            :
            semResposta ?
            <ActivityIndicator size={40} color="#ff0000"/>
            :
            <Text style={styles.texto}>Nenhum SV encontrado!</Text>

            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignContent:"center",
        backgroundColor:"#191919",
        alignContent:"center"
    } ,   
    texto: {
        fontSize: 20,
        textAlign: 'center',
        color: '#f70b17'
    }
})