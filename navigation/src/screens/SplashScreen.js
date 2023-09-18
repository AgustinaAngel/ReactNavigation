import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import UsuarioService from '../services/UsuarioService';

const SplashScreen = ({ navigation }) => { // Agrega navigation como argumento
  const [esValido, setEsValido] = useState(false);

  useEffect(() => {
    const onLoad = async () => {
      await new Promise(resolve => setTimeout(resolve, 5000));
      
    };
    

    onLoad();
    const esValido = UsuarioService.automaticLogin();
    setEsValido(esValido); // Actualiza el estado después de la comprobación
  if (esValido) {
    navigation.navigate("Screen1");
  }
  else{
    navigation.navigate("LoginScreen");
  }
  
    return () => {
      // Lógica de limpieza (si es necesario).
    };
  }, []);



  return (
    <View style={styles.container}>
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
