import AsyncStorage from "@react-native-async-storage/async-storage";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { List } from "react-native-paper";

import { Call, Location } from "iconsax-react-native";
import { SceneMap, TabView } from "react-native-tab-view";
import Ionicons from "react-native-vector-icons/Ionicons";
import Divider from "../Divider";
import CustomTabBar from "./CustomTabBar";
const FirstRoute = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  return (
    <List.Section
      style={{
        marginTop: 0,
      }}
    >
      <List.Accordion title="Uncontrolled Accordion">
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>

      <List.Accordion
        title="Controlled Accordion"
        expanded={expanded}
        onPress={handlePress}
      >
        <List.Item title="First item" />
        <List.Item title="Second item" />
      </List.Accordion>
    </List.Section>
  );
};

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
);

const CustomDrawer = (props) => {
  const layout = useWindowDimensions();

  const navigation = useNavigation();
  const [active, setActive] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState("");
  const [index, setIndex] = React.useState(0);
  const isSelectActive = (index) => {
    return index === activeIndex ? "#76c0f5" : "#fff";
  };
  const renderScene = SceneMap({
    1: FirstRoute,
    2: SecondRoute,
    3: SecondRoute,
  });
  const [routes] = React.useState([
    { key: "1", title: "Women" },
    { key: "2", title: "Man" },
    { key: "3", title: "Kids" },
  ]);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("tien");
      if (value !== null) {
        return value;
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          flex: 1,

          backgroundColor: "#287",
        }}
      >
        {getData() == null ? (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 20,
              marginTop: 30,
              gap: 20,
              justifyContent: "flex-start",
            }}
          >
            <Image
              source={require("../../../assets/user-profile.png")}
              style={{
                height: 80,
                width: 80,
                borderRadius: 40,
                marginBottom: 10,
              }}
            />
            <Text
              style={{
                color: "#000",
                fontSize: 18,
                fontFamily: "TenorSans",
                marginBottom: 5,
              }}
            >
              John Doe
            </Text>
          </View>
        ) : (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              gap: 20,
              padding: 20,
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("Login")}
              style={{
                padding: 10,
                backgroundColor: "#fff",
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{fontFamily: "TenorSans",}}>Đăng nhập</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Register")}
              style={{
                padding: 10,
                backgroundColor: "#fff",
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{
                fontFamily: "TenorSans",
              }}>Đăng Ký</Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={{ flex: 1, backgroundColor: "#", paddingTop: 10 }}>
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            style={{ backgroundColor: "#fff" }}
            renderTabBar={CustomTabBar}
          />
        </View>
      </DrawerContentScrollView>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Divider />
      </View>
      <View style={{ padding: 20, borderTopColor: "#ccc" }}>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Call size="24" color="#000" />
            <Text
              style={{
                fontSize: 15,
                fontFamily: "TenorSans",
                marginLeft: 5,
              }}
            >
              +84 382 802 406
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Location size="24" color="#000" />
            <Text
              style={{
                fontSize: 15,
                fontFamily: "TenorSans",
                marginLeft: 5,
              }}
            >
              {""} Store Location
            </Text>
          </View>
        </TouchableOpacity>
        {getData() == null ? (
          <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="exit-outline" size={22} />
              <Text
                style={{
                  fontSize: 15,
                  fontFamily: "TenorSans",
                  marginLeft: 5,
                }}
              >
                Sign Out
              </Text>
            </View>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default CustomDrawer;
const styles = StyleSheet.create({
  scene: {
    flex: 1,
  },
  tabBar: {
    backgroundColor: "#ffffff",
    height: 50,
  },
  label: {
    color: "black",

    fontFamily: "TenorSans",
  },
  indicator: {
    position: "absolute",
    bottom: 0,
    marginBottom: 18,
    height: 2,
    flexDirection: "row",
  },
  indicatorInner: {
    flex: 1,
    backgroundColor: "black",
  },
});
