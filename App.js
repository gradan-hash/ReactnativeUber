import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";
import { colors, parameters } from "./src/global/styles";
import Home from "./src/screens/Home";
const SCREEN_WIDTH = Dimensions.get("window").width;

const App = () => {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
