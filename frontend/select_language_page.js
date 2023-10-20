import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView,
    Image, } from 'react-native';
import SignUpPage from './screens/sign_up_page';
import LoginPage from './screens/loginPage';
import FeatherIcon from 'react-native-vector-icons/Feather';
import InterestPage from './interestPage';

const SelectLanguagePage = ({ navigation }) => {
  const navigateToNextPage = () => {
    navigation.navigate('InterestPage'); // Navigate to the next page
  };
  const [selectedButton, setSelectedButton] = useState(null);
  const buttons = ['English', 'Melayu', '简体中文', 'हिन्दी (Hindi)', 'Deutsch', 'Français', 'Italiano', 'Nederlands', 'Español' ];
  const handleButtonPress = (index) => {
    if (index === selectedButton) {
      // If the button is already selected, deselect it
      setSelectedButton(null);
    } else {
      // Otherwise, select the button
      setSelectedButton(index);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
            onPress={() => navigation.navigate('RegionPage')}
            style={styles.backBtn}>
            <FeatherIcon color="#000000" name="arrow-left" size={28} />
          </TouchableOpacity>
      <Text style={styles.Headertext}>
        Select Your Language
      </Text>
      <View>
      {buttons.map((button, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleButtonPress(index)}
          style={[
            styles.buttonss,
            {
              borderColor: selectedButton === index ? '#6562F5' : 'transparent',

            },
          ]}
        >
          <Text style={[styles.buttonText,{ color: selectedButton === index ? '#6562F5' : '#000' }]}>
            {button}
          </Text>
        </TouchableOpacity>
      ))}
        <TouchableOpacity onPress={() => navigation.navigate('InterestPage')} style={styles.progress}>
        <Image source={require('../frontend/assets/progress3.png')}></Image>
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
      marginBottom: 8,
      left: 20,
      top: 20,
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
    buttonss: {
        //padding: 10,
        //margin: 5,
        borderWidth: 5,
        borderRadius: 5,
        backgroundColor: '#ffffff',
        paddingVertical: 16,
          paddingHorizontal: 14,
          display: 'flex',
          alignItems: 'left',
          justifyContent: 'center',
          borderRadius: 12,
          marginBottom: 8,
          borderWidth: 2,
          borderColor: '#ffffff',
          maxWidth: 330,
          right: -30,
        },
    progress: {
        top: 10,
        left: 298,
      }
  });

export default SelectLanguagePage
