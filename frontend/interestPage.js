import React ,{useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView,
    Image, } from 'react-native';
import SignUpPage from './screens/sign_up_page';
import LoginPage from './screens/loginPage';
import FeatherIcon from 'react-native-vector-icons/Feather';
import SelectLanguagePage from './select_language_page';

const InterestPage = ({ navigation }) => {
  const navigateToNextPage = () => {
    navigation.navigate('EnrollCoursePage'); // Navigate to the next page
  }
  const [selectedButton, setSelectedButton] = useState([]);

  const buttons = ['English', 'Physics', 'Chemistry', 'Computer Science', 'Mathematics', 'Biology', 'Engineering', 'Arts', 
                  'Accounting', 'Economic', 'Music', 'Chinese', 'Malay', 'Science', 'Finance', 'Business', 'Statistic'];
  // const handleButtonPress = (index) => {
  //   if (index === selectedButton) {
  //     // If the button is already selected, deselect it
  //     setSelectedButton(null);
  //   } else {
  //     // Otherwise, select the button
  //     setSelectedButton(index);
  //   }
  // };
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
            onPress={() => navigation.navigate('SelectLanguagePage')}
            style={styles.backBtn}>
            <FeatherIcon color="#000000" name="arrow-left" size={28} />
          </TouchableOpacity>
      <Text style={styles.Headertext}>
        What are you interest?
      </Text>
      <View style={styles.content}>
      <View style={styles.row1}>
        {buttons.slice(0, 3).map((button, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleButtonPress(index)}
            style={[
              styles.buttonss,
              {
                borderColor: selectedButton.includes(index) ? '#6562F5' : 'transparent',
              },
            ]}
          >
            <Text style={[styles.buttonText, { color: selectedButton.includes(index)? '#6562F5' : '#000' }]}>
              {button}
            </Text>
          </TouchableOpacity>
        ))}
        </View>
        <View style={styles.row1}>
        {buttons.slice(3, 5).map((button, index) => (
          <TouchableOpacity
            key={index + 3 }
            onPress={() => handleButtonPress(index + 3)}
            style={[
              styles.buttonss,
              {
                borderColor: selectedButton.includes(index + 3) ? '#6562F5' : 'transparent',
              },
            ]}
          >
            <Text style={[styles.buttonText, { color: selectedButton.includes(index + 3)  ? '#6562F5' : '#000' }]}>
              {button}
            </Text>
          </TouchableOpacity>
        ))}
        </View>
        <View style={styles.row1}>
        {buttons.slice(5, 8).map((button, index) => (
          <TouchableOpacity
            key={index + 6}
            onPress={() => handleButtonPress(index + 6)}
            style={[
              styles.buttonss,
              {
                borderColor: selectedButton.includes(index + 6)  ? '#6562F5' : 'transparent',
              },
            ]}
          >
            <Text style={[styles.buttonText, { color: selectedButton.includes(index + 6)  ? '#6562F5' : '#000' }]}>
              {button}
            </Text>
          </TouchableOpacity>
        ))}
        </View>
        <View style={styles.row1}>
        {buttons.slice(8, 11).map((button, index) => (
          <TouchableOpacity
            key={index + 9}
            onPress={() => handleButtonPress(index + 9)}
            style={[
              styles.buttonss,
              {
                borderColor: selectedButton.includes(index + 9)  ? '#6562F5' : 'transparent',
              },
            ]}
          >
            <Text style={[styles.buttonText, { color: selectedButton.includes(index + 9)  ? '#6562F5' : '#000' }]}>
              {button}
            </Text>
            
          </TouchableOpacity>
        ))}
        </View>
        <View style={styles.row1}>
        {buttons.slice(11, 14).map((button, index) => (
          <TouchableOpacity
            key={index + 12}
            onPress={() => handleButtonPress(index + 12)}
            style={[
              styles.buttonss,
              {
                borderColor: selectedButton.includes(index + 12)  ? '#6562F5' : 'transparent',
              },
            ]}
          >
            <Text style={[styles.buttonText, { color: selectedButton.includes(index + 12)  ? '#6562F5' : '#000' }]}>
              {button}
            </Text>
            
          </TouchableOpacity>
        ))}
        </View>
        <View style={styles.row1}>
        {buttons.slice(14, 17).map((button, index) => (
          <TouchableOpacity
            key={index + 15}
            onPress={() => handleButtonPress(index + 15)}
            style={[
              styles.buttonss,
              {
                borderColor: selectedButton.includes(index + 15)  ? '#6562F5' : 'transparent',
              },
            ]}
          >
            <Text style={[styles.buttonText, { color: selectedButton.includes(index + 15)  ? '#6562F5' : '#000' }]}>
              {button}
            </Text>
            
          </TouchableOpacity>
        ))}
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('EnrollCoursePage')} style={styles.progress}>
        <Image source={require('../frontend/assets/progress4.png')}></Image>
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
      paddingLeft: 20,
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
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft:10,
        marginRight: 10,
        //margin:10,
    },
    buttonss: {
        //padding: 10,
        //margin: 5,
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
        top: 140,
        left: 278,
      },
    button1: {
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
      paddingLeft: 10,
    }
  });

