import { useNavigation } from "@react-navigation/native";
import { Star1 } from "iconsax-react-native";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const ProductCart = ({ product, index }) => {
  const [selectedSize, setSelectedSize] = useState("");
  const navigation = useNavigation();
  const isSizeSelected = (size) => {
    return size === selectedSize ? { backgroundColor: "#E0CFBA" } : {};
  };

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  return (
    <View
      key={index}
      style={{ marginTop: 30, marginLeft: 20, flexDirection: "row" }}
    >
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("SingleProduct", {
            selectedProductIndex: index,
          })
        }
      >
        <Image
          style={{ width: 110, height: 140, marginRight: 15 }}
          source={product.image}
        />
      </TouchableOpacity>
      <View>
        <Text
          style={{
            fontFamily: "TenorSans",
            fontSize: 13.5,
            letterSpacing: 2,
            marginBottom: 10,
          }}
        >
          {product.name}
        </Text>
        <Text
          style={{
            fontFamily: "TenorSans",
            fontSize: 11.5,
            color: "#555555",
          }}
        >
          {product.desc}
        </Text>
        <Text style={styles.productPrice}>${product.price}</Text>

        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Star1 size="15" color="#FF8A65" />
          <Text
            style={{
              fontFamily: "TenorSans",
              fontSize: 14,
              color: "#555555",
            }}
          >
            {product.ratings} ratings
          </Text>
        </View>

        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Text style={styles.size1}>Size</Text>
          <TouchableOpacity
            style={[styles.selection, isSizeSelected("S")]}
            onPress={() => handleSizeSelection("S")}
          >
            <Text style={styles.size}>S</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.selection, isSizeSelected("M")]}
            onPress={() => handleSizeSelection("M")}
          >
            <Text style={styles.size}>M</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.selection, isSizeSelected("L")]}
            onPress={() => handleSizeSelection("L")}
          >
            <Text style={styles.size}>L</Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              style={{
                width: 22,
                height: 20,
                marginLeft: 50,
                alignSelf: "center",
              }}
              source={require("../../../assets/products/Union.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductCart;

const styles = StyleSheet.create({
  container: {
    flex: 0.08,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  text: {
    fontSize: 16,
    color: "brown",
  },
  image1: {
    width: 35,
    height: 35,
    marginRight: 0,
    marginLeft: -120,
  },
  menu: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  listHeader: {
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 10,
  },
  listText: {
    fontFamily: "TenorSans",
    marginTop: 20,
    fontSize: 15,
    letterSpacing: 1,
    marginRight: 10,
  },
  listText2: {
    fontFamily: "TenorSans",
    marginTop: 20,
    fontSize: 15,
    letterSpacing: 1,
    marginRight: 5,
    marginLeft: 55,
  },
  productPrice: {
    color: "#DD8560",
    fontFamily: "TenorSans",
    fontSize: 16,
    marginTop: 10,
  },

  size1: {
    fontFamily: "TenorSans",
    fontSize: 14,
    color: "#555555",
    alignSelf: "center",
  },

  size: {
    fontFamily: "TenorSans",
    fontSize: 13,
    color: "#555555",
    alignSelf: "center",
  },

  selection: {
    width: 25,
    height: 25,
    marginLeft: 10,
    borderRadius: 30,
    borderWidth: 0.5,
    borderColor: "#555555",
    justifyContent: "center",
    alignItems: "center",
  },
  page: {
    padding: 5,
    width: 28,
    backgroundColor: "#DEDEDE",
    marginRight: 10,
    textAlign: "center",
  },
  selectedpage: {
    padding: 5,
    width: 28,
    backgroundColor: "#333333",
    marginRight: 10,
    textAlign: "center",
    color: "white",
  },
  socials: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 1,
    marginTop: 10,
  },
  icons: {
    marginTop: 30,
    width: 25,
    height: 25,
    marginRight: 20,
    marginBottom: 30,
  },
});
