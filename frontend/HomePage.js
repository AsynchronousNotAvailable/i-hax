import React , {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView,
    Image, ScrollView, Modal, ImageBackground } from 'react-native';
import LoginPage from './screens/loginPage';
import SignUpPage from "./screens/sign_up_page";
import FeatherIcon from 'react-native-vector-icons/Feather';
import PrimaryGradePage from './primary_grade_page';

const HomePage = ({ navigation }) => {
  const navigateToNextPage = () => {
    navigation.navigate('SignUpPage'); // Navigate to the next page
  };

    const [activeButton, setActiveButton] = useState(null);
  
    const imageSources = {
      button1: require('../frontend/assets/tabAEW.png'),
      button2: require('../frontend/assets/tabCH.png'),
      button3: require('../frontend/assets/tabCS.png'),
      button4: require('../frontend/assets/tabEng.png'),
      button5: require('../frontend/assets/tabProb.png'),
      button6: require('../frontend/assets/tabPyProg.png'),
    };

    const toggleImage = (buttonName) => {
      if (activeButton === buttonName) {
        setActiveButton(null); // Toggle off
      } else {
        setActiveButton(buttonName); // Toggle on
      }
    };

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
        <View style={styles.row}>
            <TouchableOpacity
            onPress={() => navigation.navigate("ProfilePage")}>
            <Image
                source={require('../frontend/assets/homeProfile.png')}
                style={styles.iconProfile}
              />
            </TouchableOpacity>
            <Text style={styles.Headertext}>
                Hello! Xin Jie
            </Text>
            <TouchableOpacity
            onPress={() => navigation.navigate("CheckListScreen")}>
            <Image
                //source={{ uri: '/Users/jacksheng/i-hax-frontend/assets/malaysia.png' }}
                source={require('../frontend/assets/homeChecklist.png')}
                style={styles.iconChecklist}
              />
            </TouchableOpacity>
        </View>
      <View style={styles.content}>
        <Text style={styles.learningText}>
            Learning Progress
        </Text>
        <TouchableOpacity onPress={() => toggleImage('button2')}>
        <View style={styles.circle1}></View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => toggleImage('button4')}>
        <View style={styles.circle2}></View>
      </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleImage('button1')}>
                <View style={styles.circle3}></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleImage('button6')}>
                <View style={styles.circle4}></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleImage('button5')}>
                <View style={styles.circle5}></View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => toggleImage('button3')}>
                <View style={styles.circle6}></View>
            </TouchableOpacity>
        <ImageBackground source={require('../frontend/assets/TreeProgress.png')} style={styles.treeProgress} >
                   {activeButton === "button2" && (<Image source={require('../frontend/assets/tabCH.png')} style={{left: -8, top: 20,}} />)}
                   {activeButton === "button4" && (<Image source={require('../frontend/assets/tabEng.png')} style={{left: 15, top: 76,}} />)}
                   {activeButton === "button1" && (<Image source={require('../frontend/assets/tabAEW.png')} style={{left: 140, top: 81,}} />)}
                   {activeButton === "button6" && (<Image source={require('../frontend/assets/tabPyProg.png')} style={{left: 170, top: 40,}} />)}
                   {activeButton === "button5" && (<Image source={require('../frontend/assets/tabProb.png')} style={{left: 238, top: 54,}} />)}
                   {activeButton === "button3" && (<Image source={require('../frontend/assets/tabCS.png')} style={{left: 195, top: 101,}} />)}
                </ImageBackground>
      </View>
      <View>
         <TouchableOpacity
            onPress={() => navigation.navigate('LearningAnalyticScreen')}>
               <Image 
               source={require('../frontend/assets/analyticBTN.png')}
               style={styles.analytic}
               />
            </TouchableOpacity>
      </View>
      <View>
        <Image 
        source={require('../frontend/assets/MedCalendar.png')}
        style={styles.medCalendar}/>
      </View>
      <ScrollView horizontal={true}>
        <View style={styles.calendar}>
          <TouchableOpacity
            onPress={() => navigation.navigate('CalendarScreen')}>
              <View>
                <Image 
                source={require('../frontend/assets/Cld1.png')}
                style={styles.Cld1}/>
              </View>
            </TouchableOpacity>
            <View style={styles.Cld2}>
              <Image source={require('../frontend/assets/Cld2.png')}/>
            </View>
            <View style={styles.Cld}>
              <Image source={require('../frontend/assets/Cld3.png')}/>
            </View>
            <View style={styles.Cld}>
              <Image source={require('../frontend/assets/Cld44.png')}/>
            </View>
            <View style={styles.Cld}>
              <Image source={require('../frontend/assets/Cld55.png')}/>
            </View>
        </View>
      </ScrollView>
        <Text style={styles.eventText}>
            Upcoming Events
        </Text>
        <ScrollView horizontal={true}>
          <Image
            source={require('../frontend/assets/eventsList.png')}
            style={styles.eventList}/>
        </ScrollView>
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
      fontWeight: '300',
      color: '#000000',
      textAlign: 'center',
      fontSize: 20,
      top: 20,
      margin: 10,
      right: 42,
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
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        right: 20,
        marginBottom: 10,
    },
    iconProfile: {
        top: 27,
        right: 50,
    },
    iconChecklist: {
        top: 30,
        left: 84,
    },
    treeProgress: {
        height: 260,
        width: 370,
        marginTop: 10,
        
        zIndex: -999,
    },
    learningText: {
      left: 8,
      fontWeight: 100,
      color: '#5A3CAF',
    },
    eventText: {
      left: 30,
      fontWeight: 100,
      color: '#5A3CAF',
      marginBottom: 10,
    },
    circle1: {
        width: 20,
        height: 20,
        borderRadius: 25,
        backgroundColor: 'transparent',
        position: 'absolute',
        left: 125,
        top: 43,
    },
    circle2: {
        width: 20,
        height: 20,
        borderRadius: 25,
        backgroundColor: 'transparent',
        position: 'absolute',
        left: 101,
        top: 99,
    },
    circle3: {
        width: 20,
        height: 20,
        borderRadius: 25,
        backgroundColor: 'transparent',
        zIndex: 999,
        position: 'absolute',
        left: 142,
        top: 105,
    },
    circle4: {
        width: 20,
        height: 20,
        borderRadius: 25,
        backgroundColor: 'transparent',
        zIndex: 999,
        position: 'absolute',
        left: 173,
        top: 65,
    },
    circle5: {
        width: 22,
        height: 22,
        borderRadius: 25,
        backgroundColor: 'transparent',
        zIndex: 999,
        position: 'absolute',
        left: 240,
        top: 76,
    },
    circle6: {
        width: 20,
        height: 20,
        borderRadius: 25,
        backgroundColor: 'transparent',
        zIndex: 999,
        position: 'absolute',
        left: 198,
        top: 126,
    },
    imageContainer2: {
      margin: 20,
      top: 50,
      zIndex: 2,
      position: "relative"
    },
    analytic: {
      alignSelf: "center"
    },
    medCalendar: {
      top: 10,
      left: 26,
      marginBottom: 15,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      modalContent: {
        width: 200,
        height: 200,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      },
      calendar: {
        flexDirection: 'row',
        marginBottom: 20,
      },
      Cld: {
        marginRight: 10,
      },
      Cld1: {
        marginLeft: 28,
        marginRight: 10,
      },
      Cld2: {
        backgroundColor: '#ffffff',
        borderRadius: 10,
        marginRight: 10,
      },
      eventList: {
        marginLeft: 16,
      },
      image: { // Set your desired height
        top: 120,
        left: 80,
      },
      imageContainer: {
        position: 'relative',
        left: 7,
        bottom: -13,
        zIndex: 99,
      },
      imageContainer1: {
        position: 'absolute',
        left: 20,
        bottom: -13,
        zIndex: 999,
        margin: 10,
      },
      image1: {
        position: 'absolute',
        left: 20,
        bottom: -13,
        // zIndex: 999,
        margin: 100,
      },
      imageContainer2: {
        position: 'absolute',
        left: 20,
        bottom: -13,
        zIndex: 999,
        margin: 10,
      },
      image2: {
        position: 'absolute',
        left: 20,
        bottom: -13,
        // zIndex: 999,
        margin: 100,
      },
      imageContainer3: {
        position: 'absolute',
        left: 20,
        bottom: -13,
        zIndex: 999,
        margin: 10,
      },
      image3: {
        position: 'absolute',
        left: 20,
        bottom: -13,
        // zIndex: 999,
        margin: 100,
      },
  });

export default HomePage;
