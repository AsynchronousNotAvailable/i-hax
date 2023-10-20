import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useState } from "react";
import LearnPublic from "./screens/Learn_Public";
import LearnPublicCourse from "./screens/Learn_Public_Course";
import LandingPage from "./screens/Landing_Page";
import LoginPage from "./screens/Login_Page";
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


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function AppNav() {
  const [authenticated, setAuthenticated] = useState(false);

  function FirstTabStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="FirstTabMain" component={LearnPublic} />
        <Stack.Screen name="OtherScreen" component={LearnPublicCourse} />
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
        <Stack.Screen name="ThirdTabMain" component={Health} options={{title: 'Mental Health', headerTitleAlign: 'center'}}/>
        <Stack.Screen name="HealthStress1" component={HealthStress1} options={{title: 'Assessment', headerTitleAlign: 'center'}}/>
        <Stack.Screen name="HealthStress2" component={HealthStress2} options={{title: 'Assessment', headerTitleAlign: 'center'}}/>
        <Stack.Screen name="HealthStress3" component={HealthStress3} options={{title: 'Assessment', headerTitleAlign: 'center'}}/>
        <Stack.Screen name="HealthStress4" component={HealthStress4} options={{title: 'Assessment', headerTitleAlign: 'center'}}/>
        <Stack.Screen name="HealthStress5" component={HealthStress5} options={{title: 'Assessment', headerTitleAlign: 'center'}}/>
        <Stack.Screen name="HealthStressResult" component={HealthStressResult} options={{title: 'Results', headerTitleAlign: 'center'}}/>
        <Stack.Screen name="HealthJournal" component={HealthJournal} options={{title: 'Journal', headerTitleAlign: 'center'}}/>
        <Stack.Screen name="HealthJournalPost" component={HealthJournalPost} options={{title: 'New Journal Entry', headerTitleAlign: 'center'}}/>
        <Stack.Screen name="HealthMeditation" component={HealthMeditation} options={{title: 'Meditation', headerTitleAlign: 'center'}}/>
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
          <Tab.Screen name="Home" component={FirstTabStack} />
          <Tab.Screen name="Learn" component={SecondTabStack} />
          <Tab.Screen name="Health" component={ThirdTabStack} options={{ headerShown: false, }}/>
          <Tab.Screen name="Community" component={FourthTabStack} />
          <Tab.Screen name="Profile" component={FifthTabStack} />
        </Tab.Navigator>
      ) : (
        <Stack.Navigator initialRouteName="Landing" headerMode="false">
          <Stack.Screen name="Landing" component={LandingPage} />
            <Stack.Screen name="Login" component={LoginPage} initialParams={{ setAuthenticated: setAuthenticated }} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
