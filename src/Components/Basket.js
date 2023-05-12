import React from "react";
import {
  Box,
  Image,
  Heading,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  VStack,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

function Basket(props) {
  // price vaariable that shows on the cart menu
  let price = 0;

  return (
    // basket components
    <>
      {/* indication of how  many items are added to cart */}
      <Box
        h={"25px"}
        w={"25px"}
        borderRadius={"50%"}
        bg="black"
        color={"white"}
        top={"55px"}
        right={6}
        pos={"absolute"}
        textAlign={"center"}
      >
        {props.basket.length}
      </Box>
      {/* pop down menu that houses cart elements */}
      <Popover>
        <Box color="black" pos={"absolute"}></Box>
        <PopoverTrigger>
          {/* cart button */}
          <Button
            _hover={"transparent"}
            w="80px"
            h="80px"
            borderRadius={"50%"}
            bg={"transparent"}
          >
            <Image
              w={"40px"}
              h={"40px"}
              src="https://cdn-icons-png.flaticon.com/512/5218/5218600.png"
            ></Image>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          overflowY={"auto"}
          h={props.basket.length > 0 ? "300px" : "140px"}
        >
          {/* stack that houses cart elemtns */}
          <VStack h={"250px"} overflowY={"auto"} spacing={"10px"}>
            <Heading fontSize={"30px"} mt={"5px"} color={"red"}>
              Cart
            </Heading>
            {props.basket.length > 0 ? null : (
              <Heading fontSize={"20px"} color={"black"}>
                No items added
              </Heading>
            )}
            {/* mapping through items inside the cart */}
            {props.basket.map((item) => {
              price = price + item.price;
              return (
                <VStack alignItems={"center"}>
                  <Box w="100%" h="1px" bg={"black"}></Box>
                  <Flex
                    py={"10px"}
                    w={"100%"}
                    position={"relative"}
                    align={"center"}
                  >
                    <Heading w={"100%"} fontSize={"15px"} textAlign={"center"}>
                      {item.title}
                    </Heading>
                    <Spacer></Spacer>
                    {/*X button next to each cart item   that uses the filter method to remove elements from the cart elements array */}
                    <Button
                      onClick={() => {
                        const tempList = props.basket.filter((id) => {
                          return id !== item;
                        });
                        props.setBasket(tempList);
                      }}
                      bg={"transparent"}
                      pos="absolute"
                      right="0"
                    >
                      <CloseIcon></CloseIcon>
                    </Button>
                  </Flex>
                  <Image src={item.images[0]}></Image>
                </VStack>
              );
            })}
          </VStack>
          <Flex py={"10px"} align={"center"} justify={"space-around"}>
            <Heading textAlign={"end"} px={"20px"} fontSize={"20px"}>
              Price:{price}$
            </Heading>
            <Button bg={"red"} color="white">
              Pay
            </Button>
          </Flex>
        </PopoverContent>
      </Popover>
    </>
  );
}

export default Basket;
