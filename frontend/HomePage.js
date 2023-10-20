import React , {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView,
    Image, ScrollView, Modal } from 'react-native';
import LoginPage from './screens/loginPage';
import SignUpPage from "./screens/sign_up_page";
import FeatherIcon from 'react-native-vector-icons/Feather';
import PrimaryGradePage from './primary_grade_page';

const HomePage = ({ navigation }) => {
  const navigateToNextPage = () => {
    navigation.navigate('SignUpPage'); // Navigate to the next page
  };
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
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
                Hello! Xin JIe
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
        <TouchableOpacity
            onPress={toggleModal}>
                <View style={styles.circle1}></View>
                {/* <Modal
        animationType="slide" // You can choose a different animation type
        transparent={true}
        visible={isModalVisible}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Pop-up Content</Text>
            <TouchableOpacity onPress={toggleModal}>
              <Text>Close Pop-up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal> */}
            </TouchableOpacity>
            <TouchableOpacity
            onPress={(navigation) => navigateToNextPage(navigation)}>
                <View style={styles.circle2}></View>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={(navigation) => navigateToNextPage(navigation)}>
                <View style={styles.circle3}></View>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={(navigation) => navigateToNextPage(navigation)}>
                <View style={styles.circle4}></View>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={(navigation) => navigateToNextPage(navigation)}>
                <View style={styles.circle5}></View>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={(navigation) => navigateToNextPage(navigation)}>
                <View style={styles.circle6}></View>
            </TouchableOpacity>
        <Image
                source={require('../frontend/assets/TreeProgress.png')}
                style={styles.treeProgress}
              />
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
            onPress={(navigation) => navigateToNextPage(navigation)}>
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
        top: 27,
        left: 84,
    },
    treeProgress: {
        marginTop: 10,
        right: 15,
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
        backgroundColor: 'black',
        zIndex: 999,
        position: 'absolute',
        left: 105,
        top: 42,
    },
    circle2: {
        width: 20,
        height: 20,
        borderRadius: 25,
        backgroundColor: 'black',
        zIndex: 999,
        position: 'absolute',
        left: 81,
        top: 99,
    },
    circle3: {
        width: 20,
        height: 20,
        borderRadius: 25,
        backgroundColor: 'black',
        zIndex: 999,
        position: 'absolute',
        left: 122,
        top: 105,
    },
    circle4: {
        width: 20,
        height: 20,
        borderRadius: 25,
        backgroundColor: 'black',
        zIndex: 999,
        position: 'absolute',
        left: 153,
        top: 65,
    },
    circle5: {
        width: 22,
        height: 22,
        borderRadius: 25,
        backgroundColor: 'black',
        zIndex: 999,
        position: 'absolute',
        left: 220,
        top: 76,
    },
    circle6: {
        width: 20,
        height: 20,
        borderRadius: 25,
        backgroundColor: 'black',
        zIndex: 999,
        position: 'absolute',
        left: 178,
        top: 126,
    },
    analytic: {
      left: 23,
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
      }
  });

export default HomePage;




