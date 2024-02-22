import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { LoginScreen, RegisterScreen } from "../../screen";
const AuthNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
