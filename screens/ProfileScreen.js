import React from "react";
import { Button, Text, View, StatusBar } from "react-native";
import styles from "../styles/styles";

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Profile Screen</Text>
      <Button
        style={styles.button}
        title="Click me"
        onPress={console.log("Profile Screen Button Clicked!")}
      />
    </View>
  );
};

export default ProfileScreen;
