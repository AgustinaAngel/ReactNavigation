import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import appStyles from "../../styles.js";

const Menu = () => {
  const navigation = useNavigation(); 

  return (
        <View style={appStyles.menuContainer}>
    
          <TouchableOpacity
            onPress={() => navigation.navigate("Screen1")}
            
          >
            <Text style={appStyles.botonMenu1}>1</Text>
          </TouchableOpacity>
      

       
          <TouchableOpacity
            onPress={() => navigation.navigate("Screen2")}
          >
            <Text style={appStyles.botonMenu2}>2</Text>
          </TouchableOpacity>
 

       
          <TouchableOpacity
            onPress={() => navigation.navigate("Screen3")}
          >
            <Text style={appStyles.botonMenu3}>3</Text>
          </TouchableOpacity>
        
      </View>
  );
};

export default Menu;
