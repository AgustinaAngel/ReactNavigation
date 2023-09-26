import { StatusBar } from "expo-status-bar";
import {Text,View,TextInput,} from "react-native";
import { Image } from "react-native";
import UsuarioService from "../services/UsuarioService";
import appStyles from "../../styles.js";
import BotonReutilizable from '../components/BotonReutilizable';
import { useState, useRef } from "react";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
import{Alert}from'react-native'; 

const LoginScreen = ({ navigation }) => {
    const [usuario, setUsuario] = useState("");
    const [clave, setClave] = useState("");
    const passwordRef=useRef();
    const handleOnPress = async () => {
      const loginExitoso = await UsuarioService.login(usuario, clave);
    
      if (loginExitoso) {
        navigation.navigate("Screen1");
       await UsuarioService.almacenarCredenciales(usuario, clave);
        
      } else {
        const texto="Ingrese nuevamente los datos"; 
        Alert.alert('LOGUEO INCORRECTO',texto);
      }
    };
    return (
        <View style={appStyles.container}>
          <Image
            style={appStyles.imagenLogo}
            source={require("../../assets/LOGO.png")}
            resizeMode="contain"
          />
  
          <View style={appStyles.inputContainer}>
            <TextInput
              style={appStyles.input}
              placeholder="Usuario..."
              onChangeText={setUsuario}
              value={usuario}
              returnKeyType='next' 
              onSubmitEditing={()=>{
                passwordRef.current.focus();
              }} 
              blurOnSubmit={false}
            />
          </View>
          <Text> {"\n"} </Text>
  
          <View style={appStyles.inputContainer}>
    
            <TextInput
              style={appStyles.input}
              placeholder="Clave..."
              onChangeText={setClave}
              value={clave}
              ref={passwordRef} 
              secureTextEntry
            />
          </View>
          <Text> {"\n"} </Text>
  
          <BotonReutilizable
          onPress={handleOnPress}
          style={appStyles.logInButton}
          texto={'Ingresar'}
        />
          <StatusBar style="auto" />
        </View>
    );
  };
  export default LoginScreen;