import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { cartItems } from "../../data";
const AddNow = ({ PaymentMethodAdded }) => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [isPaymentMethodAdded, setPaymentMethodAdded] =
    useState(PaymentMethodAdded);
  const [isShippingAddressAdded, setShippingAddressAdded] = useState(false);
  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phoneNumber: "",
  });

  const isAddressValid = () => {
    for (const key in shippingAddress) {
      if (!shippingAddress[key]) {
        return false;
      }
    }
    return true;
  };
  const getCartSubTotal = () => {
    return cartItems.reduce(
      (price, item) => price + item.price * item.quantity,
      0
    );
  };

  const handleAddressSave = () => {
    if (isAddressValid()) {
      setShippingAddressAdded(true); // Mark the shipping address as added
      console.log("Shipping Address:", shippingAddress);

      if (isPaymentMethodAdded) {
        // Navigate to the Confirmation screen with the shippingAddress data
        navigation.navigate("Confirmation", { shippingAddress });
      } else {
        console.log("Please add a payment method");
      }
    } else {
      console.log("Please fill out all fields");
    }
  };

  const navigation = useNavigation();

  return (
    <>
      <ScrollView style={styles.cartScreen}>
        <View style={styles.cartScreenLeft}>
          <Text style={styles.cartScreenTitle}>ADD SHIPPING ADDRESS</Text>
          <Image
            style={{ marginTop: 2, marginBottom: 5 }}
            source={require("../../../assets/3.png")}
          />
        </View>

        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <TextInput
            style={{
              borderBottomColor: "#979797",
              borderBottomWidth: 1,
              width: 160,
              height: 45,
              marginLeft: 20,
              fontFamily: "TenorSans",
            }}
            underlineColorAndroid="transparent"
            placeholder="First name"
            placeholderTextColor="#979797"
            onChangeText={(text) =>
              setShippingAddress({ ...shippingAddress, firstName: text })
            }
          />
          <TextInput
            style={{
              borderBottomColor: "#979797",
              borderBottomWidth: 1,
              width: 160,
              height: 45,
              marginLeft: 20,
              fontFamily: "TenorSans",
              marginLeft: 30,
            }}
            underlineColorAndroid="transparent"
            placeholder="Last name"
            placeholderTextColor="#979797"
            onChangeText={(text) =>
              setShippingAddress({ ...shippingAddress, lastName: text })
            }
          />
        </View>

        <TextInput
          style={{
            borderBottomColor: "#979797",
            borderBottomWidth: 1,
            width: 350,
            height: 45,
            marginLeft: 20,
            fontFamily: "TenorSans",
            marginTop: 30,
          }}
          underlineColorAndroid="transparent"
          placeholder="Address"
          placeholderTextColor="#979797"
          onChangeText={(text) =>
            setShippingAddress({ ...shippingAddress, address: text })
          }
        />

        <TextInput
          style={{
            borderBottomColor: "#979797",
            borderBottomWidth: 1,
            width: 350,
            height: 45,
            marginLeft: 20,
            fontFamily: "TenorSans",
            marginTop: 30,
          }}
          underlineColorAndroid="transparent"
          placeholder="City"
          placeholderTextColor="#979797"
          onChangeText={(text) =>
            setShippingAddress({ ...shippingAddress, city: text })
          }
        />

        <View style={{ flexDirection: "row", marginTop: 20 }}>
          <TextInput
            style={{
              borderBottomColor: "#979797",
              borderBottomWidth: 1,
              width: 160,
              height: 45,
              marginLeft: 20,
              fontFamily: "TenorSans",
            }}
            underlineColorAndroid="transparent"
            placeholder="State"
            placeholderTextColor="#979797"
            onChangeText={(text) =>
              setShippingAddress({ ...shippingAddress, state: text })
            }
          />
          <TextInput
            style={{
              borderBottomColor: "#979797",
              borderBottomWidth: 1,
              width: 160,
              height: 45,
              marginLeft: 20,
              fontFamily: "TenorSans",
              marginLeft: 30,
            }}
            underlineColorAndroid="transparent"
            placeholder="ZIP code"
            placeholderTextColor="#979797"
            onChangeText={(text) =>
              setShippingAddress({ ...shippingAddress, zipCode: text })
            }
          />
        </View>

        <TextInput
          style={{
            borderBottomColor: "#979797",
            borderBottomWidth: 1,
            width: 350,
            height: 45,
            marginLeft: 20,
            fontFamily: "TenorSans",
            marginTop: 30,
            marginBottom: 50,
          }}
          underlineColorAndroid="transparent"
          placeholder="Phone Number"
          placeholderTextColor="#979797"
          onChangeText={(text) =>
            setShippingAddress({ ...shippingAddress, phoneNumber: text })
          }
        />

        
      </ScrollView>
      <View style={{}}>
        <View style={styles.cartScreenInfo}>
          <Text style={{ fontFamily: "TenorSans", fontSize: 15 }}>TOTAL</Text>
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
          // Use the function to navigate
        >
          <Image
            style={{ width: 25, height: 25, marginTop: -5, marginRight: 15 }}
            source={require("../../../assets/shopping.png")}
          />
          <Text style={styles.continue}>Check out</Text>
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
    fontSize: 16,
    fontFamily: "TenorSans",
    paddingTop: 15,
    letterSpacing: 2,
  },
  cartScreenRight: {
    flex: 1,
    padding: 20,
    flexDirection: "column",
    marginTop: 55,
  },
  continue: {
    fontFamily: "TenorSans",
    fontSize: 16,
    textAlign: "center",
    color: "white",
  },
  cartScreenInfo: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default AddNow;
