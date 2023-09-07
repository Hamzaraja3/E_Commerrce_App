import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useRoute } from '@react-navigation/native';
import { Rating, AirbnbRating } from 'react-native-ratings';
import Count from '../components/Count';
import { useSelector } from 'react-redux';
import { addtoCart, removetoCart } from '../components/Action';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { SliderBox } from "react-native-image-slider-box";
const DetailProduct = () => {
    const [product, setproduct] = useState([])
    const [images, setImages] = useState([]);
    const Api_Product = 'https://dummyjson.com/products'
    useEffect(() => {
        Get_Products_by_id();
        console.log('cartItems details', cartItems)
    }, [cartItems])
    const route = useRoute();
    const id = route.params.Data;
    const count = useSelector((state) => state.counter[product.id] || 0);
    const cartItems = useSelector((state) => state.CartItems);
    const dispatch = useDispatch();
    const isInCart = cartItems[product.id];
    const Get_Products_by_id = async () => {
        try {
            await axios.get(`${Api_Product}/${id}`)
                .then(response => {
                    setproduct(response.data)
                    setImages(response.data.images);
                    console.log(response.data)
                })

        } catch (error) {
            console.error('Error fetching Product:', error);
            throw error;
        }
    };
    const handleCartButtonClick = () => {
        if (isInCart) {
            dispatch(removetoCart(product.id));
        } else {
            dispatch(addtoCart(product.id));
        }
    };
    // images={images.map((image) => ({ uri: image }))}
    return (
        <View style={styles.container}>
            <SliderBox

                images={images.map((image) => ({ uri: image }))}
                sliderBoxHeight={200}
                onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                dotColor="#FFEE58"
                inactiveDotColor="#90A4AE"
                paginationBoxVerticalPadding={20}
                autoplay
                resizeMethod={'resize'}
                resizeMode={'cover'}
              ImageComponentStyle={{ borderRadius: 15, width: '95%', marginTop: 5 }}

            />
            <View style={styles.DetailCard}>
            <View style={styles.discountContainer}>
          <Text style={styles.discountText}>{product.discountPercentage}% off</Text>
        </View>
                <View style={styles.header}>
                    <Text style={styles.headerText}>{product.title}</Text>
                    <Text style={styles.headerText2}>Price: ${product.price}</Text>
                </View>
                <Text style={styles.second}>({product.brand})</Text>
                <Text style={styles.second}>{product.category}</Text>
                <View style={styles.rating}>
                    <AirbnbRating
                        count={5}
                        defaultRating={product.rating}
                        size={20}
                        selectedColor="black"
                        showRating={false}
                    />
                    <Text style={{color:'black'}}>({product.rating} Rating)</Text>
                </View>
                <Text style={styles.description}>{product.description}</Text>
                <View style={styles.btncontainer}>
                    <Count productId={product.id} count={count} />
                    <TouchableOpacity style={styles.btn} onPress={handleCartButtonClick}>
                        <Text style={styles.btnText}>
                            {isInCart ? 'Remove from Cart' : 'Add to Cart'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default DetailProduct
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#ffffff',
      
    },
    DetailCard: {
       
        height: '70%',
        shadowColor: '#000',
        shadowOffset: {
            width: '90%',
            height: '70%',
        },
        shadowOpacity: 0.2,
        shadowRadius: 5.62,
        elevation: 13,
        backgroundColor: '#ffffff',
        borderRadius: 26,
        marginVertical:15,
        marginHorizontal:10,
        padding:5,
        
        justifyContent:'center'
    },
    discountContainer: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: '#F8BEAC', 
        padding: 5,
        borderRadius: 5,
      },
      discountText: {
        color: 'white',
        fontWeight: 'bold',
      },
    header: {
        flexDirection: 'row',
       justifyContent:"space-between",
        alignSelf: 'center',
    },
    headerText: {
        fontSize: 22,
        fontWeight: '900',
      width:"50%",
      color:'black'
    },
    headerText2: {
        fontSize: 22,
        fontWeight: '900',
        color:'black'
    },
    second: {
        width: '40%',
        fontSize: 16,
        textAlign: 'center',
        color:'black'
    },
    rating: {
        width: '60%',
        marginVertical: 10,
        flexDirection: 'row',
        marginHorizontal: 18,
    },
    description: {
        textAlign: 'auto',
        paddingHorizontal: 15,
        fontSize: 15,
        color:'black'
    },
 
    btncontainer: {
        flexDirection: 'row',
        marginVertical: 20,
    },
    btn: {
        width: '40%',
        height: '100%',
        borderRadius: 35,
        backgroundColor: 'black',
        marginHorizontal: 18,
    },
    btnText: {
        textAlign: 'center',
        fontSize: 18,
        color: 'white',
        paddingVertical: 10,
    },
 
});