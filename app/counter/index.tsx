import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { theme } from "../../theme";
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

  const setStart = (value: string) => {
    const parsedValue = parseInt(value);
    setCount(isNaN(parsedValue) ? 0 : parsedValue);
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
          style={styles.iconButton}
        />
        <AntDesign
          name="minuscircle"
          size={30}
          color={theme.colorCerulean}
          onPress={decrement}
          style={styles.iconButton}
        />
      </View>
      <TextInput
        placeholder="Set start count"
        style={styles.textInput}
        keyboardType="number-pad"
        inputMode="numeric"
        returnKeyType="done"
        value={count.toString()}
        onChangeText={setStart}
      />
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
    alignItems: "center",
  },
  iconButton: {
    marginHorizontal: 10,
  },
  textInput: {
    borderColor: theme.colorLightGrey,
    borderWidth: 2,
    padding: 12,
    marginHorizontal: 12,
    marginBottom: 12,
    fontSize: 18,
    borderRadius: 50,
    backgroundColor: theme.colorWhite,
  },
});
