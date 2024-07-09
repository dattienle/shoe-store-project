import React, { useState , useEffect} from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function Category() {
  const [productData, setProductData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("NIKE");
  useEffect(() => {
    fetch("https://6335aa1fea0de5318a188910.mockapi.io/project")
      .then((response) => response.json())
      .then((data) => {
        setProductData(data);
      });
  });
  const filteredProductData = productData.filter(
    (product) => product.category === selectedCategory
  );
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Menu */}
      <View style={styles.menu}>
        {["NIKE", "MLB", "ADS", "VANS"].map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.menuItem,
              selectedCategory === category && styles.selected,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={[
                styles.menuText,
                selectedCategory === category && styles.selectedText,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Product */}
      {filteredProductData.map((product) => (
        <View key={product.id} style={styles.productContainer}>
          <View style={styles.boxImage}>
            <Image
              style={styles.productImage}
              source={{ uri: product.image }}
            />
          </View>
          <View style={styles.boxContent}>
            <Text style={styles.productName}>{product.name}</Text>
            {product.salePrice ? (
              <>
                <Text style={styles.productOriginalPrice}>
                  {product.originalPrice}
                </Text>
                <Text style={styles.productSalePrice}>{product.salePrice}</Text>
              </>
            ) : (
              <Text style={styles.productPrice}>{product.originalPrice}</Text>
            )}
            <View style={styles.sizes}>
              {product.sizes.map(
                (size) => (
                  <TouchableOpacity key={size} style={styles.size}>
                    <Text style={styles.sizeText}>{size}</Text>
                  </TouchableOpacity>
                )
              )}
            </View>
          </View>
        </View>
      ))}
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
  selectedText:{
    color: "#fff",
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
  productOriginalPrice: {
    fontSize: 16,
    color: "#888",
    textDecorationLine: "line-through",
    marginBottom: 5,
  },
  productSalePrice: {
    fontSize: 16,
    color: "red",
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
