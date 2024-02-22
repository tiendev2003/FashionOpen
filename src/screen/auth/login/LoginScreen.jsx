import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Image,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { ButtonCustom } from "../../../components";

const LoginScreen = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
  });

  const onSubmit = async () => {};

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <KeyboardAwareScrollView>
        <View style={{ flex: 1, marginHorizontal: 22 }}>
          <View style={{ marginVertical: 22 }}>
            <Text
              style={{
                fontSize: 22,
                fontWeight: "bold",
                marginVertical: 12,
                fontFamily: "TenorSans",
                color: "#000",
              }}
            >
              Hi Welcome Back ! 👋
            </Text>

            <Text
              style={{
                fontSize: 16,
                color: "#000",
                fontFamily: "TenorSans",
              }}
            >
              Hello again you have been missed!
            </Text>
          </View>

          <View style={{ marginBottom: 12 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 400,
                marginVertical: 8,
                fontFamily: "TenorSans",
              }}
            >
              Email address
            </Text>

            <View
              style={{
                width: "100%",
                height: 48,
                borderColor: "#000",
                borderWidth: 1,
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 22,
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
          </View>

          <View style={{ marginBottom: 12 }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 400,
                marginVertical: 8,
                fontFamily: "TenorSans",
              }}
            >
              Password
            </Text>

            <View
              style={{
                width: "100%",
                height: 48,
                borderColor: "#000",
                borderWidth: 1,
                borderRadius: 8,
                alignItems: "center",
                justifyContent: "center",
                paddingLeft: 22,
              }}
            >
              <TextInput
                placeholder="Enter your password"
                placeholderTextColor={"#000"}
                secureTextEntry={isPasswordShown}
                style={{
                  width: "100%",
                  fontFamily: "TenorSans",
                }}
                onChangeText={(text) => setPassword(text)}
                value={password}
              />

              <TouchableOpacity
                onPress={() => setIsPasswordShown(!isPasswordShown)}
                style={{
                  position: "absolute",
                  right: 12,
                }}
              >
                {isPasswordShown == true ? (
                  <Ionicons name="eye-off" size={24} color={"#000"} />
                ) : (
                  <Ionicons name="eye" size={24} color={"#000"} />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
              navigation.navigate("ForgotPassword");
            }}
            style={{
              flexDirection: "row",
              marginVertical: 6,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "#40A2E3",
                fontWeight: "400",
                marginLeft: 6,
                textTransform: "capitalize",
                textDecorationLine: "underline",
                fontFamily: "TenorSans",
              }}
            >
              Forgot password
            </Text>
          </TouchableOpacity>
          {formErrors.email ? (
            <Text style={{ color: "red" }}>{formErrors.email}</Text>
          ) : null}
          {formErrors.password ? (
            <Text style={{ color: "red" }}>{formErrors.password}</Text>
          ) : null}

          <ButtonCustom
            title="Login"
            filled
            onPress={onSubmit}
            style={{
              marginTop: 18,

              marginBottom: 4,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 20,
            }}
          >
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: "#062",
                marginHorizontal: 10,
              }}
            />
            <Text style={{ fontSize: 14 }}>Or Login with</Text>
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: "#062",
                marginHorizontal: 10,
              }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => console.log("Pressed")}
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                height: 52,
                borderWidth: 1,
                borderColor: "#062",
                marginRight: 4,
                borderRadius: 10,
              }}
            >
              <Image
                source={require("../../../../assets/facebook.png")}
                style={{
                  height: 36,
                  width: 36,
                  marginRight: 8,
                }}
                resizeMode="contain"
              />

              <Text style={{ fontFamily: "TenorSans" }}>Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => console.log("Pressed")}
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                height: 52,
                borderWidth: 1,
                borderColor: "#062",
                marginRight: 4,
                borderRadius: 10,
              }}
            >
              <Image
                source={require("../../../../assets/google.png")}
                style={{
                  height: 36,
                  width: 36,
                  marginRight: 8,
                }}
                resizeMode="contain"
              />

              <Text style={{ fontFamily: "TenorSans" }}>Google</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginVertical: 22,
            }}
          >
            <Text
              style={{ fontSize: 16, color: "#000", fontFamily: "TenorSans" }}
            >
              Don't have an account ?
            </Text>
            <Pressable
              onPress={() => {
                navigation.goBack();
                navigation.navigate("Register");
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: "#40A2E3",
                  fontWeight: "bold",
                  marginLeft: 6,
                  fontFamily: "TenorSans",
                  textDecorationLine: "underline",
                }}
              >
                Register
              </Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;
