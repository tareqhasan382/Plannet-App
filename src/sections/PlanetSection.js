import { View } from "react-native";
import React from "react";
import Text from "../components/text/text";

export default function PlanetSection({ title, value }) {
  return (
    <View className=" p-2 flex flex-row items-center justify-between w-full border-solid border border-white rounded my-2  ">
      <Text preset="small" className="uppercase ">
        {title}
      </Text>
      <Text preset="small" className="uppercase ">
        {value}
      </Text>
    </View>
  );
}
