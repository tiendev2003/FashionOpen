import React from "react";
import { StyleSheet } from "react-native";
import { TabBar } from "react-native-tab-view";

import CustomIndicator from "./CustomIndicator";

const CustomTabBar = (props) => {
  return (
    <TabBar
      {...props}
      renderIndicator={(params) => <CustomIndicator {...params} />}
      style={styles.tabBar}
      labelStyle={styles.label}
    />
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#ffffff",
    height: 50,
  },
  label: {
    color: "black",

    fontFamily: "TenorSans",
  },
});
