import { StatusBar } from "expo-status-bar";
import appStyles from "../../styles";
import {Text,View} from "react-native";
import Menu from "../components/Menu";
import UsuarioService from "../services/UsuarioService";
import{Alert}from'react-native'; 
import { createStackNavigator } from "@react-navigation/stack";
import BotonReutilizable from '../components/BotonReutilizable';

const Stack = createStackNavigator();

export default function Screen1() {
  const handleOnPress = async () => {
    console.log("MOSTRAR ASYNC");
    try {
      const asyncInfo = await UsuarioService.obtenerCredencialesVer();
    Alert.alert("ASYNCSTORAGE: " , JSON.stringify(asyncInfo));
    } catch (error) {
      console.error("Error al obtener almacenamiento asíncrono:", error);
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
        <View style={{ backgroundColor: 'red', flex: 15 }}>
        <Text style={appStyles.textoScreen}>Hola 1</Text>     
        <BotonReutilizable
          onPress={handleOnPress}
          style={appStyles.logInButton}
          texto={'Ver Async storage'}
        />     
          </View>
      <Menu style={{ flex: 2 }}/>
      </View>

    </>
  );
}
