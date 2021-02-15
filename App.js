import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import MainTabScreen from "./screens/MainTabScreen";
import SupportScreen from "./screens/SupportScreen";
import SettingsScreen from "./screens/SettingsScreen";

import RootStackScreen from "./screens/RootStackScreen";

import { AuthContext } from "./components/context";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { DrawerContent } from "./screens/DrawerContent";
import { View } from "react-native-animatable";
import { ActivityIndicator } from "react-native";
import { useEffect } from "react";

const Drawer = createDrawerNavigator();

const App = () => {
  //Local State
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(true);

  //Using Reducer State
  const intialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };
  //Reducer Function
  const loginReducer = (prevState, action) => {
    switch (action.type) {
      //RETRIEVE_TOKEN runs when the user launches the app for the first time
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          //Pass the token object to the action
          //Set the token as the value of userToken
          userToken: action.token,
          isLoading: false,
        };
      case "LOGIN":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGOUT":
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case "REGISTER":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  //The Reducer
  //loginState holds the various states
  //Dispactch the action using dispatch
  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    intialLoginState
  );

  //useMemo() is a React Hook that uses memorization technique
  //which is an optimization technique for speeding up the process
  const authContext = React.useMemo(
    () => ({
      //The functions
      //Use AsyncStorage to save the user's toekn
      signIn: async (userName, password) => {
        // setUserToken("ghjs"), setIsLoading(false);
        //This is where you make the API call
        let userToken;
        userToken = null;
        if (userName == "user" && password == "pass") {
          try {
            //Save the UserToken in AsyncStorage
            userToken = "ghjs";
            await AsyncStorage.setItem("userToken", userToken);
          } catch (e) {
            //Log the error
            console.log(e);
          }
        }

        dispatch({ type: "LOGIN", id: userName, token: userToken });
      },
      signOut: async () => {
        // setUserToken(null), setIsLoading(false);
        try {
          //Remove the UserToken from AsyncStorage
          await AsyncStorage.removeItem("userToken");
        } catch (e) {
          //Log the error
          console.log(e);
        }
        dispatch({ type: "LOGOUT" });
      },
      signUp: () => {
        setUserToken("ghjs", setIsLoading(false));
      },
    }),
    []
  );

  //In this Hook, we check if the user is signed in
  //We sycnhronize logging in by waiting for 1000 milliseconds
  useEffect(() => {
    setTimeout(async () => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        //Get the UserToken from AsyncStorage
        userToken = await AsyncStorage.getItem("userToken");
      } catch (e) {
        //Log the error
        console.log(e);
      }
      dispatch({ type: "RETRIEVE_TOKEN", token: userToken });
    }, 1000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"large"} color="#0000ff" />
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {
          //Check if the userToken is null
          loginState.userToken !== null ? (
            <Drawer.Navigator
              drawerContent={(props) => <DrawerContent {...props} />}
            >
              <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
              <Drawer.Screen name="SupportScreen" component={SupportScreen} />
              <Drawer.Screen name="SettingScreen" component={SettingsScreen} />
            </Drawer.Navigator>
          ) : (
            //If Token is null, they will be presented with the RootStack
            <RootStackScreen />
          )
        }
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default App;
