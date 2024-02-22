import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { Image, StyleSheet, Text } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import { BlogData } from "../../data";
import Footer from "../Footer";
const BlogPost = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  const navigation = useNavigation();
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  if (!BlogData || BlogData.length === 0) {
    return null;
  }

  const route = useRoute();
  const selectedBlogIndex = route.params.selectedBlogIndex;

  const selectedBlog = BlogData[selectedBlogIndex];

  return (
    <ScrollView style={{ backgroundColor: "#FFFFFF" }}>
      {/* Blog Details */}
      <Image style={styles.blogimg} source={selectedBlog.image} />
      <Text style={styles.blogtitle}>{selectedBlog.title}</Text>
      <Text style={styles.blogdesc}>{selectedBlog.description}</Text>
      <Image style={styles.blogimg2} source={selectedBlog.image2} />
      <Text style={styles.blogdesc}>{selectedBlog.description2}</Text>
      <Text style={styles.blogdesc}>
        Posted by {selectedBlog.creator} | {selectedBlog.time}{" "}
      </Text>
      <Text style={styles.blogtag}>{selectedBlog.tags}</Text>

      {/* Footer */}
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
  blogimg: {
    width: "100%",
    height: 250,
  },
  blogtitle: {
    fontFamily: "TenorSans",
    fontSize: 14,
    padding: 20,
  },
  blogdesc: {
    padding: 20,
    fontSize: 15,
    fontFamily: "TenorSans",
    marginRight: 10,
    marginTop: -30,
    color: "#333333",
    lineHeight: 23,
  },
  blogimg2: {
    width: 350,
    height: 500,
    padding: 20,
    alignSelf: "center",
    marginBottom: 25,
    color: "#555555",
  },
  blogtag: {
    fontFamily: "TenorSans",
    fontSize: 14,
    padding: 20,
    color: "#9F9E9E",
    marginTop: -25,
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
});

export default BlogPost;
