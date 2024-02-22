import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
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

const RegisterScreen = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
    name: "",
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
                color: "#000",
                fontFamily: "TenorSans",
              }}
            >
              Create Account
            </Text>

            <Text
              style={{
                fontSize: 16,
                color: "#000",
                fontFamily: "TenorSans",
              }}
            >
              Connect with your friend today!
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
              Username
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
                placeholder="Enter your Name"
                placeholderTextColor={"#000"}
                keyboardType="default"
                onChangeText={(text) => setName(text)}
                value={name}
                style={{
                  width: "100%",
                }}
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
                  width: "100%",
                  fontFamily: "TenorSans",
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

          <View
            style={{
              flexDirection: "row",
              marginVertical: 6,
            }}
          >
            <Checkbox
              style={{ marginRight: 8 }}
              value={isChecked}
              onValueChange={setIsChecked}
              color={isChecked ? "#923" : undefined}
            />

            <Text style={{
              fontFamily: "TenorSans",
            }}>I aggree to the terms and conditions</Text>
          </View>
          {formErrors.email ? (
            <Text style={{ color: "red" }}>{formErrors.email}</Text>
          ) : null}
          {formErrors.password ? (
            <Text style={{ color: "red" }}>{formErrors.password}</Text>
          ) : null}
          {formErrors.username ? (
            <Text style={{ color: "red" }}>{formErrors.username}</Text>
          ) : null}
          <ButtonCustom
            title="Sign Up"
            onPress={onSubmit}
            filled
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
                backgroundColor: "#123",
                marginHorizontal: 10,
              }}
            />
            <Text style={{ fontSize: 14,fontFamily: "TenorSans", }}>Or Sign up with</Text>
            <View
              style={{
                flex: 1,
                height: 1,
                backgroundColor: "#123",
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
                borderColor: "#123",
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

              <Text style={{fontFamily: "TenorSans",}}>Facebook</Text>
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
                borderColor: "#123",
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

              <Text style={{fontFamily: "TenorSans",}}>Google</Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginVertical: 22,
            }}
          >
            <Text style={{ fontSize: 16, color: "#000" ,fontFamily: "TenorSans",}}>
              Already have an account
            </Text>
            <Pressable
              onPress={() => {
                navigation.goBack();
                navigation.navigate("Login");
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: "#40A2E3",
                  fontWeight: "bold",
                  fontFamily: "TenorSans",
                  textDecorationLine: "underline",
                  marginLeft: 6,
                }}
              >
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
