import { useNavigation } from "@react-navigation/native";
import { ShoppingBag } from "iconsax-react-native";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { CartItem } from "../../components";
import { cartItems } from "../../data";
const CartScreen = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const navigation = useNavigation();

  const getCartCount = () => {
    return cartItems.reduce(
      (quantity, item) => Number(item.quantity) + quantity,
      0
    );
  };

  const getCartSubTotal = () => {
    return cartItems.reduce(
      (price, item) => price + item.price * item.quantity,
      0
    );
  };

  return (
    <ScrollView  >
      <View style={styles.cartScreenLeft}>
        <Text style={styles.cartScreenTitle}>CART</Text>
        <CartItem />
      </View>

      {cartItems.length > 0 && (
        <View style={styles.cartScreenRight}>
          <Image
            style={{ width: 360, marginBottom: 20, height: 2 }}
            source={require("../../../assets/line.png")}
          />
          <View style={styles.cartScreenInfo}>
            <Text style={{ fontFamily: "TenorSans", fontSize: 15 }}>
              SUB TOTAL
            </Text>
            <Text
              style={{
                color: "#DD8560",
                fontFamily: "TenorSans",
                fontSize: 17,
              }}
            >
              ${getCartSubTotal()}
            </Text>
          </View>
          <Text
            style={{
              fontFamily: "TenorSans",
              fontSize: 15,
              color: "#9F9E9E",
              lineHeight: 26,
              marginTop: 8,
              width: 320,
              marginBottom: 80,
            }}
          >
            shipping charges, taxes and discount codes are calculated at the
            time of accounting.
          </Text>

          <TouchableOpacity
            style={{
              paddingVertical: 25,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              gap: 10,
              backgroundColor: "#000",
            }}
            onPress={() => navigation.navigate("Checkout")}
          >
            <ShoppingBag size="25" color="#FF8A65" />

            <Text style={styles.continue}>BUY NOW</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cartScreen: {
    flex: 1,
    width: "100%",
    flexDirection: "column",
  },
  cartScreenLeft: {
    flex: 1,
    padding: 10,
  },
  cartScreenTitle: {
    fontSize: 20,
    fontFamily: "TenorSans",
    paddingTop: 15,
    letterSpacing: 2,
  },
  cartScreenRight: {
    flex: 1,
    padding: 20,
    flexDirection: "column",
    // marginTop: 180,
  },
  cartScreenInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  continue: {
    fontFamily: "TenorSans",
    fontSize: 16,
    textAlign: "center",
    color: "white",
  },
});

export default CartScreen;
