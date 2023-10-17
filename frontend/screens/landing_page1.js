import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView,
    Image, } from 'react-native';
import LandingPage2 from './landing_page2';
import LoginPage from './loginPage';
import GradePage from '../gradePage';

const LandingPage1 = ({navigation}) => {

  const navigateToNextPage = () => {
    navigation.navigate('LandingPage2'); // Use the screen name you defined in your navigator
  };
  
// const LandingPage = ({ navigation }) => {
//   const navigateToNextPage = () => {
//     navigation.navigate('LandingPage2'); // Navigate to the next page
//   };
// }
  // const handlePage = () => {
  //   navigation.navigate(LandingPage2);
  // }

  // const Box = () => {
  //   return (
  //     <View style={styles.box}>
  //       <View style={styles.rectangle} />
  //     </View>
  //   );
  // };

  // const Label = () => {
  //   return (
  //     <View style={styles.label}>
  //       <View style={styles.textWrapper}>
  //         <Text>Skip</Text>
  //       </View>
  //     </View>
  //   );
  // };

  return (
    <SafeAreaView style={styles.container}>
        <Image
          //source={{ uri: '/Users/jacksheng/i-hax-frontend/assets/landingPage1.png' }}
          source={require('../assets/landingPage1.png')}
          style={styles.heroImage}
          resizeMode="contain"
        />
      <View style={styles.content}>
        <View style={styles.contentHeader}>
          <Text style={styles.title}>
            Inclusive Education
            {/* <View style={styles.appName}>
              <Text style={styles.appNameText}>MyApp</Text>
            </View> */}
          </Text>
          <Text style={styles.text}>
          We offer accessibility features and {"\n"} 
          specialized courses tailored to students {"\n"}
          with special needs.
          </Text>
        </View>
      <View style={styles.row}>
        <TouchableOpacity
          onPress={() => navigation.navigate('LoginPage')}>
           <View style={styles.label}>
            <View style={styles.textWrapper}>
              <Text style={styles.skipText}>Skip</Text>
            </View>
          </View>
        </TouchableOpacity>

        

        <TouchableOpacity
          //onPress={() =>navigation.navigate("LandingPage2")}>
          onPress={(navigation) => navigateToNextPage(navigation)}>
             {/* <View style={styles.button}>
            <Text style={styles.buttonText}>Let's go</Text>
          </View> */}
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
      left: -15,
      borderRadius: 12,
      left: 30,
      fontSize: 30,
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
  }
});

export default LandingPage1;




