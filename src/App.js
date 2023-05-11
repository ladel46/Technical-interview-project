import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import "@fontsource/chivo-mono";
import "@fontsource/oswald";
import Header from "./Components/Header";

import { ChakraProvider, Heading, extendTheme } from "@chakra-ui/react";

const breakpoints = {
  xs: "0px",
  sm: "350px",
  mds: "480px",
  md: "600px",
  mdl: "800px",
  lg: "1020px",
  xl: "1200px",
  xxl: "1500px",
  "2xl": "1850px",
};

const theme = extendTheme({
  fonts: {
    heading: `"Oswald", sans-serif`,
  },
  components: {
    Spinner: {
      sizes: {
        xl: {},
      },
    },
  },
  breakpoints,
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header></Header>
    </ChakraProvider>
  );
}

export default App;
