import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text>Coffee</Text>
      </View>
      <View style={styles.itemContainer}>
        <Text>Tea</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  itemContainer: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderBottomColor: "#1a759f",
    borderBottomWidth: 1,
  },
  itemText: {
    fontSize: 18,
    fontWeight: "200",
  },
});
