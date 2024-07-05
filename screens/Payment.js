import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, Button, ScrollView } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 0,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  addressInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  textInputRow: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  textInputLabel: {
    fontSize: 16,
  },
  paymentContainer: {
    flexDirection: 'column',
    alignItems: 'left',
    marginBottom: 20,
  },
  paymentLogo: {
    width: 50,
    height: 50,
  },
  paymentText: {
    fontSize: 16,
    marginLeft: 10,
  },
  totalAmount: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  payButton: {
    backgroundColor: '#007bff', 
    padding: 15,
    height: 20,
  },
});
const PaymentPage = ({ totalPrice, onClose }) => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>Thông tin giao hàng</Text>
      <View style={styles.textInputRow}>
        <Text style={styles.textInputLabel}>Người nhận:</Text>
        <TextInput style={styles.addressInput} placeholder="Tên người nhận" />
      </View>
      <View style={styles.textInputRow}>
        <Text style={styles.textInputLabel}>Số điện thoại:</Text>
        <TextInput style={styles.addressInput} placeholder="Số điện thoại" keyboardType="phone-pad" />
      </View>
      <Text style={styles.sectionTitle}>Địa chỉ</Text>
      <View style={styles.textInputRow}>
        <Text style={styles.textInputLabel}>Số Nhà</Text>
        <TextInput style={styles.addressInput} placeholder="Số Nhà" />
      </View>
      <View style={styles.textInputRow}>
        <Text style={styles.textInputLabel}>Đường</Text>
        <TextInput style={styles.addressInput} placeholder="Đường" />
      </View>
      <View style={styles.textInputRow}>
        <Text style={styles.textInputLabel}>Phường/Xã:</Text>
        <TextInput style={styles.addressInput} placeholder="Phường/Xã" />
      </View>
      <View style={styles.textInputRow}>
        <Text style={styles.textInputLabel}>Quận/Huyện:</Text>
        <TextInput style={styles.addressInput} placeholder="Quận/Huyện" />
      </View>
      <View style={styles.textInputRow}>
        <Text style={styles.textInputLabel}>Tỉnh/Thành phố:</Text>
        <TextInput style={styles.addressInput} placeholder="Tỉnh/Thành phố" />
      </View>
      <Text style={styles.sectionTitle}>Phương thức thanh toán</Text>
      <View style={styles.paymentContainer}>
        <Image source={{uri: 'https://developers.momo.vn/v3/assets/images/icon-wthout-bgr-e4496e210dca9a7372ad1fe53d079e16.png'}}
               style={styles.paymentLogo}
               resizeMode="contain" />
        <Text style={styles.paymentText}>Ví MoMo</Text>
      </View>
      <View style={styles.paymentContainer}>
        <Text style={styles.totalAmount}>Tổng tiền: {totalPrice} ₫</Text>
        <Button title="Thanh toán" buttonStyle={styles.payButton} onPress={onClose}/>
      </View>
    </ScrollView>
  );
};

export default PaymentPage;
