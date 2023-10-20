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
