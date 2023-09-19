import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, StyleSheet, Image } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";


import { UsuarioService } from '../services/UsuarioService'; // Importa UsuarioService correctamente
import appStyles from "../../styles.js";


const Stack = createStackNavigator();

const SplashScreen = ({ navigation }) => {
  const [esValido, setEsValido] = useState(false);

  useEffect(() => {
    const onLoad = async () => {
      // Simula una carga durante 5 segundos (5000 ms)
      await new Promise(resolve => setTimeout(resolve, 5000)); // 5 segundos
      const esValido = await UsuarioService.automaticLogin();
      setEsValido(esValido);
      console.log("SPLHAS555");
    };
    console.log("SPLHAS1");
    onLoad();

    return () => {
      console.log("SPLHAS");
      // Lógica de limpieza (si es necesario).
    };
  }, []);

  useEffect(() => {
    if (esValido) {
      navigation.navigate("Screen1");
      console.log("SPLHAS3");
    } else {
      navigation.navigate("LoginScreen");
      console.log("SPLHAS4");
    }
  }, [esValido, navigation]);

  return (
    <View style={styles.container}>
      <Image
        style={appStyles.imagenLogo}
        source={require("../../assets/LOGO.png")}
        resizeMode="contain"
      />
      <ActivityIndicator size="large" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default SplashScreen;