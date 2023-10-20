import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import LearnPublic from "./screens/Learn_Public";
import LearnPublicCourse from "./screens/Learn_Public_Course";
import LandingPage from "./screens/Landing_Page";
import LoginPage from "./screens/Login_Page";
import Learn_UM from "./screens/Learn_UM";
import Learn_Page from "./screens/Learn_Page";
import LearnPublicCourse2 from "./screens/Learn_UM_Course";
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



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export function CustomHeader({ navigation }) {
  const handleChatPress = () => {
    navigation.navigate('CommunityChat');
  }
  return (
    <View style={{ flexDirection: 'row',  alignItems: 'center' }}>
    <Text style={{ fontSize: 20 }}>Community</Text>
    <TouchableOpacity onPress={handleChatPress} style={{ position: 'absolute', right: -130, top: 0 }}>
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
        <Stack.Screen name="FirstTabMain" component={LearnPublic} />
        <Stack.Screen
          name="CourseDetails"
          component={LearnPublicCourse}
          options={{
            headerBackTitle: "Back",
          }}
        />
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
            headerShown: false,
          }}
        />

        {/* Add more screens as needed within the FirstTab */}
      </Stack.Navigator>
    );
  }

  function ThirdTabStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="ThirdTabMain" component={LearnPublic} />
        <Stack.Screen name="CourseDetails" component={LearnPublicCourse} />
        {/* Add more screens as needed within the FirstTab */}
      </Stack.Navigator>
    );
  }

  function FourthTabStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="FourthTabMain" component={Community} options={({ navigation }) => ({ headerTitle: (props) => <CustomHeader {...props}  navigation={navigation}/>,  headerTitleAlign: 'center'})}/>
        <Stack.Screen name="CommunityTutor" component={CommunityTutor} options={{title: 'Search Tutor', headerTitleAlign: 'center'}} />
        <Stack.Screen name="CommunityBookTutor" component={CommunityBookTutor} options={{title: 'Book a Session', headerTitleAlign: 'center'}} />
        <Stack.Screen name="CommunityMessage" component={CommunityMessage}  options={({ route }) => ({title: route.params.tutorName, headerTitleAlign: 'center',})}/>
        <Stack.Screen name="CommunityChat" component={CommunityChat} options={{title: 'Messages', headerTitleAlign: 'center'}} />
        <Stack.Screen name="CommunityChatscreen" component={CommunityChatscreen} options={({ route }) => ({ title: route.params.username, headerTitleAlign: 'center',})}/>
        <Stack.Screen name="CommunityPost" component={CommunityPost} options={{headerShown: false,  }} />
      </Stack.Navigator>
    );
  }

  function FifthTabStack() {
    return (
      <Stack.Navigator>
       <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
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
          {/* <Tab.Screen
    name="Home"
    component={FirstTabStack}
    options={{
      tabBarIcon: ({ color, size }) => (
        <Icon name="book" size={size} color={color} /> // Adjust the icon name and style as needed
      ),
    }}
  /> */}
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
          <Stack.Screen name="Landing" component={LandingPage} />
          <Stack.Screen
            name="Login"
            component={LoginPage}
            initialParams={{ setAuthenticated: setAuthenticated }}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
