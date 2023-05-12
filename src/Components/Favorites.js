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
} from "@chakra-ui/react";
import { StarIcon, AddIcon, SearchIcon } from "@chakra-ui/icons";

function Favorites(props) {
  return (
    // favorites menu components
    <>
      <Popover>
        <PopoverTrigger>
          <Button
            _hover={"transparent"}
            w={{ base: "50px", md: "80px" }}
            h={{ base: "50px", md: "80px" }}
            borderRadius={"50%"}
            bg={"transparent"}
          >
            <StarIcon fontSize={{ base: "30px", md: "40px" }}></StarIcon>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          overflowY={"auto"}
          h={props.favorites.length > 0 ? "300px" : "100px"}
        >
          {/* stack for elements inside the favorites array */}
          <VStack spacing={"20px"}>
            <Heading fontSize={"30px"} color={"red"}>
              Favorited items
            </Heading>
            {props.favorites.length > 0 ? null : (
              <Heading fontSize={"20px"} color={"black"}>
                No items added
              </Heading>
            )}
            {/* mapping through all the elements in the favorites array and putting the details on a vstack */}
            {props.favorites.map((favorite, index) => {
              return (
                <VStack key={index} alignItems={"center"}>
                  <Box w="100%" h="1px" bg={"black"}></Box>

                  <Heading fontSize={"15px"} textAlign={"center"}>
                    {favorite.title}
                  </Heading>
                  <Image w={"80%"} src={favorite.images[0]}></Image>
                </VStack>
              );
            })}
          </VStack>
        </PopoverContent>
      </Popover>
    </>
  );
}

export default Favorites;
