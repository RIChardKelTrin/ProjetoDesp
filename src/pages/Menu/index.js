import React from "react";
import { StyleSheet} from 'react-native';
import Cliente from "../../Cliente/index";
import Logout from "../Menu/logout"
import Home from "../Home/index";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const {Navigator, Screen} = createBottomTabNavigator();


export default function Menu() {


   return (
            
          <Navigator style={styles.container}>
              <Screen style={styles.Screen}       
                  name="Home"
                  component={Home}
                  options={{ 
                    tabBarIcon: () =>{return <Ionicons name="home" size={24} color="black" />}
                  }}
                  />
                <Screen       
                  name="Clientes"
                  component={Cliente}
                  options={{ 
                    tabBarIcon: () =>{return <Ionicons name="person" size={24} color="black" />}
                  }}
                  />
                   <Screen       
                  name="Logout"
                  component={Logout}
                  options={{}={
                    tabBarIcon: () =>{return <Ionicons name="md-exit-sharp" size={35} color="black" />}
                  }}
                  />
                  </Navigator>

      );
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
  },

});