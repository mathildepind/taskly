import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme } from "../theme";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function IdeaScreen() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    return count !== 0 ? setCount(count - 1) : setCount(0);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Rows: {count}</Text>
      <View style={styles.buttonRow}>
        {/* <AntDesign name="pluscircleo" size={30} color={theme.colorCerulean} /> */}
        <AntDesign
          name="pluscircle"
          size={30}
          color={theme.colorCerulean}
          style={styles.iconButton}
          onPress={increment}
        />
        <MaterialCommunityIcons
          name="counter"
          size={44}
          color={theme.colorBlack}
        />
        <AntDesign
          name="minuscircle"
          size={30}
          color={theme.colorCerulean}
          onPress={decrement}
        />
      </View>
      {/* <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={increment}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={decrement}
        >
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View> */}
      <View>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={reset}
        >
          <Text style={styles.buttonText}>Reset counter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: theme.colorCerulean,
    padding: 16,
    borderRadius: 6,
    marginHorizontal: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: theme.colorWhite,
  },
  buttonRow: {
    flexDirection: "row",
    marginBottom: 24,
    justifyContent: "space-evenly",
  },
  iconButton: {
    // marginHorizontal: 20,
  },
});
