import React from "react";
import { StatusBar, Text, View } from "react-native";
import { Welcome } from "./src/pages/welcome";
import { UserIdentification } from "./src/pages/UserIdentification";
import Routes from "./src/routes";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold,
} from "@expo-google-fonts/jost";

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Routes />
    </>
  );
}
