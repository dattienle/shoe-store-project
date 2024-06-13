import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Infor from "../../screens/Infor";
import { StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

function CustomHeaderBackground() {
  return <View style={styles.headerBackground} />;
}
export default function InforNavigator() {
  const InforStack = createNativeStackNavigator();
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <InforStack.Navigator>
        <InforStack.Screen
          name="Infomation"
          component={Infor}
          options={{
            headerTitle: "Cá nhân",
            headerTitleAlign: "center",
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerBackground: () => <CustomHeaderBackground />,
          }}
        />
      </InforStack.Navigator>
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
