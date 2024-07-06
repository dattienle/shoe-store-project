import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@cartItems';

export const loadCartItems = async () => {
  try {
    const value = await AsyncStorage.getItem(STORAGE_KEY);
    const parsedItems = value ? JSON.parse(value) : [];
    return parsedItems;
  } catch (error) {
    console.error('Error loading cart items:', error);
    return []; 
  }
};

export const saveCartItems = async (items) => {
  try {
    const jsonValue = JSON.stringify(items);
    await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
  } catch (error) {
    console.error('Error saving cart items:', error);
  }
};

export const addToCart = async (item) => {
    try {
      const existingItems = await loadCartItems();
  
      const existingItemIndex = existingItems.findIndex((i) => i.id === item.id);
      if (existingItemIndex !== -1) {
        existingItems[existingItemIndex].quantity += 1;
      } else {
        existingItems.push({ ...item, quantity: 1 });
      }
  
      await saveCartItems(existingItems);
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
};

export const removeAllCartItems = async () => {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY); 
    } catch (error) {
      console.error('Error removing all cart items:', error);
    }
  };
