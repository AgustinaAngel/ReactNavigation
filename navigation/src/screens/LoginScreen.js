import { StatusBar } from "expo-status-bar";
import {Pressable,Text,View,TouchableOpacity,Button,SafeAreaView,TextInput,} from "react-native";
import { Image } from "react-native";
import appStyles from "../../styles.js";
import { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

const LoginScreen = ({ navigation }) => {
    const [usuario, setUsuario] = useState("");
    const [clave, setClave] = useState("");
  
    const handlePress = () => {
      navigation.navigate("Screen1");
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
            />
          </View>
          <Text> {"\n"} </Text>
  
          <View style={appStyles.inputContainer}>
    
            <TextInput
              style={appStyles.input}
              placeholder="Clave..."
              onChangeText={setClave}
              value={clave}
            />
          </View>
          <Text> {"\n"} </Text>
  
          <TouchableOpacity onPress={handlePress}>
            <Text style={appStyles.buttonText}>Ingresar</Text>
          </TouchableOpacity>
  
          <StatusBar style="auto" />
        </View>
    );
  };
  export default LoginScreen;