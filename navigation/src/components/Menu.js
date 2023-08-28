import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import appStyles from "../../styles.js";

const Menu = () => {
  const navigation = useNavigation(); 

  return (
    <SafeAreaView style={{ flex: 1 }}>
          <View style={appStyles.posBotton}>
      <View style={{ flex: 2 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Screen1")}
          style={appStyles.buttonText}
        >
          <Text>1</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 2 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Screen2")}
          style={appStyles.buttonText}
        >
          <Text>2</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 2 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Screen3")}
          style={appStyles.buttonText}
        >
          <Text>3</Text>
        </TouchableOpacity>
      </View>
      </View>
    </SafeAreaView>
  );
};

export default Menu;
