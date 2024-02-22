import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { cartItems } from "../data";
const CartItem = ({ id }) => {
 
  const navigation = useNavigation();
 
  const increase = () => {
    toggleAmount(id, "inc");
  };

  const decrease = () => {
    toggleAmount(id, "dec");
  };

  if (cartItems.length === 0) {
    return (
      <View>
        <Text style={styles.noitems}>
          You have no items in your Shopping Bag.
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            padding: 25,
            width: 400,
            marginLeft: -10,
            flexDirection: "row",
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("ProductList")}
        >
          <Image
            style={{ width: 25, height: 25, marginTop: -5, marginRight: 15 }}
            source={require("../../assets/shopping.png")}
          />
          <Text style={styles.continue}>CONTINUE SHOPPING</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const renderItem = (cartItem) => {
    const {
      id,
      name: productName,
      desc,
      imageUrl,
      price,
      countInStock,
      quantity,
    } = cartItem;

    return (
      <View style={styles.cartItem} key={id}>
        <Image source={imageUrl} style={styles.cartItemImage} />
        <View style={{ flexDirection: "column", marginLeft: 20 }}>
          <TouchableOpacity>
            <Text style={styles.cartItemName}>{productName}</Text>
          </TouchableOpacity>
          <Text style={styles.cartItemDesc}>{desc}</Text>

          <View style={{ flexDirection: "row", marginTop: 15 }}>
            <TouchableOpacity onPress={decrease}>
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../../assets/minus.png")}
              />
            </TouchableOpacity>

            <Text
              style={{
                fontFamily: "TenorSans",
                fontSize: 16,
                marginLeft: 20,
                marginRight: 20,
              }}
            >
              {quantity}
            </Text>

            <TouchableOpacity onPress={increase}>
              <Image
                style={{ width: 20, height: 20 }}
                source={require("../../assets/pluss.png")}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.cartItemPrice}>${price}</Text>
        </View>
      </View>
    );
  };

  return (
    <View>
      {cartItems.map((item, index) => (
        <View key={item.id}>{renderItem(item)}</View>
      ))}
    </View>
  );
};

const styles = {
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginLeft: 20,
  },
  cartItemImage: {
    width: 100,
    height: 150,
  },
  cartItemName: {
    fontSize: 16,
    fontFamily: "TenorSans",
  },

  cartItemDesc: {
    fontSize: 14,
    width: 240,
    marginTop: 10,
    fontFamily: "TenorSans",
  },

  cartItemPrice: {
    fontSize: 16,
    marginTop: 20,
    color: "#DD8560",
    fontFamily: "TenorSans",
  },
  cartItemSelect: {
    width: 100,
  },
  cartItemDeleteBtn: {
    backgroundColor: "red",
    padding: 5,
    borderRadius: 5,
  },
  noitems: {
    fontFamily: "TenorSans",
    textAlign: "center",
    marginTop: 300,
    marginBottom: 300,
    color: "#9F9E9E",
  },
  continue: {
    fontFamily: "TenorSans",
    fontSize: 16,
    textAlign: "center",
    color: "white",
  },
};

export default CartItem;
