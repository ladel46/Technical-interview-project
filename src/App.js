import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import "@fontsource/chivo-mono";
import "@fontsource/oswald";
import Header from "./Components/Header";
import ItemPage from "./Components/ItemPage";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";
const breakpoints = {
  sm: "480px",
  md: "780px",
  lg: "980px",
  xlg: "1480px",
  xl: "1800px",
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
  color: {
    blueLight: "#1ecbe1",
  },
});

function App() {
  const [favorites, setFavorites] = React.useState([]);
  const [sort, setSort] = React.useState("down");
  const [basket, setBasket] = React.useState([]);

  const [computers, setComputer] = React.useState([]);
  React.useEffect(() => {
    fetch("https://dummyjson.com/products/category/laptops")
      .then((res) => res.json())
      .then((data) => {
        setComputer(data.products);
      });
  }, []);

  return (
    <ChakraProvider theme={theme}>
      {/* Header componnet */}
      <Header
        computers={computers}
        favorites={favorites}
        basket={basket}
        setBasket={setBasket}
      ></Header>
      <Routes>
        {/* HomePage */}
        <Route
          path="/"
          element={
            <HomePage
              favorites={favorites}
              setFavorite={setFavorites}
              computer={computers}
              setComputer={setComputer}
              setSort={setSort}
              sort={sort}
              basket={basket}
              setBasket={setBasket}
            />
          }
        ></Route>
        {/* Item pages */}
        {computers.map((computer, index) => {
          return (
            <Route
              key={index}
              path={`/${computer.id}`}
              element={
                <ItemPage
                  basket={basket}
                  setBasket={setBasket}
                  computer={computer}
                ></ItemPage>
              }
            ></Route>
          );
        })}
      </Routes>
      <Footer></Footer>
    </ChakraProvider>
  );
}

export default App;
