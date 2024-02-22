import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const ButtonCustom = (props) => {
  const filledBgColor = "#40A2E3";
  const outlinedColor = "#fff";
  const bgColor = props.filled ? filledBgColor : outlinedColor;
  const textColor = props.filled ? "#fff" : "#40A2E3";

  return (
    <TouchableOpacity
      style={{
        ...styles.button,
        ...{ backgroundColor: bgColor },
        ...props.style,
      }}
      onPress={props.onPress}
    >
      <Text
        style={{
          fontSize: 18,
          fontFamily: "TenorSans",
          textTransform: "uppercase",
          ...{ color: textColor },
        }}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingBottom: 16,
    paddingVertical: 10,
    borderColor: "#40A2E3",
    borderWidth: 2,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default ButtonCustom;
