// ContactUsScreen.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ContactUsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchBar}>
          <Image source={require('../assets/magnifyglass.png')} style={styles.searchIcon} />
          <Text style={styles.searchText}>Search Rewards</Text>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Help Centre')}>
            <Text style={styles.buttonTextInactive}>FAQ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Contact Us</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.contactUsContent}>
        <Text style={styles.contactUsTitle}>NEED HELP?</Text>
        <Image source={require('../assets/phone_logo.png')} style={styles.phoneLogo} />
        <Text style={styles.contactUsText}>Reach out to us by dialing to this hotline:</Text>
        <Text style={styles.contactUsNumber}>1-300-888-333</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: 'white',
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#F6F4FF',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft: 10,
    marginRight:10,
  },
  searchIcon: {
    width: 20,
    height: 20,
  },
  searchText: {
    flex: 1,
    color: 'gray',
    marginLeft: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  button: {
    flex: 1,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#917FC5',
    padding: 10,
    borderBottomWidth: 5, 
    borderBottomColor: '#917FC5',
  },
  buttonTextInactive: {
    color: 'black',
    padding: 10,
  },
  contactUsContent: {
    padding: 20,
    alignItems: 'center',
  },
  contactUsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  phoneLogo: {
    width: 100,
    height: 170,
    marginVertical: 20,
  },
  contactUsText: {
    fontSize: 16,
  },
  contactUsNumber: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ContactUsScreen;
