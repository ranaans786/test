import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { TabItem } from "./TabItem";
const Tuchable = () => {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        padding: 10,
        backgroundColor: "white",
      }}
    >
      <TabItem
        title="Delivery"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <TabItem
        title="PickUp"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

export default Tuchable;
