import React, { useState } from "react";

import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const WIDTH = Dimensions.get("window").width;
const HEIGHT = Dimensions.get("window").height;
const renderItem = ({ item, index }) => {
  const isEven = index % 2 === 0;

  const cardStyle = isEven ? styles.cardLeft : styles.cardRight;
  const discountStyle = isEven ? styles.discountLeft : styles.discountRight;
  const textCartStyle = isEven ? styles.textCartLeft : styles.textCartRight;
  return (
    <View style={cardStyle}>
      <View style={styles.imageCard}>
        <Image
          source={{ uri: item.image }}
          style={{ width: "100%", height: "100%" }}
          resizeMode="contain"
        />
      </View>

      <View style={textCartStyle}>
        <Text
          style={{
            textDecorationLine: "line-through",
            color: "#C1C1C1",
            textAlign: "center",
            fontWeight: "500",
          }}
        >
          {item.originalPrice}
        </Text>

        <Text style={styles.price}>{item.salePrice}</Text>
        <Text style={styles.nameShoes}>{item.name}</Text>
      </View>
      <View style={discountStyle}>
        <Text style={styles.saleNumber}>{item.discount}</Text>
        <Text style={styles.saleNumber}>OFF</Text>
      </View>
    </View>
  );
};
export default function Home() {
  const data = [
    {
      id: 1,
      image: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      id: 2,
      image: "https://picsum.photos/seed/picsum/200/300",
    },
    {
      id: 3,
      image: "https://picsum.photos/seed/picsum/200/300",
    },
  ];
  const productData = [
    {
      id: 1,
      image:
        "https://product.hstatic.net/200000475003/product/20_57a9cb8abcaf4092a55c23717350d673_master.png",
      discount: "20%",
      originalPrice: "3.700.000 đ",
      salePrice: "2.960.000 đ",
      name: "AIR JORDAN 1 RETRO HIGH",
    },
    {
      id: 2,
      image:
        "https://bizweb.dktcdn.net/100/446/974/products/giay-mlb-chinh-hang-bigball-chunky-la-dodgers-mau-trang-xanh-3ashc101n-07whs-2.jpg?v=1698930610557",
      discount: "30%",
      originalPrice: "1.700.000 đ",
      salePrice: "1.190.000 đ",
      name: "MLB BIG BALL CHUNKY MICKEY",
    },
    {
      id: 3,
      image:
        "https://product.hstatic.net/200000475003/product/990v6_c63a5ad9111446c983b52d9a1290ea9b_master.png",
      discount: "30%",
      originalPrice: "1.700.000 đ",
      salePrice: "1.190.000 đ",
      name: "New Balance 990v6 MiUSA Workwear Grey",
    },
    {
      id: 4,
      image: "https://picsum.photos/seed/picsum/200/300",
      discount: "30%",
      originalPrice: "1.700.000 đ",
      salePrice: "1.190.000 đ",
      name: "MLB BIG BALL CHUNKY MICKEY",
    },
    {
      id: 5,
      image: "https://picsum.photos/seed/picsum/200/300",
      discount: "30%",
      originalPrice: "1.700.000 đ",
      salePrice: "1.190.000 đ",
      name: "MLB BIG BALL CHUNKY MICKEY",
    },
    {
      id: 6,
      image: "https://picsum.photos/seed/picsum/200/300",
      discount: "30%",
      originalPrice: "1.700.000 đ",
      salePrice: "1.190.000 đ",
      name: "MLB BIG BALL CHUNKY MICKEY",
    },
  ];
  const [imgActive, setImgActive] = useState(0);
  onchange = (nativeEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width
      );
      if (slide !== imgActive) {
        setImgActive(slide);
      }
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrap}>
        <ScrollView
          onScroll={({ nativeEvent }) => onchange(nativeEvent)}
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          horizontal
          style={styles.wrap}
        >
          {data.map((item, index) => (
            <Image
              key={index}
              resizeMode="stretch"
              style={styles.wrap}
              source={{ uri: item.image }}
            />
          ))}
        </ScrollView>
        <View style={styles.wrapDot}>
          {data.map((e, index) => (
            <Text
              key={e.id}
              style={imgActive === index ? styles.dotActive : styles.dot}
            >
              ●
            </Text>
          ))}
        </View>
      </View>
      <View style={styles.card}>
        <FlatList
          data={productData}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrap: {
    width: WIDTH,
    height: HEIGHT * 0.2,
  },
  wrapDot: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
  },
  dotActive: {
    margin: 3,
    color: "black",
  },
  dot: {
    margin: 3,
    color: "#fff",
  },
  card: {
    width: WIDTH,

    marginBottom: 100,
    backgroundColor: "#F2F2F2",
  },
  listContainer: {
    // padding: 10,
    paddingBottom: 100,
  },
  imageCard: {
    width: 150,
    height: 100,
  },
  // làm đổ bóng cho card
  cardLeft: {
    position: "relative",
    flexDirection: "row",
    paddingVertical: 30,
    marginTop: 30,
    marginRight: 20,
    backgroundColor: "#fff",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 7,
  },
  cardRight: {
    position: "relative",
    flexDirection: "row-reverse",
    paddingVertical: 30,
    marginTop: 30,
    marginLeft: 20,
    backgroundColor: "#fff",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 7,
  },
  textCartLeft: {
    width: 200,
    textAlign: "center",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  textCartRight: {
    width: 200,
    textAlign: "center",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  discountRight: {
    position: "absolute",
    top: 20,
    left: 0,
    backgroundColor: "red",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
  },
  discountLeft: {
    position: "absolute",
    top: 20,
    right: 0,
    backgroundColor: "red",
    paddingLeft: 20,
    textAlign: "center",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  saleNumber: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
  },
  nameShoes: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
  },
  price: {
    fontWeight: "600",
    textAlign: "center",
    fontSize: 18,
  },
});
