import React from "react";
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  Platform,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { color } from "react-native-reanimated";

const SignUpScreen = ({ navigation }) => {
  const [data, setData] = React.useState({
    email: "",
    password: "",
    confirmPassword: "",
    secureTextEntry: true,
    check_textInputChange: false,
    confirm_secureTextEntry: true,
  });

  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const handleConfirmPasswordChange = (val) => {
    setData({
      ...data,
      confirmPassword: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      //Change the value to its opposite
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      //Change the value to its opposite
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Email"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
          />
          {
            //Show the Icon only when an email has been entered
            data.check_textInputChange ? (
              <Feather name="check-circle" color="green" size={12} />
            ) : null
          }
        </View>

        <Text style={[styles.text_footer, { marginTop: 30 }]}>Password</Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Your Password"
            secureTextEntry={
              // If secureTextEntry is true it is true else it is false
              data.secureTextEntry ? true : false
            }
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {
              //Show eye-off icon if secureTextEntry is true
              //Show eye icon is secureTextEntry is false
              data.secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )
            }
          </TouchableOpacity>
        </View>

        <Text style={[styles.text_footer, { marginTop: 30 }]}>
          Confirm Password
        </Text>
        <View style={styles.action}>
          <FontAwesome name="lock" color="#05375a" size={20} />
          <TextInput
            placeholder="Confirm Your Password"
            secureTextEntry={
              // If secureTextEntry is true it is true else it is false
              data.confirm_secureTextEntry ? true : false
            }
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => handleConfirmPasswordChange(val)}
          />
          <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
            {
              //Show eye-off icon if secureTextEntry is true
              //Show eye icon is secureTextEntry is false
              data.confirm_secureTextEntry ? (
                <Feather name="eye-off" color="grey" size={20} />
              ) : (
                <Feather name="eye" color="grey" size={20} />
              )
            }
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <LinearGradient colors={["#08d4c4", "#01ab9d"]} style={styles.signIn}>
            <Text style={[styles.textSign, { color: "#fff" }]}>Sign Up</Text>
          </LinearGradient>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[
              styles.signIn,
              { borderColor: "#009387", borderWidth: 1, marginTop: 15 },
            ]}
          >
            <Text style={(styles.textSign, { color: "#009387" })}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2f2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
