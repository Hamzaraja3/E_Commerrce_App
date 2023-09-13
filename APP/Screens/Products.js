import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { setProductData } from '../components/Action';
import { useDispatch } from 'react-redux';
import TabNavigation from '../components/TabNavigation';
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/EvilIcons';
import axios from 'axios';
const Products = ({navigation}) => {
  const [product, setproduct] = useState([])
  const [activeTab, setActiveTab] = useState('Products');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const dispatch = useDispatch();
  const Api_Product = 'https://dummyjson.com/products'
  useEffect(() => {
    Get_Products()
  }, [])
  useEffect(() => {
    const productData = product;
    dispatch(setProductData(productData));
    // console.log(setProductData(product))
  }, [product])
  const Get_Products = async () => {
    try {
      await axios.get(Api_Product)
        .then(response => {
          setproduct(response.data.products)
          // console.log(response.data)
        })

    } catch (error) {
      console.error('Error fetching All Products:', error);
      throw error;
    }
  };
  const onChangeSearch = (query) => {
    setSearchQuery(query);
    filterData(query);
  };
  const filterData = (query) => {
    const filtered = product.filter(
      (item) =>
        item.title &&
        item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filtered);
  };
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
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
    <ScrollView style={styles.container}>
      <View style={styles.mainMiddle}>
        <Text style={styles.middleheader}>Top Products</Text>
      </View>
      <Searchbar
        placeholder="Search Name"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchBox}
        icon={() => <Icon name="search" size={30} color="grey" />}
        clearIcon={searchQuery.length > 0 ? () => (
          <Icon
            name="close-o"
            size={20}
            color="grey"
            onPress={() => {
              setSearchQuery('');
              filterData('');
              
            }}
          />
        ) : undefined}

      />
      <View style={styles.productMain}>
        <FlatList
         data={searchQuery ? filteredData :product}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <TabNavigation activeTab={activeTab} onChangeTab={handleTabChange} />
    </ScrollView>

  )
}

export default Products
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: 'flex-start',
  },
  searchBox: { 
    borderRadius: 24,
    width: '90%',
    marginTop: 20,
    marginHorizontal:15,
    alignSelf:'center'
  },
  mainMiddle: {
    flexDirection: 'row',
    marginVertical: 10
  },
  middleheader: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    width: '45%',
    color: 'black',
    paddingHorizontal: 10
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