import React from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Home from "./Screens/Home";
import ListComp from "./Components/ListComp";
import Tuchable from "./Components/Tuchable";

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Home />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  },
});

export default App;
