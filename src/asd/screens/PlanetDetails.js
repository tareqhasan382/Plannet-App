import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import Text from "../components/text/text";
import PlanetHeader from "../components/PlanetHeader";
import { colors } from "../theme/colors";

export default function PlanetDetails({ route }) {
  const { planet } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader backButton={true} title="Planet Details" />
      <View style={styles.content}>
        <View style={[styles.circle, { backgroundColor: planet.color }]} />
        <Text preset="bold" style={styles.name}>
          {planet.name}
        </Text>
        <Text preset="small">{planet.description}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  scrollView: {
    // backgroundColor: "black",
    // marginHorizontal: 2,
  },
  content: {
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  circle: {
    width: 300,
    height: 300,
    borderRadius: 150,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
  },
  name: {
    fontSize: 50,
    textAlign: "center",
    // marginTop: 150,
  },
});
