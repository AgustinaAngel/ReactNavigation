import { StatusBar } from 'expo-status-bar';
import appStyles from '../../styles';
import {Pressable,Text,View,TouchableOpacity,Button,SafeAreaView,TextInput,} from "react-native";
import { useState } from 'react';
import * as React from 'react';
import Menu from '../components/Menu';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator()
 

export default function Screen1() {


  return (
    <>
    <View style={appStyles.backgroundScreen1} >
    <Text> Hola 1</Text>
    </View>
   <Menu/>
   </>
  );
}