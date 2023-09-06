import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { increment, decrement } from './Action';

const Count = ({ productId, count }) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment(productId));
  };

  const handleDecrement = () => {
    if (count > 1) {
      dispatch(decrement(productId));
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={handleDecrement}>
        <Text style={styles.btnText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.txt}>{count}</Text>
      <TouchableOpacity style={styles.btn} onPress={handleIncrement}>
        <Text style={styles.btnText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};


export default Count;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 15,
        width:'45%'
      },
      btn:{
        width:30,
        height:30,
        borderRadius:35,
        borderWidth:1,
        borderColor:'black',
        backgroundColor:'black'
      },
      btnText:{
        textAlign:'center',
        fontSize:26,top:-5,
        color:'white'
      },
      txt:{
        fontSize:20,
        color:'black'
      }
});