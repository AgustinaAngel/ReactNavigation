import { StatusBar } from 'expo-status-bar';
import appStyles from '../../styles';
import { useState } from 'react';
import {Pressable,Text,View,TouchableOpacity,Button,SafeAreaView,TextInput,} from "react-native";
import * as React from 'react';
import Menu from '../components/Menu';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator()
 

export default function Screen2() {


  return (
<>
    <View style={appStyles.backgroundScreen2} >
    <Text> Hola 2</Text>
    </View>
   <Menu/>
   </>
  );
}