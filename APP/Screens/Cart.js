import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { removetoCart } from '../components/Action';
import TabNavigation from '../components/TabNavigation';
const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.CartItems);
  const ProductData = useSelector(state => state.productData);
  const [totalPrice, setTotalPrice] = useState(0)
  const [activeTab, setActiveTab] = useState('Cart');
  useEffect(() => {
    console.log('cartItems:', cartItems);
    console.log('ProductData:', ProductData);
    const total = cartItemDetails.reduce((acc, item) => {
      const itemPrice = item.price || 0; 
      const itemCount = item.specificCount || 0; 
      return acc + itemPrice * itemCount;
    }, 0);
    setTotalPrice(total);
  }, [cartItemDetails]);
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };
  const cartItemDetails = Object.keys(cartItems).map(productId => {
    const product = ProductData.find(item => item.id === Number(productId));
    const quantityInCart = cartItems[productId];
    const specificCount = useSelector(state => state.counter[productId])|| 1;
    return { ...product, quantity: quantityInCart, specificCount };
  });
  const renderItem = ({ item }) => (
    <View style={styles.cartItemContainer}>
      <Image source={{ uri: item.thumbnail }} style={styles.itemImage} />
      <View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' ,width:'50%' }}>{item.title}</Text>
          <Text style={{ fontSize: 18, color: 'black' }}>({item.brand})</Text>
        </View>
        <Text>{item.category}</Text>
        <Text>Price: ${item.price}</Text>
        <Text>Quantity: {item.specificCount}</Text>
      </View>
    </View>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={cartItemDetails}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
        Total Price: ${totalPrice.toFixed(2)}
      </Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          Alert.alert(
            'Confirm Order',
            `Total Price: $${totalPrice.toFixed(2)}`,
            [
              {
                text: 'Cancel',
                style: 'cancel',
              },
              {
                text: 'Confirm',
                onPress: () => {
                },
              },
            ],
            { cancelable: false }
          );
        }}
      >
        <Text style={styles.btnText}>Confirm Order</Text>
      </TouchableOpacity>
      <TabNavigation activeTab={activeTab} onChangeTab={handleTabChange} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 15
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  cartItemContainer: {

    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginBottom: 10,
    justifyContent: 'space-evenly',
    width: '100%'
  },
  cartItemImage: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  btn: {
    backgroundColor: 'black',
    borderRadius: 20,
    marginVertical: 7,
    width: 150,
    alignSelf: 'center',
    marginBottom: 10
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
    padding: 8
  },
  itemImage: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
    marginBottom: 10,
    borderRadius: 14
  },
});

export default Cart;