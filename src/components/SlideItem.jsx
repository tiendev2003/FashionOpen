import React from "react";
import {
  Animated,
  Dimensions,
  Easing,
  StyleSheet,
  View
} from "react-native";
import { Button } from "react-native-paper";

const { width, height } = Dimensions.get("screen");

const SlideItem = ({ item }) => {
  const translateYImage = new Animated.Value(40);

  Animated.timing(translateYImage, {
    toValue: 0,
    duration: 1000,
    useNativeDriver: true,
    easing: Easing.bounce,
  }).start();

  return (
    <View style={[styles.container]}>
      <Animated.Image
        source={item.img}
        resizeMode="cover"
        style={[
          styles.image,
          {
            transform: [
              {
                translateY: translateYImage,
              },
            ],
          },
        ]}
      />
       
      <Button
        mode="contained"
        style={{
          position: "absolute",
          elevation: 1,
          top: "50%",

          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        }}
        onPress={() => console.log("Pressed")}
        labelStyle={{
          color: "#fff",
          fontSize: 20,
          fontFamily: "TenorSans",
          textAlignVertical: "center",
          textTransform: "uppercase",
          paddingTop: 4,
          fontWeight: "bold",
        }}
      >
        Expolore Collection
      </Button>
    </View>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: "center",
  },
  image: {
    flex: 0.6,
    width: "100%",
  },
  content: {
    flex: 0.4,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    position: "absolute",
    elevation: 1,
    top: "30%",
    right: "50%",
    transform: [
      {
        translateX: 50,
      },
      {
        translateY: -50,
      },
    ],

    textAlign: "center",
  },
  description: {
    fontSize: 18,
    marginVertical: 12,
    color: "#333",
  },
  price: {
    fontSize: 32,
    fontWeight: "bold",
  },
});
