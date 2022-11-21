import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Listar from "./src/Pages/Listar";
import Editar from "./src/Pages/Editar";
import Cadastrar from "./src/Pages/Cadastrar";
import Listars from "./src/Pages/Listars";
import Deletar from "./src/Pages/Deletar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";



export default function App() {
  const Stack = createNativeStackNavigator();

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Listar"
            component={Listar}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Cadastrar"
            component={Cadastrar}
            options={{
              headerShown: false,
            }}
          />
          
          <Stack.Screen
            name="Editar"
            component={Editar}
            options={{
              headerShown: false,
            }}
          />

<Stack.Screen
            name="Listars"
            component={Listars}
            options={{
              headerShown: false,
            }}
          />

          
<Stack.Screen
            name="Deletar"
            component={Deletar}
            options={{
              headerShown: false,
            }}
          />

         
      </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
