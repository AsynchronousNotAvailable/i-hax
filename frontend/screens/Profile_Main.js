import React from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const Profile = ({ navigation } ) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          source={require('../assets/wh.jpg')}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>Xin Jie</Text>
      </View>

      <View style={styles.whiteBackground}>
        <View style={styles.buttonRows}>
          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Language')}>
              <Text>Language Preferences</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Achievement')}>
              <Text>Achievements</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonRow}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Shop')}>
              <Text>Shop</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.buttonRows}>
        <Text style={styles.title}>Settings and Preferences</Text>
        <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}>
          <Text>Notifications</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button}>
          <Text>Security</Text>
        </TouchableOpacity>
        </View>
        </View>

        <View style={styles.buttonRows}>
        <Text style={styles.title}>Support</Text>
        <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Help Centre')}>
          <Text>Help Centre</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Report A Bug')}>
          <Text>Report a Bug</Text>
        </TouchableOpacity>
        </View>
        </View>

        <View style={styles.buttonRows}>
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutButtonText}>Log Out</Text>
        </TouchableOpacity>
      </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F5F9',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  profileName: {
    marginTop: 10,
    fontSize: 20,
  },
  whiteBackground: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: 10,
  },
  buttonRows: {
    margin: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    backgroundColor: '#EEECF6',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    alignItems: 'left',
  },
  title: {
    fontSize: 18,
    marginTop: 10,
  },
  logoutButton: {
    backgroundColor: 'red',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginTop: 5,
  },
  logoutButtonText: {
    color: '#EEECF6',
    fontSize: 18,
  },
});

export default Profile;
