import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import TabNavigation from '../components/TabNavigation';
import axios from 'axios';
const Dashboard = ({ navigation }) => {
  const [category, setCategory] = useState([]);
  const [activeTab, setActiveTab] = useState('Dashboard');
  const Api_Categories = 'https://dummyjson.com/products/categories';
  const [selectCategory, setSelectCategory] = useState('')
  const handleCategoryPress = (selectedCategory) => {
    setSelectCategory(selectedCategory);
  };


  useEffect(() => {
    Get_Categories()
  }, [])
  const Get_Categories = async () => {
    try {
      await axios.get(Api_Categories)
        .then(response => {
          setCategory(response.data)
          console.log(response.data)
        })

    } catch (error) {
      console.error('Error fetching categories:', error);
      throw error;
    }
  };
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };
  const getImageForCategory = (category) => {
    switch (category) {
      case 'smartphones':
        return require('../assests/iphone.png');
      case 'laptops':
        return require('../assests/laptops.png');
      case 'fragrances':
        return require('../assests/perfume.png');
      case 'skincare':
        return require('../assests/skincare.png');
      case 'groceries':
        return require('../assests/grocery.png');
      case 'home-decoration':
        return require('../assests/decoration.png');
      case 'furniture':
        return require('../assests/furniture.png');
      case 'tops':
        return require('../assests/tops.png');
      case 'womens-dresses':
        return require('../assests/womendress.png');
      case 'womens-shoes':
        return require('../assests/womenshoes.png');
      case 'womens-dresses':
        return require('../assests/womendress.png');
      case 'mens-shoes':
        return require('../assests/mens.png');
      case 'mens-shirts':
        return require('../assests/shirts.png');
      case 'mens-watches':
        return require('../assests/menwatch.png');
      case 'womens-watches':
        return require('../assests/womenwatch.png');
      case 'womens-bags':
        return require('../assests/bag.png');
      case 'womens-jewellery':
        return require('../assests/tops.png');
      case 'sunglasses':
        return require('../assests/glasses.png');
      case 'automotive':
        return require('../assests/automotive.png');
      case 'motorcycle':
        return require('../assests/bike.png');
        case 'lighting':
        return require('../assests/light.png');
      default:
        return require('../assests/default.png');
    }
  };
  const renderItems = ({ item }) => (
    <View style={styles.itemlist}>
      <TouchableOpacity onPress={()=>navigation.navigate('Product',{Data:item})}>
      <Image
        source={getImageForCategory(item)}
        style={styles.categoryImage}
        resizeMode="contain"
      />
      <Text style={{color:'black',textAlign:'center',fontSize:18}}>{item}</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <ScrollView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.header1}>Good Morning</Text>
        <Text style={styles.header2}>M Hamza</Text>
        <View style={styles.imgContainer}>
          <Image source={require('../assests/profile.jpg')} style={styles.img} />
        </View>
        <View style={styles.categoryList}>
          <FlatList
            data={category}
            renderItem={renderItems}
            keyExtractor={(item) => item}
            numColumns={2}
            contentContainerStyle={styles.btnlist}
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
    paddingHorizontal: 10
  },
  header2: {
    textAlign: 'left',
    width: '85%',
    paddingVertical: 2,
    fontSize: 24,
    fontWeight: '800',
    fontFamily: 'Poppins-Regular',
    color: 'black',
    paddingHorizontal: 10
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
  filterContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    marginBottom: 10
  },
  btn: {
    margin: 4,
    borderRadius: 24,
    paddingVertical: 6,
    backgroundColor: '#000',
    marginBottom: 6


  },
  btnText: {
    textAlign: 'center',
    paddingVertical: 4,
    color: '#ffff',
    paddingHorizontal: 15,
  },
  categoryList: {
    width: '100%',
    margin: 4,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', 
  },
  categoryImage: {

    width: 130,
    height: 130,
  },
  itemlist: {
    margin: 10,
    borderRadius: 22,
    backgroundColor: '#f4f1f9',
    padding: 10,
    alignItems: 'center'
  }
});