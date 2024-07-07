import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function Category() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Menu */}
      <View style={styles.menu}>
        <TouchableOpacity style={[styles.menuItem, styles.selected]}>
          <Text style={(styles.menuText, styles.selected)}>NIKE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>MLB</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>ADS</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>VANS</Text>
        </TouchableOpacity>
      </View>

      {/* Product */}
      <View style={styles.productContainer}>
        <View style={styles.boxImage}>
          <Image
            style={styles.productImage}
            source={{
              uri: "https://censor.vn/wp-content/uploads/2021/12/1-giay-nike-air-force-1-low-gs-white-314192-117.jpeg",
            }}
          />
        </View>
        <View style={styles.boxContent}>
          <Text style={styles.productName}>AIR FORCE 1</Text>
          <Text style={styles.productPrice}>1.120.000 đ</Text>
          <View style={styles.sizes}>
            {["36", "37", "38", "39", "40", "41", "42", "43", "44"].map(
              (size) => (
                <TouchableOpacity key={size} style={styles.size}>
                  <Text style={styles.sizeText}>{size}</Text>
                </TouchableOpacity>
              )
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  menuItem: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: "#fff",
  },
  selected: {
    backgroundColor: "#000",
    color: "#fff",
    fontWeight: "bold",
  },
  menuText: {
    color: "#000",
    fontWeight: "bold",
  },
  productContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 40,
    // alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  boxImage: {
    width: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  boxContent: {
    width: "70%",
  },
  productImage: {
    width: 80,
    height: 80,
    objectFit: "contain",
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    color: "#888",
    marginBottom: 5,
  },
  sizes: {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "center",
    overflow: "hidden",
  },
  size: {
    padding: 2,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#000",
    margin: 5,
  },
  sizeText: {
    fontSize: 11,
  },
});
