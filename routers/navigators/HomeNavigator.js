import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../../screens/Home";
import { StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

function CustomHeaderBackground() {
  return <View style={styles.headerBackground} />;
}
export default function HomeNavigator() {
  const HomeStack = createNativeStackNavigator();
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: "Trang Chủ",
            headerTitleAlign: "center",
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerBackground: () => <CustomHeaderBackground />,
          }}
        />
      </HomeStack.Navigator>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  headerBackground: {
    flex: 1,
    backgroundColor: "#000",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
});
