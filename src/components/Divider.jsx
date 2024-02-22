import React from "react";
import { View } from "react-native";

const Divider = ({ mt, mb, backgroundColor, sty, w }) => {
  return (
    <View
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          marginTop: mt ?? 20,
          marginBottom: mb ?? 0,
          width: w ?? "50%",
        },
        sty,
      ]}
    >
      <View
        style={{
          flex: 1,
          height: 0.8,
          backgroundColor: backgroundColor ?? "#555555",
        }}
      />
      <View
        style={{
          width: 10,
          height: 10,
          borderColor: backgroundColor ?? "#000",
          borderWidth: 1,
          backgroundColor: backgroundColor ?? null,
          transform: [{ rotate: "45deg" }],
        }}
      />

      <View
        style={{
          flex: 1,
          height: 0.8,
          backgroundColor: backgroundColor ?? "#555555",
        }}
      />
    </View>
  );
};

export default Divider;
