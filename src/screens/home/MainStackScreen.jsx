import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { COLORS } from "../../utils/theme";
import { Ionicons } from "@expo/vector-icons";
import { HomeScreen } from "../home/HomeScreen";


const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: "home-outline",
  Community: "earth",
  Account: "person-outline",
};


const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: COLORS.primary,
    tabBarInactiveTintColor: COLORS.inactive,
    headerShown: false,
    tabBarStyle: styles.tabBar,
  };
};

<NavigationContainer>
  <Tab.Navigator screenOptions={screenOptions}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Community" component={CommunityScreen} />
    <Tab.Screen name="Account" component={AccountScreen} />
  </Tab.Navigator>
  <StatusBar style="auto" />
</NavigationContainer>;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