export default InterestPage




{/* <View style={styles.row1}>
        <TouchableOpacity
              onPress={(navigation) => navigateToNextPage(navigation)}>
              <View style={styles.button}>
                <Text style={[styles.buttonText]}>English</Text>
              </View>
            </TouchableOpacity>
        <TouchableOpacity
              onPress={(navigation) => navigateToNextPage(navigation)}>
              <View style={[styles.button]}>
                <Text style={[styles.buttonText]}>Physics</Text>
              </View>
        </TouchableOpacity>
        <TouchableOpacity
              onPress={(navigation) => navigateToNextPage(navigation)}>
              <View style={styles.button}>
                <Text style={[styles.buttonText]}>Chemistry</Text>
              </View>
        </TouchableOpacity>
        </View>
        <View style={styles.row1}>
        <TouchableOpacity
              onPress={(navigation) => navigateToNextPage(navigation)}>
              <View style={styles.button}>
                <Text style={[styles.buttonText]}>Computer Science</Text>
              </View>
        </TouchableOpacity>
        <TouchableOpacity
              onPress={(navigation) => navigateToNextPage(navigation)}>
              <View style={styles.button}>
                <Text style={[styles.buttonText]}>Mathematics</Text>
              </View>
        </TouchableOpacity>
        </View>
        <View style={styles.row1}>
        <TouchableOpacity
              onPress={(navigation) => navigateToNextPage(navigation)}>
              <View style={styles.button}>
                <Text style={[styles.buttonText]}>Biology</Text>
              </View>
        </TouchableOpacity>
        <TouchableOpacity
              onPress={(navigation) => navigateToNextPage(navigation)}>
              <View style={styles.button}>
                <Text style={[styles.buttonText]}>Engineering</Text>
              </View>
        </TouchableOpacity>
        <TouchableOpacity
              onPress={(navigation) => navigateToNextPage(navigation)}>
              <View style={styles.button}>
                <Text style={[styles.buttonText]}>Arts</Text>
              </View>
        </TouchableOpacity>
        </View>
        <View style={styles.row1}>
        <TouchableOpacity
              onPress={(navigation) => navigateToNextPage(navigation)}>
              <View style={styles.button1}>
                <Text style={[styles.buttonText]}>Accounting</Text>
              </View>
        </TouchableOpacity>
        <TouchableOpacity
              onPress={(navigation) => navigateToNextPage(navigation)}>
              <View style={styles.button}>
                <Text style={[styles.buttonText]}>Economic</Text>
              </View>
        </TouchableOpacity>
        <TouchableOpacity
              onPress={(navigation) => navigateToNextPage(navigation)}>
              <View style={styles.button}>
                <Text style={[styles.buttonText]}>Music</Text>
              </View>
        </TouchableOpacity>
        </View>
        <View style={styles.row1}>
        <TouchableOpacity
              onPress={(navigation) => navigateToNextPage(navigation)}>
              <View style={styles.button}>
                <Text style={[styles.buttonText]}>Chinese</Text>
              </View>
        </TouchableOpacity>
        <TouchableOpacity
              onPress={(navigation) => navigateToNextPage(navigation)}>
              <View style={styles.button}>
                <Text style={[styles.buttonText]}>Malay</Text>
              </View>
        </TouchableOpacity>
        <TouchableOpacity
              onPress={(navigation) => navigateToNextPage(navigation)}>
              <View style={styles.button}>
                <Text style={[styles.buttonText]}>Science</Text>
              </View>
        </TouchableOpacity>
        </View>
        <View style={styles.row1}>
        <TouchableOpacity
              onPress={(navigation) => navigateToNextPage(navigation)}>
              <View style={styles.button}>
                <Text style={[styles.buttonText]}>Finance</Text>
              </View>
        </TouchableOpacity>
        <TouchableOpacity
              onPress={(navigation) => navigateToNextPage(navigation)}>
              <View style={styles.button}>
                <Text style={[styles.buttonText]}>Business</Text>
              </View>
        </TouchableOpacity>
        <TouchableOpacity
              onPress={(navigation) => navigateToNextPage(navigation)}>
              <View style={styles.button}>
                <Text style={[styles.buttonText]}>Statistic</Text>
              </View>
        </TouchableOpacity>
        </View> */}