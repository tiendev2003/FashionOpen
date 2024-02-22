// In App.js in a new project

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  AboutScreen,
  AddNow,
  BlogScreen,
  CartScreen,
  Checkout,
  CollectionScreen,
  Confirmation,
  ContactScreen,
  ForgotScreen,
  HomeScreen,
  LoginScreen,
  PlaceOrder,
  ProductScreen,
  RegisterScreen,
} from "../../screen";

import { FontAwesome6 } from "@expo/vector-icons";
import * as React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { SearchNormal, ShoppingBag } from "iconsax-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import {
  BlogPost,
  CollectionDetail,
  ProductDetailArrial,
  ProductDetailForYou,
} from "../../components";
import CustomDrawer from "../../components/drawer/CustomDrawer";
function MyStack() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Contact" component={ContactScreen} />
      <Stack.Screen name="Blog" component={BlogScreen} />
      <Stack.Screen name="Post" component={BlogPost} />
      <Stack.Screen name="Collection" component={CollectionScreen} />
      <Stack.Screen name="CollectionDetail" component={CollectionDetail} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />

      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="ForgotPassword" component={ForgotScreen} />
      <Stack.Screen name="Confirmation" component={Confirmation} />
      <Stack.Screen name="PlaceOrder" component={PlaceOrder} />
      <Stack.Screen name="AddNow" component={AddNow} />
      <Stack.Screen name="About" component={AboutScreen} />
      <Stack.Screen name="ProductList" component={ProductScreen} />
      <Stack.Screen name="SingleArrival" component={ProductDetailForYou} />
      <Stack.Screen name="ProductArrial" component={ProductDetailArrial} />
    </Stack.Navigator>
  );
}
const Drawer = createDrawerNavigator();

function MainNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          header: ({ navigation, route, options }) => (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",

                alignItems: "center",
                width: "100%",
                height: 60,
                marginLeft: 20,
                marginTop: 30,
              }}
            >
              <View>
                <TouchableOpacity
                  onPress={() => {
                    navigation.openDrawer();
                  }}
                >
                  <FontAwesome6 name="bars-staggered" size={24} color="black" />
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "#000",
                    fontFamily: "BodoniModa-BoldItalic",
                  }}
                >
                  OpenFashion
                </Text>
              </TouchableOpacity>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",

                  marginRight: 30,
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("ProductList");
                  }}
                >
                  <SearchNormal
                    size={28}
                    color="#000"
                    style={{ marginRight: 20 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("Cart");
                  }}
                >
                  <ShoppingBag size={28} color="#000" />
                </TouchableOpacity>
              </View>
            </View>
          ),
        }}
      >
        <Drawer.Screen name="Feed" component={MyStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;
