import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ProductCard = ({ product, index }) => {
  return (
    <View
      style={{
        width: 160,
      }}
    >
      <Image
        style={{ width: 160, height: 200 }}
        source={
          product != null
            ? product.image
            : require("../../../assets/products/list6.png")
        }
      />
      <TouchableOpacity>
        <Image
          style={{
            width: 22,
            height: 20,
            marginRight: 15,
            alignSelf: "flex-end",
            marginTop: -30,
          }}
          source={require("../../../assets/products/Union.png")}
        />
      </TouchableOpacity>

      <Text style={{ marginTop: 10, fontFamily: "TenorSans", fontSize: 15 }}>
        {product != null ? product.name : "Reversible  "}
      </Text>
      <Text style={{ fontFamily: "TenorSans", fontSize: 13, marginTop: 5, }}>
        {product != null ? product.desc : "reversible angora cardigan."}
      </Text>
      <Text
        style={{
          fontFamily: "TenorSans",
          fontSize: 18,
          marginTop: 10,
          color: "#DD8560",
        }}
      >
        ${product != null ? product.price : "450"}
      </Text>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({});
