import React from "react";
import {
  HStack,
  Heading,
  Button,
  Image,
  Box,
  Stack,
  Text,
} from "@chakra-ui/react";
import "@fontsource/nunito-sans";
import { StarIcon, ArrowBackIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

function ItemPage(props) {
  const navigate = useNavigate();

  return (
    // Item page
    <Box
      borderBottom={"1px solid black"}
      w={"100vw"}
      h={{ base: "auto", lg: "80vh" }}
      pb={{ base: "50px", md: "0px" }}
      bg={"gray.900"}
    >
      {/* // go back to homepage button */}

      <Button
        onClick={() => {
          navigate(`/`);
        }}
        bg="transparent"
        left={2}
        top={120}
        pos="absolute"
      >
        <ArrowBackIcon fontSize={"40px"}></ArrowBackIcon>
      </Button>
      {/* stack that houses item details + imege */}
      <Stack
        h={"100%"}
        justify={"start"}
        w={"100%"}
        direction={{ base: "column", lg: "row" }}
      >
        <Stack
          bg={"white"}
          direction={"column"}
          justify={"center"}
          w={{ base: "100%", lg: "40%" }}
          mt={"100px"}
        >
          <Image w={"100%"} src={props.computer.images[0]}></Image>
        </Stack>
        <Stack
          spacing={"10px"}
          borderLeft={{ base: "0px", lg: "10px solid white" }}
          px={"10px"}
          direction={"column"}
          justify={"center"}
          w={{ base: "95%", lg: "60%" }}
        >
          <Heading
            h={{ base: "auto", lg: "80px" }}
            color="red"
            fontSize={"50px"}
          >
            {props.computer.title}
          </Heading>
          <Heading color="white">Brand:{props.computer.brand}</Heading>
          <HStack alignItems="center">
            <Heading color={"white"}>{props.computer.price}$</Heading>
            <Box w={"140px"} borderRadius={"5%"} bg="red">
              {" "}
              <Heading w={"100%"} textAlign={"center"} color={"white"}>
                {Math.round(props.computer.discountPercentage)}% OFF
              </Heading>
            </Box>
          </HStack>
          <Text
            fontSize={"18px"}
            fontFamily={`"Nunito Sans", sans-serif;`}
            color="white"
          >
            {props.computer.description}
          </Text>
          <Heading color={"yellow.500"}>
            {props.computer.rating}/5 <StarIcon></StarIcon>
          </Heading>
          <HStack
            alignItems={"end"}
            justify={"start"}
            pt={{ base: "10px", lg: "50px" }}
          >
            <Button
              bg="red"
              color="white"
              h={"70px"}
              w={"200px"}
              fontSize={"20px"}
            >
              Buy now
            </Button>
            <Button
              color={props.basket.includes(props.computer) ? "black" : "white"}
              bg={props.basket.includes(props.computer) ? "gray" : "red"}
              h={"70px"}
              w={"200px"}
              fontSize={"20px"}
              onClick={() => {
                if (props.basket.includes(props.computer)) {
                  const tempList = props.basket.filter((id) => {
                    return id !== props.computer;
                  });
                  props.setBasket(tempList);
                } else {
                  props.setBasket([...props.basket, props.computer]);
                }
              }}
            >
              {props.basket.includes(props.computer)
                ? "Remove from cart"
                : "Add to cart"}
            </Button>
          </HStack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default ItemPage;
