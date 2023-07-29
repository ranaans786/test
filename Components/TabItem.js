import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export const TabItem = (props) => {
  return (
    <View
      style={{
        backgroundColor: props.activeTab == props.title ? "#e21C41" : "white",
        borderRadius: 15,
        paddingHorizontal: 15,
        paddingVertical: 7,
      }}
    >
      <TouchableOpacity onPress={() => props.setActiveTab(props.title)}>
        <Text
          style={{
            color: props.activeTab == props.title ? "white" : "black",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          {props.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
