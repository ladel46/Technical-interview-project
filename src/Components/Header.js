import React from "react";
import { Box, Heading } from "@chakra-ui/react";

function Header() {
  return (
    <header>
      <Box bg="red" w="100%" p={4} color="white">
        <Heading>Price</Heading>
      </Box>
    </header>
  );
}

export default Header;
