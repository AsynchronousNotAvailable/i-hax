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
import CalendarPage from "./calendarPage";


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function AppNav() {
  const [authenticated, setAuthenticated] = useState(false);

  function FirstTabStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="FirstTabMain" component={HomePage} options={{headerShown: false}}/>
        <Stack.Screen name="CheckListScreen" component={CheckListPage} options={{headerShown: false}}/>
        <Stack.Screen name="LearningAnalyticScreen" component={LearnAnalyticPage} options={{headerShown: false}}/>
        <Stack.Screen name="CalendarScreen" component={CalendarPage} options={{headerShown: false}}/>
        {/* Add more screens as needed within the FirstTab */}
      </Stack.Navigator>
    );
  }

  function SecondTabStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="SecondTabMain" component={LearnPublic} />
        <Stack.Screen name="OtherScreen" component={LearnPublicCourse} />

        {/* Add more screens as needed within the FirstTab */}
      </Stack.Navigator>
    );
  }

  function ThirdTabStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="ThirdTabMain" component={LearnPublic} />
        <Stack.Screen name="OtherScreen" component={LearnPublicCourse} />
        {/* Add more screens as needed within the FirstTab */}
      </Stack.Navigator>
    );
  }

  function FourthTabStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="FourthTabMain" component={LearnPublic} />
        <Stack.Screen name="OtherScreen" component={LearnPublicCourse} />
        {/* Add more screens as needed within the FirstTab */}
      </Stack.Navigator>
    );
  }

  function FifthTabStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="FifthTabMain" component={LearnPublic} />
        <Stack.Screen name="OtherScreen" component={LearnPublicCourse} />
        {/* Add more screens as needed within the FirstTab */}
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      {authenticated ? (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={FirstTabStack} options={{headerShown: false}}/>
          <Tab.Screen name="Learn" component={SecondTabStack} />
          <Tab.Screen name="Health" component={ThirdTabStack} />
          <Tab.Screen name="Community" component={FourthTabStack} />
          <Tab.Screen name="Profile" component={FifthTabStack} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Landing" headerMode="false">
          {/* <Stack.Screen name="Landing" component={LandingPage} /> */}
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
