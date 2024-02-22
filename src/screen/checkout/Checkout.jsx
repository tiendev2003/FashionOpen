import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { CartItem } from "../../components";
import { cartItems } from "../../data";

const Checkout = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [fontLoaded, setFontLoaded] = useState(false);
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

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  return (
    <>
      <ScrollView style={styles.cartScreen}>
        <View style={styles.cartScreenLeft}>
          <Text style={styles.cartScreenTitle}>CHECKOUT</Text>
          <Image
            style={{ marginTop: 2, marginBottom: 5 }}
            source={require("../../../assets/3.png")}
          />

          <CartItem />
        </View>
        {cartItems.length > 0 && (
          <>
            <View
              style={{
                flexDirection: "row",
                borderTopWidth: 0.5,
                borderBottomWidth: 0.5,
                marginTop: 20,
                marginLeft: 27,
                borderTopColor: "#B3B0B0",
                borderBottomColor: "#B3B0B0",
              }}
            >
              <TouchableOpacity
                style={{ flexDirection: "row", padding: 15, marginLeft: 15 }}
              >
                <Image
                  style={{ width: 30, height: 30 }}
                  source={require("../../../assets/voucher.png")}
                />
                <Text
                  style={{
                    alignSelf: "center",
                    fontFamily: "TenorSans",
                    fontSize: 15,
                    marginLeft: 15,
                  }}
                >
                  Add promo code
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                borderTopWidth: 0.5,
                borderBottomWidth: 0.5,
                marginTop: 20,
                marginLeft: 27,
                borderTopColor: "#B3B0B0",
                borderBottomColor: "#B3B0B0",
              }}
            >
              <TouchableOpacity
                style={{ flexDirection: "row", padding: 15, marginLeft: 15 }}
              >
                <Image
                  style={{ width: 30, height: 30 }}
                  source={require("../../../assets/door-to-door.png")}
                />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text
                    style={{
                      alignSelf: "center",
                      fontFamily: "TenorSans",
                      fontSize: 15,
                      marginLeft: 15,
                    }}
                  >
                    Delivery
                  </Text>
                  <Text
                    style={{
                      alignSelf: "center",
                      fontFamily: "TenorSans",
                      fontSize: 15,
                      marginLeft: 15,
                    }}
                  >
                    Free
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </>
        )}
      </ScrollView>
      <View>
        <View style={styles.cartScreenInfo}>
          <Text style={{ fontFamily: "TenorSans", fontSize: 15 }}>
            EST. TOTAL
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

        <TouchableOpacity
          style={{
            backgroundColor: "black",
            padding: 25,

            flexDirection: "row",
            justifyContent: "center",
           marginBottom: 20,
          }}
          onPress={() => navigation.navigate("PlaceOrder")}
        >
          <Image
            style={{
              width: 25,
              height: 25,
              marginTop: -5,
              marginRight: 15,
            }}
            source={require("../../../assets/shopping.png")}
          />

          <Text style={styles.continue}>CHECKOUT</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  cartScreen: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },
  cartScreenLeft: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  cartScreenTitle: {
    fontSize: 20,
    fontFamily: "TenorSans",
    paddingTop: 15,
    letterSpacing: 2,
  },

  cartScreenInfo: {
    flexDirection: "row",
    margin: 20,
    justifyContent: "space-between",
  },

  continue: {
    fontFamily: "TenorSans",
    fontSize: 16,
    textAlign: "center",
    color: "white",
  },
  container: {
    backgroundColor: "#white",
    flex: 0.08,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  menu: {
    flex: 1,
    backgroundColor: "white", // Change this to your menu background color
    paddingTop: 50,
    paddingHorizontal: 20,
  },
});

export default Checkout;
