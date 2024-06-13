import React from "react";
import Category from "../../screens/Category";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar, StyleSheet, View } from "react-native";
function CustomHeaderBackground() {
  return <View style={styles.headerBackground} />;
}
export default function CateNavigator() {
  const CateStack = createNativeStackNavigator();
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <CateStack.Navigator>
        <CateStack.Screen
          name="Cate"
          component={Category}
          options={{
            headerTitle: "Danh Mục",
            headerTitleAlign: "center",
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerBackground: () => <CustomHeaderBackground />,
          }}
        />
      </CateStack.Navigator>
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
