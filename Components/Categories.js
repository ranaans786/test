import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

const categories = [
  {
    id: 1,
    title: "Pick UP",
    image: require("../assets/icon.png"),
  },
  {
    id: 2,
    title: "Soft Drinks",
    image: require("../assets/icon.png"),
  },
  {
    id: 3,
    title: "Fast Foods",
    image: require("../assets/icon.png"),
  },
  {
    id: 4,
    title: "Desserts",
    image: require("../assets/icon.png"),
  },
  {
    id: 5,
    title: "Bakery",
    image: require("../assets/icon.png"),
  },
  {
    id: 6,
    title: "Coffee & Tea",
    image: require("../assets/icon.png"),
  },
];

export const Categories = () => {
  return (
    <View
      style={{
        backgroundColor: "black",
        padding: 5,
        flexDirection: "row",
      }}
    >
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{ flexDirection: "row" }}>
          {categories.map((item, index) => (
            <View
              style={{
                marginHorizontal: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../assets/icon.png")}
                style={{ height: 40, width: 50 }}
              />
              <Text style={{ color: "white" }}>{item.title}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
