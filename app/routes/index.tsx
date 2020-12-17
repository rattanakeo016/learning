import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "react-native-screens/native-stack";
import GetStartContainer from "../screens/getStart/GetStartContainer";
import HomeContainer from "../screens/home/HomeContianer";

const HomeStack = createNativeStackNavigator();

function HOME_STACK() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="HOME" component={HomeContainer} />
      <HomeStack.Screen name="GETSTART" component={GetStartContainer} />
    </HomeStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <HOME_STACK />
    </NavigationContainer>
  );
}
