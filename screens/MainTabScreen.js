import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Ionicons";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import HomeScreen from "./HomeScreen";
import DetailsScreen from "./DetailsScreen";
import ExploreScren from "./ExploreScreen";
import ProfileScreen from "./ProfileScreen";

const HommeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ExploreStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {
  return (
    <Tab.Navigator
      // initialRouteName="Feed"
      activeColor="#d8066e"
      barStyle={{ backgroundColor: "#2b2b2b" }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: "Details",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="details" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="face-profile"
              color={color}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={ExploreStackScreen}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="search-web" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
  <HommeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#2b2b2b",
      },
      headerTintColor: "white",
      headerLeft: () => (
        <MaterialCommunityIcons
          name="menu"
          size={30}
          color="white"
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
    }}
  >
    <HommeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{ title: "Welcome" }}
    />
  </HommeStack.Navigator>
);

const DetailsStackScreen = ({ navigation }) => (
  <DetailsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#2b2b2b",
      },
      headerTintColor: "white",
      headerLeft: () => (
        <MaterialCommunityIcons
          name="menu"
          size={30}
          color="white"
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
    }}
  >
    <DetailsStack.Screen
      name="Details"
      component={DetailsScreen}
      options={{ title: "Second Screen" }}
    />
  </DetailsStack.Navigator>
);
const ExploreStackScreen = ({ navigation }) => (
  <ExploreStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#2b2b2b",
      },
      headerTintColor: "white",
      headerLeft: () => (
        <MaterialCommunityIcons
          name="menu"
          size={30}
          color="white"
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
    }}
  >
    <ExploreStack.Screen
      name="Explore"
      component={ExploreScren}
      options={{ title: "Explore Screen" }}
    />
  </ExploreStack.Navigator>
);
const ProfileStackScreen = ({ navigation }) => (
  <ProfileStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#2b2b2b",
      },
      headerTintColor: "white",
      headerLeft: () => (
        <MaterialCommunityIcons
          name="menu"
          size={30}
          color="white"
          onPress={() => {
            navigation.openDrawer();
          }}
        />
      ),
    }}
  >
    <ProfileStack.Screen
      name="Profile"
      component={ProfileScreen}
      options={{ title: "Profile Screen" }}
    />
  </ProfileStack.Navigator>
);
