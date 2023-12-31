import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView,
    Image, ScrollView} from 'react-native';
import SignUpPage from './screens/sign_up_page';
import LoginPage from './screens/loginPage';
import FeatherIcon from 'react-native-vector-icons/Feather';
// import CountryPicker from 'react-native-country-picker-modal'


const RegionPage = ({ navigation }) => {
  const navigateToNextPage = () => {
    navigation.navigate('SelectLanguagePage'); // Navigate to the next page
  };
  const [selectedButton, setSelectedButton] = useState(null);
  const buttons = [require('../frontend/assets/malaysiaFlag.png')];
  const btn = require('../frontend/assets/malaysiaFlag.png');
  const handleButtonPress = (btn) => {
    if (btn === selectedButton) {
      // If the button is already selected, deselect it
      setSelectedButton(null);
    } else {
      // Otherwise, select the button
      setSelectedButton(btn);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
            onPress={() => navigation.navigate('GradePage')}
            style={styles.backBtn}>
            <FeatherIcon color="#000000" name="arrow-left" size={28} />
          </TouchableOpacity>
      <Text style={styles.Headertext}>
        Select Your Region
      </Text>
      <Text style={styles.text}>
        We will share with you the learning resources {'\n'}
        based on your location
      </Text>
      <View style={styles.Flagcontainer}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View >
          <TouchableOpacity 
          onPress={() => handleButtonPress(btn)}
          style={[
            styles.buttonss,
            {
              borderColor: selectedButton === btn ? '#6562F5' : 'transparent',
            },
          ]}>
            <Image
              source={require('../frontend/assets/malaysiaFlag.png')}
              style={styles.malaysiaFlag}/>
          </TouchableOpacity>
        </View>
          <Image 
           source={require('../frontend/assets/countryFlag.png')}/>  
      </ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate('SelectLanguagePage')} style={styles.progress}>
        <Image source={require('../frontend/assets/progress2.png')}></Image>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      // flex: 1,
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
      marginBottom: 20,
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
      marginBottom: 40,
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
    selected: {
      paddingVertical: 12,
      paddingHorizontal: 16,
      display: 'flex',
      alignItems: 'left',
      justifyContent: 'center',
      borderRadius: 12,
      marginBottom: 40,
      backgroundColor: '#ffffff',
      borderWidth: 2,
      borderColor: '#6562F5',
    },
    Flagcontainer: {
      //flex: 1,
      backgroundColor: 'white',
      height: 470,
      width: 350,
      left: 20,
      borderRadius: 12,
    },
    scrollContainer: {
      flexGrow: 1, // Allow the ScrollView to take up the entire space
    },
    progress: {
      top: 115,
      left: 278,
    },
    malaysiaFlag: {
      //left: 10,
      right: 25,
      marginTop: 5,
    },
    buttonss: {
      //padding: 10,
      //margin: 5,
      borderWidth: 2,
      backgroundColor: '#ffffff',
      //paddingVertical: 16,
        paddingHorizontal: 14,
        display: 'flex',
        alignItems: 'left',
        justifyContent: 'center',
        borderRadius: 12,
        marginBottom: 0,
        borderColor: '#ffffff',
        maxWidth: 330,
        left: 10,
        right: 15,
      },
  });

export default RegionPage;




