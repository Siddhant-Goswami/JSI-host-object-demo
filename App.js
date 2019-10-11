import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends Component {
  // Call to ios/Test.cpp native runTest method
  async nativeCall() {
    return global.nativeTest.runTest();
  }

  render() {
    // Comparing the timestamp inside render
    let t1 = Date.now();
    let t2;
    this.nativeCall()
      .then(() => (t2 = Date.now()))
      .then(() => console.warn("TIME", t2 - t1))
      .catch(err => console.log("Catch", err));
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>
          You can see the timestamp difference in making a native call through
          JSI in yellow warning box.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
