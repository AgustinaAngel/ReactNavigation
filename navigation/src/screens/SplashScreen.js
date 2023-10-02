import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, StyleSheet, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import UsuarioService from "../services/UsuarioService";
import appStyles from "../../styles.js";

const Stack = createStackNavigator();
const SplashScreen = ({ navigation }) => {
  const [esValido, setEsValido] = useState(false);
  const confirmarInicioSesion = async () => {
    if (await UsuarioService.automaticLoginVer()) {
      navigation.navigate("Screen1");
    } else {
      navigation.navigate("LoginScreen");
    }
  };

  useEffect(() => {
    setTimeout(confirmarInicioSesion, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={appStyles.imagenLogo}
        source={require("../../assets/LOGO.png")}
      />
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SplashScreen;
