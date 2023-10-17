import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import LearnPublic from "./screens/Learn_Public";
import LearnPublicCourse from "./components/Module2/Learn_Public_Course";
import LandingPage from "./screens/Landing_Page";
import LoginPage from "./screens/Login_Page";
import Learn_UM from "./screens/Learn_UM";
import Learn_Page from "./screens/Learn_Page";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

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
        <Stack.Screen name="LearnPage" component={Learn_Page} options={{ headerShown: false }} />
        {/* <Stack.Screen name="LearnPublic" component={LearnPublic} />
        <Stack.Screen name="LearnUM" component={Learn_UM} /> */}
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
        <Stack.Screen name="FourthTabMain" component={LearnPublic} />
        <Stack.Screen name="CourseDetails" component={LearnPublicCourse} />
        {/* Add more screens as needed within the FirstTab */}
      </Stack.Navigator>
    );
  }

  function FifthTabStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="FifthTabMain" component={LearnPublic} />
        <Stack.Screen name="CourseDetails" component={LearnPublicCourse} />
        {/* Add more screens as needed within the FirstTab */}
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      {authenticated ? (
        <Tab.Navigator>
          {/* <Tab.Screen name="Home" component={FirstTabStack} /> */}
          <Tab.Screen name="Learn" component={SecondTabStack} />
          <Tab.Screen name="Health" component={ThirdTabStack} />
          <Tab.Screen name="Community" component={FourthTabStack} />
          <Tab.Screen name="Profile" component={FifthTabStack} />
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
