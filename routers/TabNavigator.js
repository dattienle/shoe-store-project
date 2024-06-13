import React from "react";
import HomeNavigator from "./navigators/HomeNavigator";
import { Folder2, Home, Profile, ShoppingCart } from "iconsax-react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartNavigator from "./navigators/CartNavigator";
import CateNavigator from "./navigators/CateNavigator";
import InforNavigator from "./navigators/InforNavigator";

export default function TabNavigator() {
  const Tabs = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tabs.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Trang Chủ") {
              return (
                <Home
                  name="Home"
                  size={size}
                  color={focused ? "coral" : "#808080"}
                />
              );
            } else if (route.name === "Giỏ Hàng") {
              return (
                <ShoppingCart
                  name="Cart"
                  size={size}
                  color={focused ? "coral" : "#808080"}
                />
              );
            } else if (route.name === "Danh Mục") {
              return (
                <Folder2
                  name="Cart"
                  size={size}
                  color={focused ? "coral" : "#808080"}
                />
              );
            } else if (route.name === "Thông tin") {
              return (
                <Profile
                  name="Cart"
                  size={size}
                  color={focused ? "coral" : "#808080"}
                />
              );
            }
          },
        })}
      >
        <Tabs.Screen name="Trang Chủ" component={HomeNavigator} />
        <Tabs.Screen name="Danh Mục" component={CateNavigator} />
        <Tabs.Screen name="Giỏ Hàng" component={CartNavigator} />
        <Tabs.Screen name="Thông tin" component={InforNavigator} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}
