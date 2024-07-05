import React, { useState } from 'react';
import { FlatList, Text, View, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { loadCartItems, saveCartItems } from '../asyncStorage'; 
import { Icon } from 'react-native-elements'
import PaymentPage from './Payment';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 50,
  },
  container: {
    flexDirection: "row",
    backgroundColor: "#f4f4f4",
    borderRadius: 5,
    padding: 10,
    alignItems: "center" // Vertical alignment
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10
  },
  textContainer: {
    flex: 1
  },
  productName: {
    fontWeight: "bold",
    fontSize: 16
  },
  price: {
    color: "#888",
    fontSize: 14
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center", // Align buttons vertically
    marginTop: 20
  },
  quantityButton: {
    width: 100,
    color: "#888",
    paddingHorizontal: 5 // Adjust spacing as needed
  },
  sizeText: {
    alignItems: "center",
    fontSize: 14,
    color: "#888",
    marginTop: 5 // Spacing between image and size text
  },
  deleteIconContainer: {
    marginLeft: 10 // Spacing between buttons and delete icon
  },
  deleteIcon: {
    color: "#f00",
    fontSize: 20
  },
  totalContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    marginTop: 20,
    marginRight: 10,
  },
  totalPrice: {
    fontSize: 18,
  },
  paymentModal: {
    flex: 1, 
    width: '100%',
    justifyContent: 'center', 
    alignItems: 'left', 
    padding: 0,
    margin: 0,
  },  
});

const Cart = () => {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [totalPrice, setTotalPrice] = useState([]);
  // const [cartItems, setCartItems] = useState([]);

  // const removeItem = (item) => {
  //   const newCartItems = cartItems.filter((i) => i.id !== item.id);
  //   setCartItems(newCartItems);
  //   saveCartItems(newCartItems); // Save updated cart to AsyncStorage
  // };

  // const increaseQuantity = (item) => {
  //   setCartItems(
  //     cartItems.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i))
  //   );
  //   saveCartItems(cartItems); // Save updated cart to AsyncStorage
  // };

  // const decreaseQuantity = (item) => {
  //   if (item.quantity > 1) {
  //     setCartItems(
  //       cartItems.map((i) => (i.id === item.id ? { ...i, quantity: item.quantity - 1 } : i))
  //     );
  //   } else {
  //     removeItem(item);
  //   }
  //   saveCartItems(cartItems); // Save updated cart to AsyncStorage
  // };

  // const getTotalPrice = () => {
  //   return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  // };

  const handlePayment = () => {
    // const totalPrice = getTotalPrice();
    setTotalPrice(20000);
    setIsPaymentModalOpen(true);
  };

  // const renderItem = ({ item }) => (
  //   <View style={styles.item}>
  //     <Text style={styles.itemName}>{item.name}</Text>
  //     <Text style={styles.itemPrice}>${item.price}</Text>
  //     <View style={styles.quantityContainer}>
  //       <Button title="-" onPress={() => decreaseQuantity(item)} style={styles.quantityButton} />
  //       <Text>{item.quantity}</Text>
  //       <Button title="+" onPress={() => increaseQuantity(item)} style={styles.quantityButton} />
  //     </View>
  //   </View>
  // );

  // useEffect(() => {
  //   loadCartItems().then((items) => setCartItems(items)); // Load items on mount
  // }, []);

  // return (
  //   <View style={styles.container}>
  //     <FlatList
  //       data={cartItems}
  //       renderItem={renderItem}
  //       keyExtractor={(item) => item.id}
  //     />
  //     {cartItems.length > 0 && (
  //       <View style={styles.totalContainer}>
  //         <Text style={styles.totalPrice}>Total: {getTotalPrice()} ₫</Text>
  //         <Button title="Thanh toán" onPress={handlePayment} />
  //       </View>
  //     )}
  //   </View>
  // );

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View>
        <Image
          source={{
            uri: item.image
          }}
          style={styles.image}
          resizeMode="cover"
        />
        <Text style={styles.sizeText}>Size: {item.size}</Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.productName}>{item.name}</Text>
        <Text style={styles.price}>{item.price} ₫</Text>
        <View style={styles.quantityContainer}>
          <Button title="-" style={styles.quantityButton} />
          <Text style={{ marginHorizontal: 10 }}>{item.quantity}</Text>
          <Button title="+" style={styles.quantityButton} />
        </View>
      </View>

      <View style={styles.deleteIconContainer}>
        <TouchableOpacity>
          <Icon name="delete" style={styles.deleteIcon}>
            Delete
          </Icon>
        </TouchableOpacity>
      </View>
    </View>
  );

  const cartItems = [
    {
      "id": "1", 
      "name": "Nike shoes",
      "price": "12",
      "image": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7fb3501a-ed53-422a-a454-1bf116a13324/impact-4-basketball-shoes-CcJxBx.png",
      "size": '43',
      "quantity": 1
    }
  ]

  return (
    <View style={styles.container}>
      {isPaymentModalOpen ? (
        <View style={styles.paymentModal}>
          <PaymentPage totalPrice={totalPrice} onClose={() => setIsPaymentModalOpen(false)} />
        </View>
      ) : (
        <>
          <FlatList
            data={cartItems}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
          {cartItems.length > 0 && (
            <View style={styles.totalContainer}>
              <Text style={styles.totalPrice}>Total: {} ₫</Text>
              <Button title="Thanh toán" onPress={handlePayment} />
            </View>
          )}
        </>
      )}
    </View>
  );  
};

export default Cart;
