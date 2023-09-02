import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from './src/screens/home/HomeScreen';
import { COLORS, SPACING } from './src/utils/theme';
import { CommunityScreen } from './src/screens/community/CommunityScreen';
import { AccountScreen } from './src/screens/account/AccountScreen';
import { Ionicons } from "@expo/vector-icons"; 


const Tab = createBottomTabNavigator();

const TAB_ICON = {
  Home: "home-outline",
  Community: "earth",
  Account: "person-outline",
};

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON [route.name]
  return {
    tabBarIcon : ({ size, color}) => (
      <Ionicons name = {iconName} size = {size} color ={color} />
    ),
    tabBarActiveTintColor : COLORS.primary,
    tabBarInactiveTintColor: COLORS.inactive,
    headerShown: false,
    tabBarStyle: styles.tabBar
  }
}

export default function App() {
  return (
    <>
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name='Home' component={HomeScreen}/>
        <Tab.Screen name='Community' component={CommunityScreen}/>
        <Tab.Screen name='Account' component={AccountScreen}/>
      </Tab.Navigator>
      <StatusBar style="auto" />

    </NavigationContainer>
    </>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

