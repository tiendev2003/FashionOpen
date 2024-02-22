import * as Font from "expo-font";
import { useEffect, useState } from "react";
import { StatusBar, StyleSheet } from "react-native";
import { MainNavigator } from "./src/navigator";

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  useEffect(() => {
    async function loadCustomFonts() {
      await Font.loadAsync({
        "BodoniModa-BoldItalic": require("./assets/fonts/BodoniModa_28pt-BoldItalic.ttf"),
        TenorSans: require("./assets/fonts/TenorSans-Regular.ttf"),
      });
      setFontLoaded(true);
    }

    loadCustomFonts();
  }, []);
  if (!fontLoaded) {
    return null;
  }
  return (
    <>
      <StatusBar backgroundColor="transparent" translucent={true} />
      <MainNavigator />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
