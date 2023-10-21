import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView,
    Image, } from 'react-native';
import LoginPage from './screens/loginPage';
import SignUpPage from "./screens/sign_up_page";
import FeatherIcon from 'react-native-vector-icons/Feather';
import PrimaryGradePage from './primary_grade_page';
import HomePage from './HomePage';

const CheckListPage = ({ navigation }) => {
  const navigateToNextPage = () => {
    navigation.navigate('FirstTabMain'); // Navigate to the next page
  };

  return (
    <SafeAreaView style={styles.container}>
        <View style={{flexDirection: "row", height: 200,  justifyContent: "flex-start"}}>
            <TouchableOpacity
            onPress={(navigation) => navigateToNextPage(navigation)}
            style={styles.backBtn}>
            <FeatherIcon color="#000000" name="arrow-left" size={28} />
          </TouchableOpacity>
          <Text style={styles.Headertext}>
        Daily Missions
        </Text>
      </View>
      
      {/* <Text style={styles.Headertext}>
        Daily Missions
      </Text> */}
      <View style={styles.content}>
       <Image
        source={require('../frontend/assets/treasure.png')}
        style={styles.treasure}
       />
       <Image
       source={require('../frontend/assets/mission.png')}
       style={styles.mission}
       />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      // justifyContent: 'center', // Center content vertically
    alignItems: 'stretch',
      flexDirection: "column"
    },
    content: {
      flex: 1,
      //justifyContent: 'space-between',
      alignItems: "center",
      paddingVertical: 24,
      paddingHorizontal: 15,
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
    
      lineHeight: 30,
      fontWeight: '400',
      color: '#000000',
      textAlign: 'center',
      fontSize: 27,
      top: 16,
      bottom: 40,
      margin: 10,
      marginBottom: 50,
      
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
      alignItems: 'flex-start',
      justifyContent: 'center',
      marginBottom: 16,
      left: 20,
      top: 20,
    },
    treasure: {
        
      bottom: 170,
      // width: "100%",
    },
    mission: {
        
      bottom: 165,
      
    },
  });

export default CheckListPage;




