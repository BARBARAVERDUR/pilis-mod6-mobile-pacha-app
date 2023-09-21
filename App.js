import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { MainStackScreen } from "./src/screens/home/MainStackScreen"
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LocationDetailScreen } from "./src/screens/container-detail/LocationDetailScreen";
import { LocationDetailWebScreen } from "./src/screens/container-detail/LocationDetailWebScreen";
import { UserProvider } from "./src/contexts/UserContext";

const LocationListStack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <UserProvider>
        <NavigationContainer>
          <LocationListStack.Navigator screenOptions={{ headerShown: false }}>
            {/* //Pantallas con Tab */}
            <LocationListStack.Screen name="Main" component={MainStackScreen} />
            {/* //Pantallas sin Tab */}
            <LocationListStack.Screen
              name="LocationDetail"
              component={LocationDetailScreen}
            />
            <LocationListStack.Screen
              name="LocationDetailWeb"
              component={LocationDetailWebScreen}
            />
          </LocationListStack.Navigator>
        </NavigationContainer>
      </UserProvider>

      <StatusBar style="auto" />
    </>
  );
}
