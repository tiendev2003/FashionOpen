import React, { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { ScrollView } from "react-native-gesture-handler";

import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { ImageBackground } from "react-native";
import { Footer } from "../../components";
import { BlogData } from "../../data";
const BlogScreen = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [selectedItem, setSelectedItem] = useState(1);
  const [isMenuVisible, setMenuVisible] = useState(false);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigation = useNavigation();

  const handleMenuItemClick = (item) => {
    setSelectedItem(item);
  };

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const menuItems = [
    { id: 1, label: "Fashion" },
    { id: 2, label: "Promo" },
    { id: 3, label: "Policy" },
    { id: 4, label: "Lookbook" },
    { id: 5, label: "Sale" },
  ];

  useEffect(() => {
    let filteredProducts = [];

    if (selectedItem === 1) {
      filteredProducts = BlogData.slice(0, 4);
    } else {
      filteredProducts = BlogData.filter(
        (blog) => blog.category === menuItems[selectedItem - 1].label
      );
    }

    setFilteredProducts(filteredProducts);
  }, [selectedItem, BlogData]);

  return (
    <ScrollView style={{ backgroundColor: "#FFFFFF" }}>
      {/* Menu Lists */}
      <View>
        <Text
          style={{
            fontFamily: "TenorSans",
            fontSize: 20,
            alignSelf: "center",
            marginTop: 45,
            letterSpacing: 5,
          }}
        >
          BLOG
        </Text>

        <Image
          style={{ alignSelf: "center", marginTop: 5, marginBottom: 35 }}
          source={require("../../../assets/3.png")}
        />
        <View style={styles.menuList}>
          {menuItems.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => handleMenuItemClick(item.id)}
            >
              <Text style={styles.menuText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Blog Cards */}
      {filteredProducts.map((blog, index) => (
        <TouchableOpacity
          key={index}
          onPress={() =>
            navigation.navigate("Post", { selectedBlogIndex: index })
          }
        >
          <View style={{ padding: 20, marginTop: 20, overflow: "hidden" }}>
            <ImageBackground source={blog.image}>
              <TouchableOpacity>
                <Image
                  style={styles.bookmark}
                  source={require("../../../assets/blogs/bookmark.png")}
                />
              </TouchableOpacity>
              <View style={styles.blogGradient}>
                <LinearGradient
                  colors={["transparent", "black"]}
                  start={{ x: 0, y: 0 }} // Adjust the starting point (0,0 is top-left corner)
                  end={{ x: 0, y: 1 }}
                  style={styles.gradient}
                >
                  <Text style={styles.blogTitle}>{blog.title}</Text>
                </LinearGradient>
              </View>
            </ImageBackground>
          </View>
          <View style={styles.blogFooter}>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontFamily: "TenorSans",
                  fontSize: 14,
                  color: "#9F9E9E",
                  marginRight: 5,
                  justifyContent: "space-between",
                }}
              >
                {blog.tags}{" "}
              </Text>
            </View>
            <Text
              style={{
                fontFamily: "TenorSans",
                fontSize: 14,
                color: "#9F9E9E",
                marginRight: 22,
              }}
            >
              {blog.time}
            </Text>
          </View>
        </TouchableOpacity>
      ))}

      <View
        style={{
          alignSelf: "center",
          margin: 20,
          borderWidth: 1,
          borderColor: "#DEDEDE",
          marginTop: 50,
        }}
      >
        <TouchableOpacity style={{ flexDirection: "row", padding: 15 }}>
          <Text
            style={{ fontFamily: "TenorSans", fontSize: 20, letterSpacing: 4 }}
          >
            LOAD MORE
          </Text>
          <Image
            style={{ width: 20, height: 23, marginLeft: 10 }}
            source={require("../../../assets/plus.png")}
          />
        </TouchableOpacity>
      </View>

      <Footer />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.08,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  text: {
    fontSize: 16,
    color: "brown",
  },
  image1: {
    width: 35,
    height: 35,
    marginRight: 0,
    marginLeft: -120,
  },
  menuList: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 20,
  },
  menuText: {
    fontFamily: "TenorSans",
    fontSize: 14,
    backgroundColor: "#F9F9F9",
    padding: 10,
    borderRadius: 15,
  },

  follow: {
    marginTop: 30,
    fontSize: 18,
    fontFamily: "TenorSans",
    letterSpacing: 5,
  },
  instagram1: {
    width: 30,
    height: 30,
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 5,
  },
  teamwrap: {
    flexDirection: "row",
    width: 310,
  },
  team: {
    width: 150,
    height: 150,
    marginTop: 15,
    marginRight: 15,
  },
  blogGradient: {
    padding: 20,
    marginTop: 80,
    overflow: "hidden",
  },
  bookmark: {
    width: 25,
    height: 25,
    alignSelf: "flex-end",
    margin: 10,
  },
  gradient: {
    height: 80,
    width: 360,
    marginLeft: -20,
    marginBottom: -20,
  },
  blogTitle: {
    fontFamily: "TenorSans",
    fontSize: 17,
    padding: 15,
    color: "white",
    marginTop: 5,
    lineHeight: 24,
  },
  blogFooter: {
    flexDirection: "row",
    marginLeft: 20,
    justifyContent: "space-between",
  },
  menu: {
    flex: 1,
    backgroundColor: "white", // Change this to your menu background color
    paddingTop: 50,
    paddingHorizontal: 20,
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
    marginRight: 20,
    marginBottom: 30,
  },
});

export default BlogScreen;
