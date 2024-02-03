import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import Text from "../components/text/text";
import { SafeAreaView } from "react-native-safe-area-context";
import PlanetHeader from "../components/PlanetHeader";
import { PlanetList } from "../data/PlanetList";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../theme/colors";
// { darkMode, setDarkMode }
export default function Home({ navigation }) {
  const [list, setList] = useState(PlanetList);
  // Input handler function
  const SearchFilter = (text) => {
    // console.log("SearchFilter:", text);
    const filterList = PlanetList.filter((item) => {
      const itemName = item.Name.toLowerCase();
      const userTypeText = text.toLowerCase();
      return itemName.indexOf(userTypeText) > -1;
    });
    // console.log("filterList:", filterList.length);
    setList(filterList);
  };

  return (
    <SafeAreaView>
      <PlanetHeader />
      <View className=" px-4 mt-2 ">
        <TextInput
          className=" border-b border-white rounded text-base text-white py-2 pl-1 "
          placeholder="Type the planet name"
          placeholderTextColor={colors.white}
          autoCorrect={false}
          onChangeText={(text) => SearchFilter(text)}
        />
      </View>
      <ScrollView className=" space-x-5 ">
        <FlatList
          className=" p-4 "
          data={list}
          renderItem={({ item }) => {
            return (
              <Pressable
                onPress={() => {
                  navigation.navigate("Details", { planet: item });
                }}
                className=" hover:bg-black/10 flex flex-row items-center justify-between py-1 "
              >
                <View className=" flex flex-row items-center space-x-2 py-2 ">
                  <View
                    style={{ backgroundColor: item.Color }}
                    className=" h-6 w-6 rounded-full "
                  />
                  <Text preset="h4" className=" uppercase ">
                    {item.Name}
                  </Text>
                </View>
                <AntDesign name="right" size={16} color="white" />
              </Pressable>
            );
          }}
          keyExtractor={(item, index) => index}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
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
