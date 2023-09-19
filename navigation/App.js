import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import LoginScreen from "./src/screens/LoginScreen";
import Menu from "./src/components/Menu";
import Screen1 from "./src/screens/Screen1"; 
import Screen2 from "./src/screens/Screen2";
import Screen3 from "./src/screens/Screen3";
import { SafeAreaView } from "react-native";
import SplashScreen from "./src/screens/SplashScreen";




const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{  headerShown: false }}
        />
        <Stack.Screen
          name="Screen1"
          component={Screen1}
          options={{  headerShown: false }}
        />
        <Stack.Screen
          name="Screen2"
          component={Screen2}
          options={{  headerShown: false }}
        />
        <Stack.Screen
          name="Screen3"
          component={Screen3}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}