import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../Screens/Splash';
import Login from '../Screens/Login';
import Signup from '../Screens/Signup';
import Dashboard from '../Screens/Dashboard';
import Products from '../Screens/Products';
import Cart from '../Screens/Cart';
import Profile from '../Screens/Profile';
import DetailProduct from '../Screens/DetailProduct';
import CategoryProduct from '../Screens/CategoryProduct';

const Stack = createNativeStackNavigator();

const Stacknavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown:false}}
        />
        <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
        <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown:false}} />
        <Stack.Screen name="Product" component={CategoryProduct}/>
        <Stack.Screen name="Products" component={Products} options={{headerShown:false}} />
        <Stack.Screen name="Cart" component={Cart} options={{headerShown:false}} />
        <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}} />
        <Stack.Screen name="Details" component={DetailProduct} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Stacknavigation