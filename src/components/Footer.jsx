import { useNavigation, useRoute } from "@react-navigation/native";
import { Facebook, Instagram, Youtube } from "iconsax-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Divider from "./Divider";

const Footer = () => {
  const navigation = useNavigation();
  const route = useRoute();
  
  console.log(route.name)
  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: 40,
            width: "100%",
            alignItems: "center",
            marginTop: 40,
          }}
        >
          <Facebook size="28" color="#000" variant="Bold" />
          <Instagram size="28" color="#000" variant="Outline" />
          <Youtube size="32" color="#000" variant="Bold" />
        </View>
        <Divider mt={40} />
        <View
          style={{
            marginTop: 40,
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            gap: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "TenorSans",
              fontSize: 16,
            }}
          >
            trancongtien406@gmail.com
          </Text>
          <Text
            style={{
              fontFamily: "TenorSans",
              fontSize: 16,
            }}
          >
            +84 3802 802 406
          </Text>
          <Text
            style={{
              fontFamily: "TenorSans",
              fontSize: 16,
            }}
          >
            08:00 - 22:00 - Everyday
          </Text>
        </View>
        <Divider mt={40} />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: 40,
            width: "100%",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => route.name=="About" ? navigation.reset: navigation.navigate("About")}>
            <Text
              style={{
                fontFamily: "TenorSans",
                fontWeight: "bold",
                fontSize: 24,
                marginTop: 40,
              }}
            >
              About
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() =>route.name=="Contact" ? navigation.reset:  navigation.navigate("Contact")}>
            <Text
              style={{
                fontFamily: "TenorSans",
                fontWeight: "bold",
                fontSize: 24,
                marginTop: 40,
              }}
            >
              Contact
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => route.name=="Blog" ? navigation.reset:  navigation.navigate("Blog")}>
            <Text
              style={{
                fontFamily: "TenorSans",
                fontWeight: "bold",
                fontSize: 24,
                marginTop: 40,
              }}
            >
              Blog
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={{
              fontFamily: "TenorSans",
              fontSize: 16,
              marginTop: 40,
            }}
          >
            © 2024 Tien Tran Cong. All rights reserved.
          </Text>
        </View>
      </View>
    </>
  );
};

export default Footer;
