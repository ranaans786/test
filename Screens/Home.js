import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import Tuchable from "../Components/Tuchable";
import { Categories } from "../Components/Categories";

const Home = () => {
  return (
    <SafeAreaView>
      <Tuchable />
      <Categories />
    </SafeAreaView>
  );
};

export default Home;
