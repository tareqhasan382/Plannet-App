import {
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
  Pressable,
  Linking,
} from "react-native";
import React from "react";
import { colors } from "../theme/colors";
import PlanetHeader from "../components/PlanetHeader";
import Text from "../components/text/text";
import PlanetSection from "../sections/PlanetSection";
import { EvilIcons } from "@expo/vector-icons";

export default function PlanetDetails({ route }) {
  const planet = route.params.planet;
  const onPressLink = () => {
    Linking.openURL(planet.WikiLink);
  };
  return (
    <SafeAreaView className=" pt-12 ">
      <PlanetHeader backButton={true} title="Planet Details" />
      <ScrollView className=" space-y-4 ">
        <View className=" px-4 items-center justify-center">
          <View className="items-center justify-center py-4 ">
            <Image
              source={{
                uri: "https://www.pngall.com/wp-content/uploads/2/Mercury-Planet-Transparent.png",
              }}
              className=" h-56 w-56 "
              resizeMode="contain"
            />
          </View>
          <View className=" items-center ">
            <Text preset="h1" className=" text-center py-2 uppercase ">
              {planet.Name}
            </Text>
            <Text className=" leading-6 py-2 text-center ">
              {planet.Description}
            </Text>
            <Pressable onPress={onPressLink} className=" flex flex-row ">
              <Text>Source:</Text>
              <Text className=" pl-2 underline font-bold ">Wikipedia</Text>
              <EvilIcons name="external-link" size={24} color="white" />
            </Pressable>
          </View>
          <View className=" py-6 flex flex-col ">
            <PlanetSection title="Rotation Time" value={planet.RotationTime} />
            <PlanetSection
              title="Revolution Time"
              value={planet.RevolutionTime}
            />
            <PlanetSection title="Radius" value={planet.Radius} />
            <PlanetSection title="AvgTemp" value={planet.AvgTemp} />
          </View>
        </View>
        <View className=" h-20 w-full " />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  separator: {
    borderWidth: 0.2,
    borderBottomColor: colors.white,
  },
});
