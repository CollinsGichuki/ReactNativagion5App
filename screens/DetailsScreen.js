import React from "react";
import { Button, Text, View, StatusBar } from "react-native";
import styles from "../styles/styles";

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Wagwan</Text>
      <Button
        style={styles.button}
        title={"Go to Second screen again"}
        //push() adds the screen to the stack even if the screen was in the stack
        onPress={() => navigation.push("Details")}
      />
      <Button
        style={styles.button}
        title="Go to Home Screen"
        //navigate() will go back to the screen if it is in the stack
        onPress={() => navigation.navigate("Home")}
      />
      <Button
        style={styles.button}
        title="Go Back"
        onPress={() => navigation.goBack()}
      />
      <Button
        style={styles.button}
        title="Go to Top Screen"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

export default DetailsScreen;
