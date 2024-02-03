import {
  FlatList,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import React from "react";
import Text from "../components/text/text";
import { SafeAreaView } from "react-native-safe-area-context";
import PlanetHeader from "../components/PlanetHeader";
import { PlanetList } from "../data/PlanetList";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../theme/colors";
export default function Home({ navigation }) {
  return (
    <SafeAreaView>
      <View>
        <PlanetHeader />
        <ScrollView
          showsHorizontalScrollIndicator={true}
          className=" space-x-5 "
        >
          <FlatList
            className=" p-4 "
            data={PlanetList}
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
        </ScrollView>
        <View className=" h-40 w-full py-10 " />
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
