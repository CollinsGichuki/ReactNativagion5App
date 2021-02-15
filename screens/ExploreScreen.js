import React from "react";
import { Button, Text, View, StatusBar } from "react-native";
import styles from "../styles/styles";

const ExploreScren = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Explore Screen</Text>
      <Button
        style={styles.button}
        title="Click Me"
        onPress={console.log("Explore Screen Button clicked!")}
      />
    </View>
  );
};

export default ExploreScren;
