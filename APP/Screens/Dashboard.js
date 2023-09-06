import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/EvilIcons';
import TabNavigation from '../components/TabNavigation';
import { setProductData } from '../components/Action';
import { useDispatch } from 'react-redux';
import axios from 'axios';
const Dashboard = ({ navigation }) => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [category, setCategory] = useState([]);
  const [product, setproduct] = useState([])
  const [activeTab, setActiveTab] = useState('Dashboard');
  const Api_Categories = 'https://dummyjson.com/products/categories';
  const Api_Product = 'https://dummyjson.com/products'
  const [visible, setVisible] = useState(false)
  const [selectCategory, setSelectCategory] = useState('')
  const handleCategoryPress = (selectedCategory) => {
    setSelectCategory(selectedCategory);
  };

  const handleSearch = () => {
    setVisible(true)
  }
  useEffect(() => {
    Get_Categories()
    Get_Products()
  }, [])
  useEffect(()=>{
    const productData = product; 
    dispatch(setProductData(productData));
    console.log(setProductData(product))
  },[product])
  const Get_Categories = async () => {
    try {
      await axios.get(Api_Categories)
        .then(response => {
          setCategory(response.data)
          // console.log(response.data)
        })

    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  };
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
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
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
  const renderItems = ({ item }) => (
    <TouchableOpacity style={[
      styles.btn,
      {
        backgroundColor:
          selectCategory === item ? 'red' : 'black',
      },
    ]}
      onPress={() => { handleCategoryPress(item); handleSearch(); }}>

      <Text style={styles.btnText}>{item}</Text>
    </TouchableOpacity>
  );
  const filteredProducts =
    selectCategory === ''
      ? product
      : product.filter((item) => item.category === selectCategory);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.header1}>Good Morning</Text>
        <Text style={styles.header2}>M Hamza</Text>
        <View style={styles.imgContainer}>
          <Image source={require('../assests/profile.jpg')} style={styles.img} />
        </View>
        {visible && <Searchbar
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
                setVisible(false)
              }}
            />
          ) : undefined}

        />}
        <View style={styles.categoryList}>
          <FlatList
            data={category}
            renderItem={renderItems}
            keyExtractor={(item) => item}
            horizontal={true}
            contentContainerStyle={styles.btnlist}
          />
        </View>
        <View style={styles.mainMiddle}>
          <Text style={styles.middleheader}>Top Products</Text>
          <TouchableOpacity style={styles.middleheader2} onPress={Get_Products}><Text style={styles.textShow}>Show All</Text></TouchableOpacity>
        </View>
        <View style={styles.productMain}>
          <FlatList
            data={searchQuery ? filteredData : filteredProducts}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
        <TabNavigation activeTab={activeTab} onChangeTab={handleTabChange} />
      </View>
    </ScrollView>
    
  )
}

export default Dashboard
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  innerContainer: {

    // alignItems: 'center',
    justifyContent: 'flex-start',
   
  },
  header1: {
    textAlign: 'left',
    width: '70%',
    paddingVertical: 20,
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Poppins-Regular',
    marginTop: 20,
    color: 'black',
    paddingHorizontal:10
  },
  header2: {
    textAlign: 'left',
    width: '85%',
    paddingVertical: 2,
    fontSize: 24,
    fontWeight: '800',
    fontFamily: 'Poppins-Regular',
    color: 'black',
    paddingHorizontal:10
  },
  imgContainer: {
    position: 'absolute',
    width: '90%', alignSelf: 'center',
    marginVertical: 40
  },
  img: {
    width: 60,
    height: 60,
    alignSelf: 'flex-end',
  },
  searchBox: {
    backgroundColor: '#f4f1f9',
    borderRadius: 24,
    width: '90%',
    marginTop: 20,
    marginHorizontal:15
  },
  filterContainer: {
    flexDirection: 'row',
  marginVertical:10,
  marginBottom:10
  },
  btn: {
  margin:4,
    borderRadius: 24,
    paddingVertical: 6,
    backgroundColor: '#000',
    marginBottom:6


  },
  btnText: {
    textAlign: 'center',
    paddingVertical: 4,
    color: '#ffff',
    paddingHorizontal: 15,
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
    paddingHorizontal:10
  },
  middleheader2: {
    width: '50%',
  
  },
  textShow: {
    textAlign: 'right',
    paddingVertical: 5,
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color:'red',
    
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