import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "react-native-vector-icons";
import { useNavigation } from '@react-navigation/native';

const Cabecalho = ({
  id,
  setId,
  solicitar,
}) => {
  return (
    <View style={styles.cabecalho}>
      <TextInput
        style={styles.input}
        placeholder="Digite o ID para pesquisar"
        autoCapitalize="none"
        autoCorrect={false}
        value={id}
        onChangeText={(value) => setId(value)}
        onSubmitEditing={() => {
          solicitar(id);
        }}
      />
      <Ionicons
        name="search"
        size={40}
        color="white"
        onPress={() => {
          solicitar(id);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cabecalho: {
    marginTop: '8%',
    width: '80%',
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 25,
    fontSize: 20,
    paddingHorizontal: 20,
  },
});

export default Cabecalho;