import React, {useState} from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView,
    Image, } from 'react-native';
import SignUpPage from './screens/sign_up_page';
import LoginPage from './screens/loginPage';
import FeatherIcon from 'react-native-vector-icons/Feather';
import GradePage from './gradePage';



const PrimaryGradePage = ({ navigation }) => {
  
  const navigateToNextPage = () => {
    navigation.navigate('RegionPage'); // Navigate to the next page
  };
  const pressed = () => {
    setIsPressed(true); // Set the button to the pressed state
  };
  const [selectedButton, setSelectedButton] = useState(null);

  const buttons = ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5', 'Year 6'];

  const handleButtonPress = (index) => {
    setSelectedButton(index);
  };
  // const buttonStyles = {
  //   default: {
  //   //   backgroundColor: 'blue',
  //   //   padding: 10,
  //   //   borderRadius: 5,
  //   },
  //   pressed: {
  //     borderColor: '#6562F5',
  //     // paddingVertical: 12,
  //     // paddingHorizontal: 16,
  //     //display: 'flex',
  //     // alignItems: 'left',
  //     // justifyContent: 'center',
  //     borderRadius: 13,
  //     // marginBottom: 12,
  //     backgroundColor: '#000000',
  //     borderWidth: 2,
  //   },
  // };
  // const [isPressed, setIsPressed] = useState(false);

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
      <TouchableOpacity onPress={() => navigation.navigate('RegionPage')} style={styles.progress}>
        <Image source={require('../frontend/assets/progress1.png')}></Image>
      </TouchableOpacity>
    </View>
        {/* <TouchableOpacity
              onPress={(pressed)} style={isPressed ? buttonStyles.pressed : buttonStyles.default}>
              <View style={styles.button}>
                <Text style={[styles.buttonText]}>Year 1</Text>
              </View>
            </TouchableOpacity> */}
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
      top: 40,
      left: 278,
    }
  });

export default PrimaryGradePage;




// const [selectedButton, setSelectedButton] = useState(null);

//   const buttons = ['Button 1', 'Button 2', 'Button 3', 'Button 4', 'Button 5'];

//   const handleButtonPress = (index) => {
//     setSelectedButton(index);
//   };
//   // const [selectedTab, setSelectedTab] = useState(1);

//   return (
//     // <View style={{ flex: 1 }}>
//     //   {/* Upper Half: Image Background */}
//     //   <Image
//     //     source={require("../../assets/graphic.png")}
//     //     style={styles.imageBackground}
//     //   />

//     //   {/* Lower Half: Card-like Component */}
//     //   <View style={styles.cardContainer}>
//     //     <Card containerStyle={styles.innerCardContainer}>
//     //       <View style={styles.tabBar}>
//     //         <TouchableOpacity
//     //           style={styles.tabButton}
//     //           onPress={() => setSelectedTab(1)}
//     //         >
//     //           <Text style={styles.tabButtonText}>Tab 1</Text>
//     //         </TouchableOpacity>
//     //         <TouchableOpacity
//     //           style={styles.tabButton}
//     //           onPress={() => setSelectedTab(2)}
//     //         >
//     //           <Text style={styles.tabButtonText}>Tab 2</Text>
//     //         </TouchableOpacity>
//     //         <TouchableOpacity
//     //           style={styles.tabButton}
//     //           onPress={() => setSelectedTab(3)}
//     //         >
//     //           <Text style={styles.tabButtonText}>Tab 3</Text>
//     //         </TouchableOpacity>
//     //       </View>
//     //       {/* Course Information */}
//     //       {selectedTab === 1 && <CourseOverview />}
//     //       {selectedTab === 2 && <CourseReview />}
//     //       {selectedTab === 3 && <CourseVideo />}
//     //     </Card>
//     //   </View>
//     // </View>
//     // <Text>This is course details page</Text>
//     <View>
//       {buttons.map((button, index) => (
//         <TouchableOpacity
//           key={index}
//           onPress={() => handleButtonPress(index)}
//           style={[
//             styles.button,
//             {
//               borderColor: selectedButton === index ? '#007bff' : '#ccc',
//             },
//           ]}
//         >
//           <Text style={{ color: selectedButton === index ? '#007bff' : '#000' }}>
//             {button}
//           </Text>
//         </TouchableOpacity>
//       ))}
//     </View>
    

//   );
// };

// // const styles = StyleSheet.create({
// //   imageBackground: {
// //     flex: 1,
// //     height: "50%",
// //   },
// //   cardContainer: {
// //     flex: 1,
// //     position: "absolute",
// //     left: 0,
// //     right: 0,
// //     bottom: 0,
// //   },
// //   innerCardContainer: {
// //     backgroundColor: "white",
// //     borderTopLeftRadius: 20,
// //     borderTopRightRadius: 20,
// //     padding: 16,
// //     width: "100%",
// //     margin: 0,
// //     height: "100%",
// //   },
// //   tabBar: {
// //     flexDirection: "row",
// //     backgroundColor: "#e0e0e0",
// //     padding: 10,
// //     justifyContent: "space-between",
// //   },
// //   tabButton: {
// //     flex: 1,
// //     padding: 10,
// //     alignItems: "center",
// //     backgroundColor: "white",
// //     borderWidth: 1,
// //     borderColor: "#ccc",
// //   },
// //   tabButtonText: {
// //     fontSize: 16,
// //   },
// // });

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: 10,
//   },
//   button: {
//     padding: 10,
//     margin: 5,
//     borderWidth: 2,
//     borderRadius: 5,
//   },
// });