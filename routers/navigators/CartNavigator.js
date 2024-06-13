import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Cart from "../../screens/Cart";
import { StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
function CustomHeaderBackground() {
  return <View style={styles.headerBackground} />;
}
export default function CartNavigator() {
  const CartStack = createNativeStackNavigator();

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <CartStack.Navigator>
        <CartStack.Screen
          name="Cart"
          component={Cart}
          options={{
            headerTitle: "Giỏ Hàng",
            headerTitleAlign: "center",
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerBackground: () => <CustomHeaderBackground />,
          }}
        />
      </CartStack.Navigator>
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
