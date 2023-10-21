import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import LearnPublic from "./screens/Learn_Public";
import LearnPublicCourse from "./screens/Learn_Public_Course";
import LandingPage1 from "./screens/landing_page1";
import LandingPage2 from "./screens/landing_page2";
import LandingPage3 from "./screens/landing_page3";
import LandingPage4 from "./screens/landing_page4";
import LoginPage from "./screens/loginPage";
import SignUpPage from "./screens/sign_up_page";
import GradePage from "./gradePage";
import PrimaryGradePage from "./primary_grade_page";
import SecondaryGradePage from "./secondary_grade_page";
import TertiaryGradePage from "./tertiary_grade_page";
import RegionPage from "./region_page";
import SelectLanguagePage from "./select_language_page";
import InterestPage from "./interestPage";
import EnrollCoursePage from "./enroll_course_page";
import HomePage from "./HomePage";
import CheckListPage from "./checklistPage";
import LearnAnalyticPage from "./learn_analytic_page";
import Learn_Page from "./screens/Learn_Page";
import LearnUMCourse from "./screens/Learn_UM_Course";
import CourseVideoPage from "./screens/CourseVideoPage";
import Icon from "react-native-vector-icons/FontAwesome"; // You can choose any icon library you prefer
import Community from "./screens/Community_Main";
import CommunityMessage from "./screens/Community_Message";
import CommunityTutor from "./screens/Community_Tutor";
import CommunityBookTutor from "./screens/Community_BookTutor";
import CommunityChat from "./screens/Community_Chat";
import CommunityChatscreen from "./screens/Community_Chatscreen";
import CommunityPost from "./screens/Community_Post";
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Profile from "./screens/Profile_Main";
import Language from "./screens/Language";
import Achievement from "./screens/Achievement";
import ReportIssue from "./screens/Report";
import Shop from "./screens/Shop";
import ContactUsScreen from "./screens/Contact_Us";
import FAQScreen from "./screens/FAQ";
import Health from "./screens/Health";
import HealthStress1 from "./screens/Health_Stress1";
import HealthStress2 from "./screens/Health_Stress2";
import HealthStress3 from "./screens/Health_Stress3";
import HealthStress4 from "./screens/Health_Stress4";
import HealthStress5 from "./screens/Health_Stress5";
import HealthStressResult from "./screens/Health_StressResult";
import HealthJournal from "./screens/Health_Journal";
import HealthJournalPost from "./screens/Health_JournalPost";
import HealthMeditation from "./screens/Health_meditation";

import HealthMusic from "./screens/Health_Music";
import LogoPage from "./screens/Landing_Logo";
import CalendarPage from "./calendarPage";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export function CustomHeader({ navigation }) {
  const handleChatPress = () => {
    navigation.navigate('CommunityChat');
  }
  return (
    <View style={{ flexDirection: 'row',  alignItems: 'center' }}>
    <Text style={{ fontSize: 20 }}>Meet The Community!</Text>
    <TouchableOpacity onPress={handleChatPress} style={{ position: 'absolute', right: -100, top: 0 }}>
      <Icon name="comment" size={24} color="#6562F5" />
    </TouchableOpacity>
  </View>
  );
}

