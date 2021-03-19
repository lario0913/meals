import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import {ThemeProvider} from 'styled-components/native'


import { RestuarantScreen } from "./src/features/screens/restuarants.screen";
import { theme } from "./src/infrastructure/theme";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestuarantScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}

