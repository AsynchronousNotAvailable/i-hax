import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView,
    Image, } from 'react-native';
import LoginPage from './screens/loginPage';
import SignUpPage from "./screens/sign_up_page";
import FeatherIcon from 'react-native-vector-icons/Feather';
import PrimaryGradePage from './primary_grade_page';

const GradePage = ({ navigation }) => {
  const navigateToNextPage = () => {
    navigation.navigate('SignUpPage'); // Navigate to the next page
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
            onPress={(navigation) => navigateToNextPage(navigation)}
            style={styles.backBtn}>
            <FeatherIcon color="#000000" name="arrow-left" size={28} />
          </TouchableOpacity>
      <Text style={styles.Headertext}>
        Which grade are you in?
      </Text>
      <View style={styles.content}>
        <TouchableOpacity
              onPress={() => navigation.navigate('PrimaryGradePage')}>
              <View style={styles.button}>
                <Text style={[styles.buttonText]}>Primary</Text>
              </View>
            </TouchableOpacity>
        <TouchableOpacity
              onPress={() => navigation.navigate('SecondaryGradePage')}>
              <View style={[styles.button]}>
                <Text style={[styles.buttonText]}>Secondary</Text>
              </View>
        </TouchableOpacity>
        <TouchableOpacity
              onPress={() => navigation.navigate('TertiaryGradePage')}>
              <View style={styles.button}>
                <Text style={[styles.buttonText]}>Tertiary</Text>
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
      //justifyContent: 'space-between',
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
      fontWeight: '400',
      color: '#000000',
      textAlign: 'center',
      fontSize: 25,
      top: 20,
      margin: 10,
      marginBottom: 70,
    },
    button: {
      paddingVertical: 12,
      paddingHorizontal: 16,
      display: 'flex',
      alignItems: 'left',
      justifyContent: 'center',
      borderRadius: 12,
      marginBottom: 12,
      backgroundColor: '#ffffff',
      borderWidth: 2,
      borderColor: '#ffffff',
    },
    buttonEmpty: {
      backgroundColor: 'transparent',
      borderColor: '#6562F5',
    },
    buttonText: {
      fontSize: 16,
      fontWeight: '400',
      color: '#000000',
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

export default GradePage;




