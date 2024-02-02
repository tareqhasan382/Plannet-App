import { View, StyleSheet, Pressable } from "react-native";
import React from "react";
import Text from "./text/text";
import { spacing } from "../theme/spacing";
import { colors } from "../theme/colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function PlanetHeader({ backButton, title = "The Planets" }) {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {backButton && (
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Ionicons name="caret-back" size={30} color="white" />
        </Pressable>
      )}
      <Text preset="h2">{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing[3],
    paddingLeft: spacing[4],
    borderBottomWidth: 0.2,
    borderBottomColor: colors.white,
    flexDirection: "row",
    alignItems: "center",
  },
});
