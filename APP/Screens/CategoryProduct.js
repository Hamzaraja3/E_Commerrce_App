import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useRoute } from '@react-navigation/native';
const CategoryProduct = ({navigation}) => {
  const route=useRoute()
  const Api='https://dummyjson.com/products/category'
  const [product ,setproduct]=useState([])
  const Name=route.params.Data
  useEffect(() => {
    Get_Product()
  }, [])
  const Get_Product = async () => {
    try {
      await axios.get(`${Api}/${Name}`)
        .then(response => {
          setproduct(response.data.products)
          console.log(response.data)
        })

    } catch (error) {
      console.error('Error fetching Products:', error);
      throw error;
    }
  };
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Details', { Data: item.id })}>
        <Image source={{ uri: item.thumbnail }} style={styles.itemImage} />
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemTitle}>{item.brand}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
        <Text style={styles.itemPrice}>Price: ${item.price}</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      
      <View style={styles.productMain}>
        <FlatList
         data={product}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  )
}

export default CategoryProduct;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  categoryList: {
    height: 50,
    marginTop: 5,
  },
  itemContainer: {
    margin: 10,
    borderRadius: 8,
    backgroundColor: '#f4f1f9',
  },
  itemImage: {
    width: '100%',
    height: 120,
    resizeMode: 'contain',
    marginBottom: 10,
    borderRadius: 14
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    paddingHorizontal: 8
  },
  itemDescription: {
    fontSize: 14,
    padding: 4,
    color: 'black',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    paddingHorizontal: 8,
    paddingBottom: 4
  },
});