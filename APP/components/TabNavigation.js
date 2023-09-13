import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

const TabNavigation = ({ activeTab, onChangeTab}) => {
    const navigation = useNavigation();
    const tabs = [
        { id: 'Dashboard',  icon: 'home',screen:'Dashboard' },
        { id: 'Products', icon: 'collections-bookmark',screen:'Products' },
        { id: 'Cart', icon: 'add-shopping-cart',screen:'Cart' },
        { id: 'Profile', icon: 'person',screen:'Profile'},
      ];
  return (
    <View style={styles.container}>
    {tabs.map((tab) => (
      <TouchableOpacity
        key={tab.id}
        style={[styles.tab, activeTab === tab.id && styles.activeTab]}
        onPress={() => navigation.navigate(tab.screen)}
        
      >
        <Icon name={tab.icon} size={24} color={activeTab === tab.id ? '#e20001' : 'gray'} />
        <Text style={styles.tabLabel}>{tab.label}</Text>
      </TouchableOpacity>
    ))}
  </View>
  )
}

export default TabNavigation
const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: 'white',
      borderTopWidth: 1,
      borderTopColor: '#ddd',

    },
    tab: {
      flex: 1,
      alignItems: 'center',
      padding:10
 
    },
    activeTab: {
     
      borderTopLeftRadius:18,
      borderTopRightRadius:18
    },
    tabLabel: {
      fontSize: 12,
      color: 'gray',
      marginTop: 4,
    },
  });