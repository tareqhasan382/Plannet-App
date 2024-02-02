import { View, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { colors } from "../theme/colors";
import PlanetHeader from "../components/PlanetHeader";
import Text from "../components/text/text";
export default function PlanetDetails({ planet }) {
  return (
    <SafeAreaView className=" pt-12 ">
      <View>
        <PlanetHeader backButton={true} title="Plannet Details" />
        <Text preset="h1" className=" text-center py-2 ">
          Plannnet Name
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  separator: {
    borderWidth: 0.2,
    borderBottomColor: colors.white,
  },
});
