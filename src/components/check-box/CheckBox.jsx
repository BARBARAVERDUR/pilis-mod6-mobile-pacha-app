import React from "react";
import { View, Text, TouchableOpacity} from "react-native";

export const Checkbox = ({ option, selectedOption, onSelect }) => {
  const isSelected = selectedOption === option;

  const handleCheckboxPress = () => {
    onSelect(option);
  };

  return (
    <TouchableOpacity onPress={handleCheckboxPress}>
      <View style={isSelected ? styles.selectedContainer : styles.container}>
        <Text style={isSelected ? styles.selectedText : styles.text}>
          {option}
        </Text>
      </View>
    </TouchableOpacity>
  );
};


