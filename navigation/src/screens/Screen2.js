import { StatusBar } from "expo-status-bar";
import appStyles from "../../styles";
import { Text, View, ToastAndroid } from "react-native";
import * as React from "react";
import Menu from "../components/Menu";
import UsuarioService from "../services/UsuarioService";
import { createStackNavigator } from "@react-navigation/stack";
import BotonReutilizable from "../components/BotonReutilizable";
const Stack = createStackNavigator();
import MessageConstants from "./../constants/MessageConstants";

export default function Screen2() {
  function showToast() {
    ToastAndroid.show(
      MessageConstants.MSG_ASYNC_SE_HAN_ELIMINADO_LOS_DATOS,
      ToastAndroid.SHORT
    );
  }
  const handleOnPress = async () => {
    try {
      await UsuarioService.eliminarCredenciales();
      showToast();
    } catch (error) {
      console.error(
        MessageConstants.MSG_ASYNC_SE_HAN_ELIMINADO_LOS_DATOS_ERROR,
        error
      );
    }
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
        <View style={{ backgroundColor: "green", flex: 15 }}>
          <Text style={appStyles.textoScreen}>Hola 2</Text>
          <BotonReutilizable
            onPress={handleOnPress}
            style={appStyles.logoutButton}
            texto={"ELIMINAR DATOS"}
          />
        </View>
        <Menu style={{ flex: 2 }} />
      </View>
    </>
  );
}
