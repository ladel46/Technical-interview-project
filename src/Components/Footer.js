import React from "react";
import { Flex, HStack, Image, Heading, VStack } from "@chakra-ui/react";
import Logo from "../Images/logo.png";

function Footer() {
  return (
    // footer  component
    <footer>
      <Flex bg={"white"} h={"200px"} w={"100vw"} templateColumns={"()"}>
        {/* stack that houses  all the footer content */}
        <HStack justifyContent={"center"} w={{ base: "30%", md: "50%" }}>
          <Image width={{ base: "100px", md: "250px" }} src={Logo}></Image>
        </HStack>
        <VStack justifyContent={"center"} w="50%">
          <Heading fontSize={{ base: "16px", md: "25px" }}>CONTACT US</Heading>
          <Heading fontSize={{ base: "12pxpx", md: "18px" }}>Adress:</Heading>
          <Heading fontSize={{ base: "12pxpx", md: "18px" }}>
            Phone Number:
          </Heading>
          <Heading fontSize={{ base: "12pxpx", md: "18px" }}>Email:</Heading>
        </VStack>
        <VStack justifyContent={"center"} w="25%">
          <Heading fontSize={{ base: "12px", md: "16px" }}>
            © 2023 The Computer Store Inc. All rights reserved.
          </Heading>
        </VStack>
      </Flex>
    </footer>
  );
}

export default Footer;
