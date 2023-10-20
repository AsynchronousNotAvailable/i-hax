import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView,
    Image, } from 'react-native';
import LandingPage4 from './landing_page4';
import LoginPage from './loginPage';
import FeatherIcon from 'react-native-vector-icons/Feather';

const LandingPage3 = ({ navigation }) => {
  const navigateToNextPage = () => {
    navigation.navigate('LandingPage4'); // Navigate to the next page
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
            onPress={() => navigation.navigate('LandingPage2')}
            style={styles.backBtn}>
            <FeatherIcon color="#000000" name="arrow-left" size={28} />
          </TouchableOpacity>
        <Image
          //source={{ uri: '/Users/jacksheng/i-hax-frontend/assets/landingPage3.png' }}
          source={require('../assets/landingPage3.png')}
          style={styles.heroImage}
          resizeMode="contain"
        />
      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <Text style={styles.title}>
            Emotional Well-being
          </Text>
          <Text style={styles.text}>
            We're here to support you in maintaining emotional {"\n"}
            balance throughout your learning journey.
          </Text>
        </View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignUpPage')}>
           <View style={styles.label}>
            <View style={styles.textWrapper}>
              <Text style={styles.skipText}>Skip</Text>
            </View>
          </View>
        </TouchableOpacity>

        

        <TouchableOpacity
          onPress={(navigation) => navigateToNextPage(navigation)}>
            <View style={styles.box}>
              <View style={styles.rectangle}/>
              <Text style={styles.nextText}>Next</Text>
            </View>
        </TouchableOpacity>
      </View>
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
      height: 400,
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
      lineHeight: 24,
      fontWeight: '400',
      color: '#9992a7',
      textAlign: 'center',
    },

    label: {
        backgroundColor: 'transparent', // Example background color
        padding: 10,
        paddingLeft: 30,
        paddingRight: 30,
        left: 30,
        borderRadius: 12,
      },
    skipText: {
      color: 'black', 
      fontSize: 25,
      fontWeight: '600',
    },
    
    row: {
      flexDirection: 'row', 
      justifyContent: 'space-between',
      paddingHorizontal: 15,
    },
    
    box: {
      backgroundColor: 'blue', 
      padding: 10,
      paddingLeft: 30,
      paddingRight: 30,
      left: -15,
      borderRadius: 12,
    },
    nextText: {
      color: 'white',
      fontSize: 25,
      fontWeight: '600',
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

export default LandingPage3;




