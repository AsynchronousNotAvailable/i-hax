import React from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Profile = ({ navigation, route }) => {
  const navigator = useNavigation();
  const { setAuthenticated } = route.params;

  const navigateToLoginPage = () => {
    navigator.navigate('LoginPage'); // Navigate to the LoginPage in Landing Stack
  };
  
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
        <View style={{ justifyContent: "center", width: "90%", left:20 }}>
          <View style={styles.buttonRows}>
          <Text style={styles.title}>General</Text>
            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Language')}>
                <Text style={{alignSelf: 'center', fontSize: 18, letterSpacing: 2}}>Language Preferences</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Achievement')}>
                <Text style={{alignSelf: 'center', fontSize: 18, letterSpacing: 2}}>Achievements</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.buttonRow}>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Shop')}>
                <Text style={{alignSelf: 'center', fontSize: 18, letterSpacing: 2}}>Shop</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.buttonRows}>
          <Text style={styles.title}>Settings and Preferences</Text>
          <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button}>
            <Text style={{alignSelf: 'center', fontSize: 18, letterSpacing: 2}}>Notifications</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button}>
            <Text style={{alignSelf: 'center', fontSize: 18, letterSpacing: 2}}>Security</Text>
          </TouchableOpacity>
          </View>
          </View>

          <View style={styles.buttonRows}>
          <Text style={styles.title}>Support</Text>
          <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Help Centre')}>
            <Text style={{alignSelf: 'center', fontSize: 18, letterSpacing: 2}}>Help Centre</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Report A Bug')}>
            <Text style={{alignSelf: 'center', fontSize: 18, letterSpacing: 2}}>Report a Bug</Text>
          </TouchableOpacity>
          </View>
          </View>

          <View style={styles.buttonRows}>
          <TouchableOpacity style={styles.logoutButton}  onPress={() => setAuthenticated(false)} >
            <Text style={styles.logoutButtonText}>Log Out</Text>
          </TouchableOpacity>
        </View>

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
    fontWeight: "bold"
  },
  whiteBackground: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 10,
    paddingVertical: 24,
    
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
    backgroundColor: '#E5E1F8',
    
    borderRadius: 10,
    padding: 20,
    margin: 5,
    alignItems: 'left',
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    
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
