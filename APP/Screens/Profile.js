import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
     
      <View style={styles.header}>
        <Image
          source={require('../assests/profile.jpg')}
          style={styles.profileImage}
        />
        <Text style={styles.username}>Imane fh</Text>
        <Text style={styles.email}>imanefh28@gmail.com</Text>
        <View style={styles.rewardContainer}>
          <View style={styles.rewardchildContainer}>
            <Text style={styles.rewardText}>Reward Points</Text>
            <Text style={styles.pointText}>50</Text>
          </View>
          <View style={styles.rewardchildContainer}>
            <Text style={styles.rewardText}>Discount avail</Text>
            <Text style={styles.pointText}>40</Text>
          </View>
          <View style={styles.rewardchildContainer}>
            <Text style={styles.rewardText}>Bucket List</Text>
            <Text style={styles.pointText}>200</Text>
          </View>
        </View>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.detailItem}>
          <Icon name="user" size={20} color="#333" />
          <Text style={styles.detailText}>Edit Profile</Text>
          <TouchableOpacity><Icon name="angle-right" size={22} style={styles.iconNext} /></TouchableOpacity>
        </View>
        <View style={styles.detailItem}>
          <Icon name="cog" size={20} color="#333" />
          <Text style={styles.detailText}>Settings</Text>
          <TouchableOpacity><Icon name="angle-right" size={22} style={styles.iconNext} /></TouchableOpacity>
        </View>
        <View style={styles.detailItem}>
          <Icon name="bookmark" size={20} color="#333" />
          <Text style={styles.detailText}>Bookmarked</Text>
          <TouchableOpacity><Icon name="angle-right" size={22} style={styles.iconNext} /></TouchableOpacity>
        </View>
        <View style={styles.detailItem}>
          <Icon name="sign-out" size={20} color="#333" />
          <Text style={styles.detailText}>Log Out</Text>
          <TouchableOpacity><Icon name="angle-right" size={22} style={styles.iconNext} /></TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  username: {
    marginTop: 10,
    fontSize: 20,
    fontFamily: 'Poppins-Bold'
  },
  email: {
    color: '#888',
    marginTop: 5,
    fontFamily: 'Poppins-Regular'
  },
  detailsContainer: {
    marginTop: 20,
    backgroundColor: 'white',
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  detailText: {
    marginLeft: 15,
    fontSize: 16,
    color: '#333',
    fontFamily: 'Poppins-Regular',
    width: "85%"
  },
  rewardContainer: {
    flexDirection: 'row',

  },
  rewardchildContainer: {
    alignItems: 'center',
    marginHorizontal: 5,
    padding: 8,
    backgroundColor: '#F7F7F9',
    borderRadius: 12,
    width: '33%'
  },
  rewardText: {
    fontFamily: 'Poppins-Bold'
  },
  pointText: {
    fontFamily: 'Poppins-Bold',
    color: '#FF6421'
  },
  iconNext: {
    alignContent: 'flex-end',

  }
});

export default Profile;