export default function AppNav() {
  const [authenticated, setAuthenticated] = useState(false);

  function FirstTabStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="FirstTabMain" component={HomePage} options={{headerShown: false}}/>
        <Stack.Screen name="CheckListScreen" component={CheckListPage} options={{headerShown: false,}}/>
        <Stack.Screen name="LearningAnalyticScreen" component={LearnAnalyticPage} options={{headerBackTitle: "Back", headerTitle: "Learning Analytics"}}/>
        <Stack.Screen name="CalendarScreen" component={CalendarPage} options={{headerShown: false}}/>
        {/* Add more screens as needed within the FirstTab */}
      </Stack.Navigator>
    );
  }

  function SecondTabStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="LearnPage"
          component={Learn_Page}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen name="LearnPublic" component={LearnPublic} />
        <Stack.Screen name="LearnUM" component={Learn_UM} /> */}
        <Stack.Screen
          name="Computer Hacking"
          component={LearnPublicCourse}
          options={{
            headerBackTitle: "Back",
          }}
        />
        <Stack.Screen
          name="Fundamentals Of Programming"
          component={LearnUMCourse}
          options={{
            headerBackTitle: "Back",
          }}
        />
        <Stack.Screen
          name="Course Video Page"
          component={CourseVideoPage}
          options={{
            headerBackTitle: "Back",
            title: ""
          }}
        />

        {/* Add more screens as needed within the FirstTab */}
      </Stack.Navigator>
    );
  }

  function ThirdTabStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="ThirdTabMain" component={Health} options={{title: 'Mental Health', headerTitleAlign: 'center', headerShown: false}}/>
        <Stack.Screen name="HealthStress1" component={HealthStress1} options={{title: 'Assessment', headerTitleAlign: 'center', headerBackTitle: "Back",}}/>
        <Stack.Screen name="HealthStress2" component={HealthStress2} options={{title: 'Assessment', headerTitleAlign: 'center', headerBackTitle: "Back",}}/>
        <Stack.Screen name="HealthStress3" component={HealthStress3} options={{title: 'Assessment', headerTitleAlign: 'center', headerBackTitle: "Back",}}/>
        <Stack.Screen name="HealthStress4" component={HealthStress4} options={{title: 'Assessment', headerTitleAlign: 'center', headerBackTitle: "Back",}}/>
        <Stack.Screen name="HealthStress5" component={HealthStress5} options={{title: 'Assessment', headerTitleAlign: 'center', headerBackTitle: "Back",}}/>
        <Stack.Screen name="HealthStressResult" component={HealthStressResult} options={{title: 'Results', headerTitleAlign: 'center'}}/>
        <Stack.Screen name="HealthJournal" component={HealthJournal} options={{title: 'Journal', headerTitleAlign: 'center', }}/>
        <Stack.Screen name="HealthJournalPost" component={HealthJournalPost} options={{title: 'New Journal Entry', headerTitleAlign: 'center'}}/>
        <Stack.Screen name="HealthMeditation" component={HealthMeditation} options={{title: 'Meditation', headerTitleAlign: 'center'}}/>
        <Stack.Screen name="HealthMusic" component={HealthMusic} options={{title: 'Meditation Music', headerTitleAlign: 'center'}}/>
        {/* Add more screens as needed within the FirstTab */}
      </Stack.Navigator>
    );
  }

  function FourthTabStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="FourthTabMain" component={Community} options={({ navigation }) => ({ headerTitle: (props) => <CustomHeader {...props}  navigation={navigation}/>,  headerTitleAlign: 'center'})}/>
        <Stack.Screen name="CommunityTutor" component={CommunityTutor} options={{title: 'Search Tutor', headerTitleAlign: 'center', headerBackTitle:"Community"}} />
        <Stack.Screen name="CommunityBookTutor" component={CommunityBookTutor} options={{title: 'Book a Session', headerTitleAlign: 'center', headerBackTitle:"Search Tutor"}} />
        <Stack.Screen name="CommunityMessage" component={CommunityMessage}  options={({ route }) => ({title: route.params.tutorName, headerTitleAlign: 'center',})}/>
        <Stack.Screen name="CommunityChat" component={CommunityChat} options={{title: 'Messages', headerTitleAlign: 'center', headerBackTitle:"Community"}} />
        <Stack.Screen name="CommunityChatscreen" component={CommunityChatscreen} options={({ route }) => ({ title: route.params.username, headerTitleAlign: 'center', })}/>
        <Stack.Screen name="CommunityPost" component={CommunityPost} options={{headerShown: false,  }} />
      </Stack.Navigator>
    );
  }

  function FifthTabStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false } } initialParams={{ setAuthenticated: setAuthenticated }}  />
          <Stack.Screen name="Language" component={Language} />
          <Stack.Screen name="Achievement" component={Achievement} />
          <Stack.Screen name="Shop" component={Shop} />
          <Stack.Screen name="Help Centre" component={FAQScreen} />
          <Stack.Screen name="Contact Us" component={ContactUsScreen} />
        <Stack.Screen name="Report A Bug" component={ReportIssue} />
        
        
        
        {/* Add more screens as needed within the FirstTab */}
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      {authenticated ? (
        <Tab.Navigator>
          <Tab.Screen
    name="Home"
    component={FirstTabStack}
    options={{
      tabBarIcon: ({ color, size }) => (
        <Icon name="home" size={size} color={color} /> // Adjust the icon name and style as needed
      ),
    }}
  />
          <Tab.Screen
            name="Learn"
            component={SecondTabStack}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="book" size={size} color={color} /> // Adjust the icon name and style as needed
              ),
            }}
          />
          <Tab.Screen
            name="Health"
            component={ThirdTabStack}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="heartbeat" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Community"
            component={FourthTabStack}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="comments" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={FifthTabStack}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="user" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Landing" headerMode="false">
            {/* <Stack.Screen name="Landing" component={LandingPage} /> */}
            <Stack.Screen 
          name="LogoPage" 
          component={LogoPage} 
        />
          <Stack.Screen 
          name="LandingPage1" 
          component={LandingPage1} 
          options={{headerShown: false, }}/>
          <Stack.Screen 
          name="LandingPage2" 
          component={LandingPage2} 
          options={{headerShown: false, }}/>
          <Stack.Screen 
          name="LandingPage3" 
          component={LandingPage3}
          options={{headerShown: false, }}/>
          <Stack.Screen 
          name="LandingPage4" 
          component={LandingPage4}
          options={{
            header: (props) => <CustomHeader {...props} />, headerShown: false, }}/> 
            {/* <Stack.Screen name="Login" component={LoginPage} initialParams={{ setAuthenticated: setAuthenticated }} /> */}
            <Stack.Screen 
          name="LoginPage" 
          component={LoginPage}
          initialParams={{ setAuthenticated: setAuthenticated }}
          options={{
            header: (props) => <CustomHeader {...props} />, headerShown: false, }}/>  
            <Stack.Screen 
          name="SignUpPage" 
          component={SignUpPage}
          initialParams={{ setAuthenticated: setAuthenticated }}
          options={{
            header: (props) => <CustomHeader {...props} />, headerShown: false, }}/>  
             <Stack.Screen 
          name="GradePage" 
          component={GradePage}
          options={{
            header: (props) => <CustomHeader {...props} />, headerShown: false, }}/>
            <Stack.Screen 
          name="PrimaryGradePage" 
          component={PrimaryGradePage}
          options={{
            header: (props) => <CustomHeader {...props} />, headerShown: false, }}/> 
            <Stack.Screen 
            name="SecondaryGradePage" 
          component={SecondaryGradePage}
          options={{
            header: (props) => <CustomHeader {...props} />, headerShown: false, }}/>
            <Stack.Screen 
            name="TertiaryGradePage" 
          component={TertiaryGradePage}
          options={{
            header: (props) => <CustomHeader {...props} />, headerShown: false, }}/>
            <Stack.Screen 
            name="RegionPage" 
          component={RegionPage}
          options={{
            header: (props) => <CustomHeader {...props} />, headerShown: false, }}/>
            <Stack.Screen 
            name="SelectLanguagePage" 
          component={SelectLanguagePage}
          options={{
            header: (props) => <CustomHeader {...props} />, headerShown: false, }}/>
            <Stack.Screen 
            name="InterestPage" 
          component={InterestPage}
          options={{
            header: (props) => <CustomHeader {...props} />, headerShown: false, }}/>
             <Stack.Screen 
            name="EnrollCoursePage" 
          component={EnrollCoursePage}
          initialParams={{ setAuthenticated: setAuthenticated }}
          options={{
            header: (props) => <CustomHeader {...props} />, headerShown: false, }}/>
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
