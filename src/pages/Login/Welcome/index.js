import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';
import { Entypo  } from '@expo/vector-icons'; 


export default function App() {
    const navigation = useNavigation();
  return (
   
        
        <View style={styles.container}>
        <View style={styles.viewLogo}>
          <Animatable.View delay={600} animation="fadeInUp"><Text style={styles.textLogo}>DESPFÁCIL</Text></Animatable.View>
          <Animatable.View delay={600} animation="fadeInUp"><Text style={styles.textLogo2}>"FÁCIL E PRÁTICO"</Text></Animatable.View>

        </View>

    <Animatable.View delay={600} animation="fadeInUp" style={styles.Form}>
      <Text style={styles.titulo}>Bem-vindo Despachante!</Text>
      <Text style={styles.texto2}>"Vamos facilitar e agilizar tudo para você"</Text>
      <Text style={styles.texto}>Faça o Login para acessar!</Text>

      <TouchableOpacity style={styles.button} onPress={ () => navigation.navigate('Login')}>
        <Text style={styles.buttonacessar}>Acessar <Entypo name="login" size={17} color="#e0e0e0"/></Text>
      </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#191919'
  },
  logo:{
    flex:2,
    justifyContent:'center',
    alignItems:'center',
  },
  Form:{
    flex:1,
    backgroundColor:'white',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingStart: '14%',
    paddingEnd: '14%'
  },
  titulo:{
    textAlign:'center',
    color:'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: '10%',
    marginBottom: '6%',
    
  },
  texto:{
    marginTop: '8%',
    color:'rgb(195, 192, 201)',
    justifyContent:'center',
    textAlign:'center',
  },
  texto2:{
    fontSize: 16,
    color:'black',
    justifyContent:'center',
    textAlign:'center',
  },
  button:{
    position: 'absolute',
    backgroundColor: 'red',
    borderRadius: 2,
    paddingVertical: 8,
    width: '80%',
    alignSelf: 'center',
    bottom: '10%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonacessar:{
    fontSize: 18,
    color:'#e0e0e0',
    fontWeight: 'bold'
  },    
  textLogo: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#E0E0E0",
    borderTopWidth: 5,
    borderBottomWidth: 5,
    borderTopColor: "#f00",
    borderBottomColor: "#f00",
    padding: 10
  },
  viewLogo: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginTop: 30,

  },
  textLogo2:{
    fontSize: 20,
    fontWeight: "bold",
    color: "#E0E0E0",
    borderTopColor: "#f00",
    borderBottomColor: "#f00",
    padding: 20
  }
});