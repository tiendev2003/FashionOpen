import React from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Divider, Footer } from "../../components";

const ContactScreen = () => {
  

  

  return (
    <ScrollView style={{ backgroundColor: "white" }}  >
      <View style={styles.ScreenLeft}>
        <Text style={styles.ScreenTitle}>CONTACT</Text>
        <Divider />
      </View>
      <View>
        <Image
          style={{ marginTop: 32, alignSelf: "center", width: 50, height: 50 }}
          source={require("../../../assets/3.png")}
        />
        <Text
          style={{
            fontFamily: "TenorSans",
            fontSize: 15,
            padding: 15,
            lineHeight: 25,
          }}
        >
          Need an ASAP answer? Contact us via chat, 24/7! For existing furniture
          orders, please call us.
        </Text>
      </View>

      <View style={styles.cartScreenRight}>
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            padding: 20,
            width: 200,
            marginLeft: -20,
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 45,
            alignSelf: "center",
          }}
        >
          <Text style={styles.continue}>CHAT WITH US</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Image
          style={{ marginTop: 32, alignSelf: "center", width: 50, height: 50 }}
          source={require("../../../assets/brown2.png")}
        />

        <Text
          style={{
            fontFamily: "TenorSans",
            fontSize: 15,
            padding: 15,
            lineHeight: 25,
          }}
        >
          You can text us at 800-309-2622 – or click on the “text us” link below
          on your mobile device. Please allow the system to acknowledge a simple
          greeting (even “Hi” will do!) before providing your question/order
          details. Consent is not required for any purchase. Message and data
          rates may apply. Text messaging may not be available via all carriers.
        </Text>
      </View>
      <View style={styles.cartScreenRight}>
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            padding: 20,
            width: 200,
            marginLeft: -20,
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 45,
            alignSelf: "center",
          }}
        >
          <Text style={styles.continue}>TEXT US</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Image
          style={{ marginTop: 32, alignSelf: "center", width: 50, height: 50 }}
          source={require("../../../assets/brown1.png")}
        />

        <Text
          style={{
            fontFamily: "TenorSans",
            fontSize: 15,
            padding: 15,
            lineHeight: 25,
          }}
        >
          To send us a private or direct message, like @Open Fashion on Facebook
          or follow us on Twitter. We’ll get back to you ASAP. Please include
          your name, order number, and email address for a faster response!
        </Text>
      </View>

      <Footer/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Screen: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white",
  },
  ScreenLeft: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  ScreenTitle: {
    fontSize: 18,
    fontFamily: "TenorSans",
    paddingTop: 15,
    letterSpacing: 2,
  },
  cartScreenRight: {
    paddingBottom: 0,
    padding: 20,
    flexDirection: "column",
    marginTop: -45,
  },
  continue: {
    fontFamily: "TenorSans",
    fontSize: 16,
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
    marginRight: 30,
    marginBottom: 25,
  },
});

export default ContactScreen;
