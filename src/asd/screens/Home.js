import React from "react";
import { colors } from "../theme/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import PlanetHeader from "../components/PlanetHeader";
import {
  FlatList,
  StyleSheet,
  View,
  ScrollView,
  Pressable,
} from "react-native";
import { PlanetList } from "../data/planetList";
import Text from "../components/text/text";
import { spacing } from "../theme/spacing";
// import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <PlanetHeader />
      <ScrollView style={styles.scrollView}>
        {/* <FlatList
          contentContainerStyle={styles.list}
          data={PlanetList}
          renderItem={({ item }) => {
            return (
              <Pressable
                onPress={() => {
                  navigation.navigate("PlanetDetails", { planet: item });
                }}
                style={styles.item}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <View
                    style={[styles.circle, { backgroundColor: item.color }]}
                  />
                  <Text preset="h4" style={styles.itemName}>
                    {item.name}
                  </Text>
                </View>

                <AntDesign name="right" size={16} color="white" />
              </Pressable>
            );
          }}
          keyExtractor={(item) => item.name}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
const styles = StyleSheet.create({
  scrollView: {
    // backgroundColor: "black",
    // marginHorizontal: 2,
  },
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: spacing[3],
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  itemName: {
    textTransform: "uppercase",
    marginLeft: spacing[4],
  },
  list: {
    padding: spacing[4],
  },
  separator: {
    // height: 1,
    // backgroundColor: colors.white,
    borderWidth: 0.2,
    borderBottomColor: colors.white,
  },
});

/*

style={styles.container}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
});

<Text preset="h1" style={{ color: colors.darkOrange }}>
          Hello World!
</Text>
*/
