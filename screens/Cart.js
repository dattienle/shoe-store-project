import React, { useState } from 'react';
import { FlatList, Text, View, Button, StyleSheet } from 'react-native';
import { loadCartItems, saveCartItems } from './asyncStorage'; 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemName: {
    fontSize: 18,
  },
  itemPrice: {
    fontSize: 16,
    color: '#aaa',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    paddingHorizontal: 5,
  },
  totalContainer: {
    alignItems: 'flex-end',
    marginTop: 20,
  },
  totalPrice: {
    fontSize: 18,
  },
});

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const removeItem = (item) => {
    const newCartItems = cartItems.filter((i) => i.id !== item.id);
    setCartItems(newCartItems);
    saveCartItems(newCartItems); // Save updated cart to AsyncStorage
  };

  const increaseQuantity = (item) => {
    setCartItems(
      cartItems.map((i) => (i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i))
    );
    saveCartItems(cartItems); // Save updated cart to AsyncStorage
  };

  const decreaseQuantity = (item) => {
    if (item.quantity > 1) {
      setCartItems(
        cartItems.map((i) => (i.id === item.id ? { ...i, quantity: item.quantity - 1 } : i))
      );
    } else {
      removeItem(item);
    }
    saveCartItems(cartItems); // Save updated cart to AsyncStorage
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handlePayment = () => {
    const totalPrice = getTotalPrice();
    navigation.navigate('Payment', { totalPrice }); 
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>${item.price}</Text>
      <View style={styles.quantityContainer}>
        <Button title="-" onPress={() => decreaseQuantity(item)} style={styles.quantityButton} />
        <Text>{item.quantity}</Text>
        <Button title="+" onPress={() => increaseQuantity(item)} style={styles.quantityButton} />
      </View>
    </View>
  );

  useEffect(() => {
    loadCartItems().then((items) => setCartItems(items)); // Load items on mount
  }, []);

  return (
    <View style={styles.container}>
      <Text>Giỏ Hàng</Text>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      {cartItems.length > 0 && (
        <View style={styles.totalContainer}>
          <Text style={styles.totalPrice}>Total: ${getTotalPrice()}</Text>
          <Button title="Thanh toán" onPress={handlePayment} />
        </View>
      )}
    </View>
  );
};

export default Cart;
