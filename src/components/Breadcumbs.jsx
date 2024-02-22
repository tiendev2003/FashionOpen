import { useRoute } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
const Breadcumbs = () => {
  const route = useRoute();
  console.log(route)
  return (
    <View>
      <Text>Breadcumbs</Text>
    </View>
  );
};

export default Breadcumbs;

const styles = StyleSheet.create({});
