import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import appStyles from "../../styles.js";
import Icon from "react-native-vector-icons/FontAwesome"; // Importa el icono que desees


const Menu = () => {
  const navigation = useNavigation(); 

  return (
    <View style={appStyles.menuContainer}>
      <TouchableOpacity onPress={() => navigation.navigate("Screen1")}>
      <Text>
        <Icon name="book" style={appStyles.botonMenu1} /> 
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Screen2")}>
        <Text>
        <Icon name="user" style={appStyles.botonMenu2} /> 
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Screen3")}>
      <Text>
        <Icon name="search" style={appStyles.botonMenu3} /> 
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Menu;
