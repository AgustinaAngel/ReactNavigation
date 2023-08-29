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


const Stack = createNativeStackNavigator();

export default function App() {
  //const insets = useSafeAreaInsets();
  return (
    <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="LoginScreen">
            <Stack.Screen
              name="LoginScreen"
              component={LoginScreen}
              options={{ title: "Menu", headerShown: false }}
            />
            <Stack.Screen
              name="Screen1"
              component={Screen1}
              options={{ title: "Screen1", headerShown: false }}
            />
            <Stack.Screen
              name="Screen2"
              component={Screen2}
              options={{ title: "Screen2", headerShown: false }}
            />
            <Stack.Screen
              name="Screen3"
              component={Screen3}
              options={{ title: "Screen3", headerShown: false }}
            />
            <Stack.Screen name="Profile" component={LoginScreen} />
          </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaView>

  );
}
