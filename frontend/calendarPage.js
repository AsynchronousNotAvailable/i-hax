import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView,
    Image, ScrollView, } from 'react-native';
import LoginPage from './screens/loginPage';
import SignUpPage from "./screens/sign_up_page";
import FeatherIcon from 'react-native-vector-icons/Feather';
import PrimaryGradePage from './primary_grade_page';
import HomePage from './HomePage';

const CalendarPage = ({ navigation }) => {
  const navigateToNextPage = () => {
    navigation.navigate('FirstTabMain'); // Navigate to the next page
  };

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
            <View style={{flexDirection: "row", marginBottom: 40,}}>
                <TouchableOpacity
                onPress={(navigation) => navigateToNextPage(navigation)}
                style={styles.backBtn}>
                <FeatherIcon color="#000000" name="arrow-left" size={28} />
            </TouchableOpacity>
            <Image
                source={require('../frontend/assets/dateCal.png')}
                style={styles.dateCal}
            />
        </View>
      
      {/* <Text style={styles.Headertext}>
        Daily Missions
      </Text> */}

        <View style={{bottom: 20}}>
           <Image
            source={require('../frontend/assets/date.png')}
           />
        </View>
        <View style={{bottom: 10}}>
            <Image
            source={require('../frontend/assets/calHalf.png')}/>
        </View>
      </ScrollView>
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
      fontSize: 30,
      lineHeight: 30,
      fontWeight: '600',
      color: '#000000',
      textAlign: 'center',
      fontSize: 27,
      top: 16,
      bottom: 100,
      margin: 10,
      left: 65,
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
      left: 15,
      top: 20,
    },
    treasure: {
        right: 20,
        bottom: 170,
    },
    mission: {
        right: 15,
        bottom: 165,
    },
    topics: {
        left: 20,
        color: '#9098A3',
        marginTop: 5,
        fontWeight: '600',
    },
    overview: {
        margin: 10,
        left: 5,
        color: '#9098A3',
        fontWeight: '600',
    },
    dateCal: {
        left: 25,
        top: 27,
    }
  });

export default CalendarPage;