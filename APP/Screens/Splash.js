import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import Login from '../Screens/Login'

const Splash = ({ navigation }) => {
    const [isComplete, setIsComplete] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login')
            setIsComplete(true)
        }, 2000);
    }, [])
    return (
        isComplete? 
        
        <Login/>
        :
        <View style={styles.container}>
            <View style={styles.centerContainer}>
                <Image
                    source={require('../assests/logo.png')}
                    style={styles.image}
                    resizeMode="contain"
                />
            </View>
        </View>
        
    )
}
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f4f1f9',

    },
    image: {
        width: windowWidth * 0.8,
        height: windowHeight * 0.95,
        alignSelf: 'center'
    },
});
export default Splash