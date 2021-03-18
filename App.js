import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";


import { RestuarantScreen } from "./src/features/screens/restuarants.screen";

export default function App() {
  return (
    <>
      <RestuarantScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
