import { View, Text, StyleSheet, Image, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Icon from 'react-native-vector-icons/FontAwesome';
const Login = ({navigation}) => {
    const [text, setText] = useState('');
    const [password, setPassword] = useState('')

    return (
        <View style={styles.container}>
            <View style={styles.curvedBorder} />
            <Image source={require('../assests/logo.png')} style={styles.img} />
            <View style={styles.loginbox}>
                <Text style={styles.header}>SIGN IN</Text>
                <View >
                    <View style={styles.inputContainer}>
                        <Icon name="user" size={20} color="#888" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Username"
                            value={text}
                            onChangeText={(value) => setText(value)}
                        /></View>
                    <View style={styles.inputContainer}>
                        <Icon name="lock" size={20} color="#888" style={styles.icon} />
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            value={password}
                            onChangeText={(value) => setPassword(value)}
                            secureTextEntry={true}
                        /></View>
                </View>
                <TouchableOpacity><Text style={styles.forgot}>Forgot Password?</Text></TouchableOpacity>
                <View><TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('Dashboard')}><Text style={styles.loginbtn}>LOGIN</Text></TouchableOpacity></View>

                <View style={{ flexDirection: 'row', width: '100%', }}>
                    <Text style={styles.text}>Don't have an account? </Text>
                    <TouchableOpacity style={styles.signUpText}><Text style={styles.signUpText}>Sign up</Text></TouchableOpacity>
                </View></View>

        </View>
    )
}

export default Login
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'flex-start',
        backgroundColor:'#ffffff'
    },
    curvedBorder: {
        width: '100%',
        height: windowHeight * 0.5,
        backgroundColor: '#f4f1f9',
        borderBottomLeftRadius: 280, 
        position: 'absolute',

    },
    img: {
        width: '30%',
        height: '30%',
        alignSelf: 'center',
        zIndex: 3
    },
    loginbox: {
        width: '90%',
        height: '55%',
        marginTop: 60,
        shadowColor: "#000",
        shadowOffset: {
            width: '90%',
            height: '70%',
        },
        shadowOpacity: 0.20,
        shadowRadius: 5.62,
        elevation: 13,
        backgroundColor: '#f4f1f9',
        borderRadius: 16
    },
    header: {
        fontFamily: 'Poppins-Regular',
        textAlign: 'center',
        fontWeight: '800',
        fontSize: 18,
        paddingVertical: 10
    },
    inputContainer: {

        borderColor: '#888',
        borderRadius: 14,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 8,
        width: '85%',
        alignSelf: 'center',
        backgroundColor: '#fff', borderWidth: 1,
        borderColor: '#ccc'
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
    },
    forgot: {
        textAlign: 'right',
        width: '90%',
    },
    btn: {
        width: '40%',
        height: 40,
        backgroundColor: '#fff',
        alignSelf: 'center',
        margin: 14,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 16
    },
    loginbtn: {
        textAlign: 'center',
      paddingVertical:8
    },
    signUpText: {
        color: '#FF92C2',
        width: '100%',

    },
    text: {
        textAlign: 'right',
        width: '80%'
    }
});