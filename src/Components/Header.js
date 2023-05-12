import React from "react";
import { Flex, Spacer, Image, Button } from "@chakra-ui/react";
import Logo from "../Images/logo.png";
import SearchBar from "./SearchBar";
import Favorites from "./Favorites";
import Basket from "./Basket";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const navigate = useNavigate();

  return (
    // Header componenet of the website
    <header>
      {/* flex element that holds element items */}
      <Flex
        zIndex={30}
        pos={"fixed"}
        top={0}
        alignItems={"center"}
        bg="white"
        w="100vw"
        h="100px"
        p={{ base: 4, md: 4 }}
        color="black"
        borderBottom="2px"
      >
        <Button
          h={"200px"}
          _hover={{ bg: "transparent" }}
          bg={"transparent"}
          onClick={() => {
            navigate(`/`);
          }}
        >
          <Image width={{ base: "70px", md: "150px" }} src={Logo}></Image>
        </Button>
        <Spacer></Spacer>
        {/* searchbar component */}
        <SearchBar computers={props.computers}></SearchBar>
        <Spacer></Spacer>
        <Spacer></Spacer>
        <Favorites favorites={props.favorites}></Favorites>
        <Basket setBasket={props.setBasket} basket={props.basket}></Basket>
      </Flex>
    </header>
  );
}

export default Header;
