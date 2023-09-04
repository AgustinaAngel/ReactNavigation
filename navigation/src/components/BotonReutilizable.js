import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import appStyles from '../../styles';

const BotonReutilizable = ({ onPress, style, texto }) => {
    const handleOnPress=()=>{
        console.log("HAGO ALGO PREVIO");
        if(typeof onPress === 'function'){
            onPress(); 
        }
    }

  return (
    <TouchableOpacity onPress={handleOnPress} style={[appStyles.buttonContainer, style]}>
      <Text style={appStyles.buttonText1}>{texto}</Text>
    </TouchableOpacity>
  );
};

export default BotonReutilizable;
