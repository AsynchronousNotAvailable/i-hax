import React , {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView,
    Image, } from 'react-native';
import SignUpPage from './screens/sign_up_page';
import LoginPage from './screens/loginPage';
import FeatherIcon from 'react-native-vector-icons/Feather';


const SecondaryGradePage = ({ navigation }) => {
  const navigateToNextPage = () => {
    navigation.navigate('RegionPage'); // Navigate to the next page
  };
  const [selectedButton, setSelectedButton] = useState(null);
  const buttons = ['Form 1', 'Form 2', 'Form 3', 'Form 4', 'Form 5', 'Form 6'];
  const handleButtonPress = (index) => {
    setSelectedButton(index);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
            onPress={() => navigation.navigate('GradePage')}
            style={styles.backBtn}>
            <FeatherIcon color="#000000" name="arrow-left" size={28} />
          </TouchableOpacity>
      <Text style={styles.Headertext}>
        Which grade are you in?
      </Text>
      <View style={styles.content}>
          <View style={styles.selected}>
                <Text style={[styles.buttonText]}>Primary</Text>
            </View>
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
    </View>
    <TouchableOpacity onPress={() => navigation.navigate('RegionPage')} style={styles.progress}>
        <Image source={require('../frontend/assets/progress1.png')}></Image>
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
    content: {
      flex: 1,
      //justifyContent: 'space-between',
      paddingVertical: 24,
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
    buttonss: {
      borderWidth: 5,
      borderRadius: 5,
      backgroundColor: '#ffffff',
      paddingVertical: 16,
        paddingHorizontal: 16,
        display: 'flex',
        alignItems: 'left',
        justifyContent: 'center',
        borderRadius: 12,
        marginBottom: 12,
        borderWidth: 2,
        borderColor: '#ffffff',
        maxWidth: 1000,
        right: 1,
      },
      progress: {
        top: 40,
        left: 278,
      }
  });

export default SecondaryGradePage;




