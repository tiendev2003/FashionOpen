import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { ArrowDown3, Element3, Sort, Task } from "iconsax-react-native";
import { Footer, ProductCard, ProductCart } from "../../components";
import { ProductData } from "../../data";
const ProductScreen = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [selectedItem, setSelectedItem] = useState(1);
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [toggleLayou, setLayout] = useState(false);
  const toggleLayout = () => {
    setLayout(!toggleLayou);
  };
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedSize, setSelectedSize] = useState("");
  const navigation = useNavigation();

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  const isSizeSelected = (size) => {
    return size === selectedSize ? { backgroundColor: "#E0CFBA" } : {};
  };

  const handleMenuItemClick = (item) => {
    setSelectedItem(item);
  };

  const pagination = [
    { id: 1, label: "1" },
    { id: 2, label: "2" },
    { id: 3, label: "3" },
    { id: 4, label: "4" },
    { id: 5, label: "5" },
  ];

  useEffect(() => {
    let filteredProducts = [];

    if (selectedItem === 1) {
      filteredProducts = ProductData.slice(0, 6);
    } else if (selectedItem === 2) {
      filteredProducts = ProductData.slice(6);
    } else if (selectedItem === 3) {
      filteredProducts = ProductData.slice(0, 6);
    } else if (selectedItem === 4) {
      filteredProducts = ProductData.slice(6);
    } else if (selectedItem === 5) {
      filteredProducts = ProductData.slice(0, 6);
    }

    setFilteredProducts(filteredProducts);
  }, [selectedItem, ProductData]);

  return (
    <ScrollView style={{ backgroundColor: "#FFFFFF" }}>
      {/* List Header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginLeft: 20,
        }}
      >
        <Text style={styles.listText}>4500 APPAREL</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: 20,
            marginRight: 20,
          }}
        >
          <TouchableOpacity
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              paddingBottom: 10,
              alignItems: "center",
            }}
          >
            <Text style={styles.listText2}>New</Text>
            <ArrowDown3 size="14" color="#000" />
          </TouchableOpacity>

          <TouchableOpacity onPress={toggleLayout}>
            {toggleLayou ? (
              <Element3 size="23" color="#000" />
            ) : (
              <Task size="24" color="#000" />
            )}
          </TouchableOpacity>

          <TouchableOpacity>
            <Sort size="25" color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Products */}

      {toggleLayou ? (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            gap: 25,
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {filteredProducts.map((product, index) => (
            <ProductCard product={product} index={index} />
          ))}
        </View>
      ) : (
        filteredProducts.map((product, index) => (
          <ProductCart product={product} index={index} />
        ))
      )}

      {/* {filteredProducts.map((product, index) => {
        console.log("load")
        toggleLayout ? (
          <ProductCart product={product} index={index} />
        ) : (
          // <ProductCard product={product} index={index}/>
          <Text> hello</Text>
        );
      })} */}

      <View
        style={{ flexDirection: "row", alignSelf: "center", marginTop: 30 }}
      >
        {pagination.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => handleMenuItemClick(item.id)}
          >
            <Text
              style={[
                styles.page,
                selectedItem === item.id && styles.selectedpage,
              ]}
            >
              {item.label}
            </Text>
          </TouchableOpacity>
        ))}
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
  menu: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  listHeader: {
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 10,
  },
  listText: {
    fontFamily: "TenorSans",
    marginTop: 20,
    fontSize: 15,
    letterSpacing: 1,
    marginRight: 10,
  },
  listText2: {
    fontFamily: "TenorSans",
    marginTop: 20,
    fontSize: 15,
    letterSpacing: 1,
    marginRight: 5,
    marginLeft: 55,
  },
  productPrice: {
    color: "#DD8560",
    fontFamily: "TenorSans",
    fontSize: 16,
    marginTop: 10,
  },

  size1: {
    fontFamily: "TenorSans",
    fontSize: 14,
    color: "#555555",
    alignSelf: "center",
  },

  size: {
    fontFamily: "TenorSans",
    fontSize: 13,
    color: "#555555",
    alignSelf: "center",
  },

  selection: {
    width: 25,
    height: 25,
    marginLeft: 10,
    borderRadius: 30,
    borderWidth: 0.5,
    borderColor: "#555555",
    justifyContent: "center",
    alignItems: "center",
  },
  page: {
    padding: 5,
    width: 28,
    backgroundColor: "#DEDEDE",
    marginRight: 10,
    textAlign: "center",
  },
  selectedpage: {
    padding: 5,
    width: 28,
    backgroundColor: "#333333",
    marginRight: 10,
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
    marginRight: 20,
    marginBottom: 30,
  },
});

export default ProductScreen;
