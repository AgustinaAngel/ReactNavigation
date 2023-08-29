import { StatusBar } from 'expo-status-bar';
import appStyles from '../../styles';
import { useState } from 'react';
import * as React from 'react';
import Menu from '../components/Menu';
import {Pressable,Text,View,TouchableOpacity,Button,SafeAreaView,TextInput,} from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator()
 

export default function Screen3() {


  return (
    <>
      <View
        style={{
          flexDirection: "col",
          textAlign: "center",
          textAlignVertical: "auto",
          flex: 1,
        }}
      >
        <View style={{ backgroundColor: 'blue', flex: 15 }}><Text> Hola 3</Text></View>
      <Menu style={{ flex: 2 }}/>
      </View>
    </>
  );
}
