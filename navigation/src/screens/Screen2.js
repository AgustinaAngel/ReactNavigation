import { StatusBar } from 'expo-status-bar';
import appStyles from '../../styles';
import {Text,View} from "react-native";
import * as React from 'react';
import Menu from '../components/Menu';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator()

export default function Screen2() {


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
        <View style={{ backgroundColor: 'green', flex: 15 }}>
        <Text style={appStyles.textoScreen}>Hola 2</Text>          
        </View>
      <Menu style={{ flex: 2 }}/>
      </View>
    </>
  );
}
