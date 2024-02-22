import React from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import Divider from '../Divider';

const CustomIndicator = ({position, navigationState}) => {
    const inputRange = navigationState.routes.map((_, i) => i);
    const outputRange = inputRange.map((inputIndex) =>
      inputIndex === position ? "black" : "gray"
    );
  
    const width = 300 / navigationState.routes.length;
  
    const translateX = position.interpolate({
      inputRange,
      outputRange: outputRange.map((_, i) => i * width),
    });
  
    return (
      <View style={[styles.indicator, { width }]}>
        <Animated.View
          style={[
            {
              transform: [{ translateX }],
              width: `${width}%`,
            },
          ]}
        >
          <Divider w={width} backgroundColor={"#DD8560"} />
        </Animated.View>
      </View>
    );
}

export default CustomIndicator

const styles = StyleSheet.create({
    
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
  