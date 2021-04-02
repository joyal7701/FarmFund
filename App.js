import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import MessagingGroupScreen from "./screens/MessagingGroupScreen";
import AddChatScreen from "./screens/AddChatScreen";
import ChatScreen from "./screens/ChatScreen";
import HomeScreen from "./screens/HomeScreen";
import page1 from "./screens/page1";
import page2 from "./screens/page2";
import page3 from "./screens/page3";
import Apply from "./screens/Apply";
import Wheat from "./screens/Wheat";
import Corn from "./screens/Corn";
import Rice from "./screens/Rice";
import Bajra from "./screens/Bajra";
import Cotton from "./screens/Cotton";

const Stack = createStackNavigator();

const globalScreenOptions = {
  headerStyle: { backgroundColor: "blue" },
  headerTitleStyle: { color: "white" },
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen
          name="Messaging Groups"
          component={MessagingGroupScreen}
        />
        <Stack.Screen name="AddChat" component={AddChatScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="All Subsidies" component={page1} />
        <Stack.Screen name="Agro Shops" component={page2} />
        <Stack.Screen name="Market Yard" component={page3} />
        <Stack.Screen name="Subsidy Registered" component={Apply} />
        <Stack.Screen name="Wheat" component={Wheat} />
        <Stack.Screen name="Corn" component={Corn} />
        <Stack.Screen name="Bajra" component={Bajra} />
        <Stack.Screen name="Cotton" component={Cotton} />
        <Stack.Screen name="Rice" component={Rice} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
