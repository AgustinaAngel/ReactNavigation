import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import appStyles from "../../styles.js";

const Menu = () => {
  const navigation = useNavigation(); 

  return (
        <View style={appStyles.posBotton}>
        <View style={{ flex: 2 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Screen1")}
            
          >
            <Text style={appStyles.buttonText}>1</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 2 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Screen2")}
          >
            <Text style={appStyles.buttonText}>2</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 2 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Screen3")}
          >
            <Text style={appStyles.buttonText}>3</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
};

export default Menu;
