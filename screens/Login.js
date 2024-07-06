import React, { useState } from "react";
import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
export default function Login() {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrap}>
        <Text style={styles.title}>Đăng nhập</Text>
        <Image
          source={require("../assets/images/logo.jpg")}
          style={styles.image}
        />
        <View style={styles.content}>
          <Text style={styles.span}>Tài Khoản</Text>
          <TextInput placeholder="Nhập tên đăng nhập" style={styles.input} />
          <Text style={styles.span}>Mật Khẩu</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              placeholder="Nhập mật khẩu"
              style={styles.passwordInput}
              secureTextEntry={!isPasswordVisible}
            />
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Icon
                name={isPasswordVisible ? "eye" : "eye-slash"}
                size={20}
                color="gray"
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 100,
  },
  wrap: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 50,
    marginBottom: 50,
  },
  content: {
    width: 300,
  },
  span: {
    fontSize: 15,
    fontWeight: "500",
    color: "gray",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#000",
    borderRadius: 5,
    marginBottom: 20,
    padding: 10,
  },
  passwordInput: {
    flex: 1,
  },
  button: {
    backgroundColor: "#000",
    color: "#fff",
    padding: 10,
    borderRadius: 10,
    textAlign: "center",
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
