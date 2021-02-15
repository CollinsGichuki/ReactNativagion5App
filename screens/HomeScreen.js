import React from "react";
import { Button, Text, View, StatusBar, TouchableOpacity } from "react-native";
import styles from "../styles/styles";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style={styles.statusBar} />
      <Text>Home Screen</Text>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          navigation.navigate("Details");
        }}
      >
        <Text style={styles.loginText}>Go to Second Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
