import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView,
    Image, } from 'react-native';
import SignUpPage from './sign_up_page';
import LoginPage from './loginPage';
import FeatherIcon from 'react-native-vector-icons/Feather';

const LandingPage4 = ({ navigation }) => {
  const navigateToNextPage = () => {
    navigation.navigate('SignUpPage'); // Navigate to the next page
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
            onPress={() => navigation.navigate('LandingPage3')}
            style={styles.backBtn}>
            <FeatherIcon color="#000000" name="arrow-left" size={28} />
          </TouchableOpacity>
      <Text style={styles.Headertext}>
        Let's Start
      </Text>
        <Image
          // source={{ uri: '/Users/jacksheng/i-hax-frontend/assets/landingPage4.png' }}
          source={require('../assets/landingPage4.png')}
          style={styles.heroImage}
          resizeMode="contain"
        />
      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <Text style={styles.text}>
            Note: If you are a student, {"\n"}
            sign up using your school email account to access all {"\n"}
            school resources {"\n"}
          </Text>
        </View>
        <TouchableOpacity
              onPress={() => navigation.navigate('LoginPage')}>
              <View style={styles.button}>
                <Text style={[styles.buttonText, { color: 'white' }]}>Log In</Text>
              </View>
            </TouchableOpacity>
        <TouchableOpacity
              onPress={(navigation) => navigateToNextPage(navigation)}>
              <View style={[styles.button, styles.buttonEmpty]}>
                <Text style={[styles.buttonText]}>
                  Sign Up
                </Text>
              </View>
            </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center', // Center content vertically
      alignItems: 'stretch',
    },
    heroImage: {
      width: '100%',
      height: 380,
    },
    content: {
      flex: 1,
      justifyContent: 'space-between',
      paddingVertical: 24,
      paddingHorizontal: 24,
    },
    contentHeader: {
      paddingHorizontal: 24,
    },
    title: {
      fontSize: 28,
      fontWeight: '500',
      color: '#281b52',
      textAlign: 'center',
      marginBottom: 12,
      lineHeight: 40,
    },
    appName: {
      backgroundColor: '#fff2dd',
      transform: [
        {
          rotate: '-5deg',
        },
      ],
      paddingHorizontal: 6,
    },
    appNameText: {
      fontSize: 28,
      fontWeight: '700',
      color: '#281b52',
    },
    text: {
      fontSize: 15,
      lineHeight: 20,
      fontWeight: '400',
      color: '#000000',
      textAlign: 'center',
    },
    Headertext: {
      ontSize: 30,
      lineHeight: 30,
      fontWeight: '600',
      color: '#000000',
      textAlign: 'center',
      fontSize: 30,
      top: 20,
      margin: 10,
    },
    button: {
      paddingVertical: 12,
      paddingHorizontal: 16,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      marginBottom: 12,
      backgroundColor: '#6562F5',
      borderWidth: 2,
      borderColor: '#6562F5',
    },
    buttonEmpty: {
      backgroundColor: 'transparent',
      borderColor: '#6562F5',
    },
    buttonText: {
      fontSize: 16,
      fontWeight: '600',
      color: '#6562F5',
    },
    backBtn: {
      width: 40,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16,
      left: 20,
      top: 10,
    },
  });

export default LandingPage4;




