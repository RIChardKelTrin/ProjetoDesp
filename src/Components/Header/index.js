import { StatusBar, StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <>
      <StatusBar backgroundColor={"#191919"} />
      <View style={styles.container}>
        <View>
          <Text style={styles.textLogo}>DESPFÁCIL</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({  
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
  textLogo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#E0E0E0",
    borderTopWidth: 3,
    borderBottomWidth: 3,
    borderTopColor: "#f00",
    borderBottomColor: "#f00",
    padding: 5,
  },
});
