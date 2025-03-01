import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Link, Stack } from "expo-router";
import { Pressable } from "react-native";
import { theme } from "../../theme";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Planner",
          headerRight: () => {
            return (
              <Link href="/planner/history" asChild>
                <Pressable hitSlop={20}>
                  <MaterialCommunityIcons
                    name="history"
                    size={32}
                    color={theme.colorGrey}
                  />
                </Pressable>
              </Link>
            );
          },
        }}
      />
      <Stack.Screen name="history" options={{ title: "History" }} />
    </Stack>
  );
}
