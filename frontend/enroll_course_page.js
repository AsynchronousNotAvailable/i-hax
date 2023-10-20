import React , {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView,
    Image, } from 'react-native';
import SignUpPage from './screens/sign_up_page';
import LoginPage from './screens/loginPage';
import FeatherIcon from 'react-native-vector-icons/Feather';
import SelectLanguagePage from './select_language_page';



const EnrollCoursePage = ({ navigation, route }) => {
  const navigateToNextPage = () => {
    navigation.navigate('EnrolCoursePage'); // Navigate to the next page
  }
  const { setAuthenticated } = route.params;
  const handleLogin = () => {
        setAuthenticated(true);
  }
  const [selectedButton, setSelectedButton] = useState([]);
  const buttons = [
    require('../frontend/assets/pyCourse.png'),
    require('../frontend/assets/javaCourse.png'),
    require('../frontend/assets/englishWorkspace.png'),
    require('../frontend/assets/englishWriting.png'),
  ]
  const handleButtonPress = (index) => {
    // Check if the button is already selected
    if (selectedButton.includes(index)) {
      // If it's already selected, remove it from the selectedButtons array
      setSelectedButton(selectedButton.filter(item => item !== index));
    } else {
      // If it's not selected, add it to the selectedButtons array
      setSelectedButton([...selectedButton, index]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
            onPress={() => navigation.navigate('InterestPage')}
            style={styles.backBtn}>
            <FeatherIcon color="#000000" name="arrow-left" size={28} />
          </TouchableOpacity>
      <Text style={styles.Headertext}>
        Enroll in some courses
      </Text>
      <View style={styles.contains}> 
      {buttons.map((imageSource, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleButtonPress(index)}
            style={[
              styles.buttonss,
              {
                borderColor: selectedButton.includes(index) ? '#6562F5' : 'transparent',
              },
            //   {
            //     width: 350,   // Match the image width
            //     height: 130, // Match the image height
            //   },
            ]}
          >
            <Image source={imageSource} style={styles.buttonImage} />
          </TouchableOpacity>
        ))}
      </View>
        <TouchableOpacity style={styles.forwardBtn}
        onPress={() => {
                  // handle onPress
                  handleLogin();
                }}>
        <Image source={require('../frontend/assets/progress5.png')}></Image>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center', // Center content vertically
      alignItems: 'stretch',
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
      paddingHorizontal: 10,
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
      borderColor: '#6562F5'
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
      marginBottom: 12,
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
        //padding: 10,
        //margin: 5,
        backgroundColor: '#0000000',
        //paddingVertical: 16,
          paddingHorizontal: 10,
          //display: 'flex',
          //alignItems: 'rigth',
          justifyContent: 'center',
          borderRadius: 12,
          borderWidth: 6,
          borderColor: '#ffffff',
          //maxWidth: 260,
          marginBottom: 10,
          marginLeft: 30,
          right: 1,
          width: 304,
          height:132,
    },
    progress: {
        top: 0,
        left: 290,
      }, 
      buttonImage: {
        maxHeight: 350,
        maxWidth: 350,
        left: -18,
        top: 2,
      },
    contains: {
        left: 18,
    },
    forwardBtn: {
      left: 288,
      top: 5,
    },
  });

export default EnrollCoursePage




