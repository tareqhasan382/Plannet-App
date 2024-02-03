import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { useCallback, useState } from "react";
import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import PlanetDetails from "./src/screens/PlanetDetails";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontLoaded, fontError] = useFonts({
    "Antonio-Medium": require("./src/fonts/Antonio-Medium.ttf"),
    "Spartan-Bold": require("./src/fonts/LeagueSpartan-Bold.ttf"),
    "Spartan-Regular": require("./src/fonts/LeagueSpartan-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded, fontError]);

  if (!fontLoaded || fontError) {
    return null;
  }

  return (
    <NavigationContainer theme={DarkTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          onLayout={onLayoutRootView}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          onLayout={onLayoutRootView}
          name="Details"
          component={PlanetDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.green,
  },
});
