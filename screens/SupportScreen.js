import React from "react";
import { Button, Text, View, StatusBar, TouchableOpacity } from "react-native";
import styles from "../styles/styles";

const SupportScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style={styles.statusBar} />
      <Text>Support Screen</Text>
    </View>
  );
};

export default SupportScreen;
