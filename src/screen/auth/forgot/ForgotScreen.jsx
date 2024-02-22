import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ButtonCustom } from "../../../components";

const ForgotScreen = () => {
  const navigation= useNavigation()
  const [email, setEmail] = useState("");
  return (
    <>
      <ScrollView>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 100,
          }}
        >
          <Text
            style={{
              fontFamily: "TenorSans",
              fontSize: 30,
            }}
          >
            OpenFashion
          </Text>
        </View>
        <View
          style={{
            marginTop: 40,
          }}
        >
          <Text
            style={{
              fontSize: 26,
              fontWeight: 400,
              marginVertical: 8,
              fontFamily: "TenorSans",
              textAlign: "center",
            }}
          >
            Forgot Password
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 400,
              marginVertical: 8,
              fontFamily: "TenorSans",
              textAlign: "center",
            }}
          >
            Don’t worry! It happens. Please enter the email associated with your
            account.
          </Text>
          <View
            style={{
              borderWidth: 1,
              borderRadius: 8,
              alignItems: "center",
              justifyContent: "center",
              padding: 18,
              marginHorizontal: 30,
            }}
          >
            <TextInput
              placeholder="Enter your email address"
              placeholderTextColor={"#000"}
              keyboardType="email-address"
              style={{
                fontFamily: "TenorSans",
                width: "100%",
              }}
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
          </View>
          <ButtonCustom
            title="Send"
            filled
            style={{ marginTop: 20, marginHorizontal: 30 }}
          />
        </View>
      </ScrollView>
      <View
        style={{
          marginBottom: 30,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Text
          style={{
            textAlign: "center",

            fontFamily: "TenorSans",
            fontSize: 16,
          }}
        >
          Remember Password?
        </Text>
        <TouchableOpacity onPress={()=>{
          navigation.goBack()
          navigation.navigate("Login")
        }}>
          <Text
            style={{
              fontFamily: "TenorSans",
              fontSize: 16,
              color: "#40A2E3",
              textDecorationLine: "underline",
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ForgotScreen;

const styles = StyleSheet.create({});
