import { StatusBar } from "expo-status-bar";
import appStyles from "../../styles";
import { useState } from "react";
import * as React from "react";
import Menu from "../components/Menu";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import BotonReutilizable from "../components/BotonReutilizable";
const Stack = createStackNavigator();

export default function Screen3() {
  const navigation = useNavigation();
  const handleOnPress = () => {
    navigation.navigate("LoginScreen");
  };
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
        <View style={{ backgroundColor: "blue", flex: 10 }}>
          <Text style={appStyles.textoScreen}>Hola 3</Text>

          <BotonReutilizable
            onPress={handleOnPress}
            style={appStyles.logoutButton}
            texto={"LOGOUT"}
          />
        </View>
        <Menu style={{ flex: 2 }} />
      </View>
    </>
  );
}
