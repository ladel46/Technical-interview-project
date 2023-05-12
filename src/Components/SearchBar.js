import React from "react";
import {
  Box,
  Flex,
  VStack,
  HStack,
  Spacer,
  Image,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

function SearchBar(props) {
  const [search, setSearch] = React.useState("");
  const [searchPannel, setSearchPannel] = React.useState([]);
  const navigate = useNavigate();

  const ref = React.useRef(null);
  const highlightSearch = () => {
    ref.current.focus();
  };

  return (
    // search bar component
    <Popover>
      <InputGroup w={{ base: "40%", md: "40%", lg: "30%", xlg: "20%" }}>
        <InputLeftAddon h={"50px"} w={{ base: "40%", md: "20%" }}>
          <PopoverTrigger>
            {/* button that initiates the search, uses filter method to find the elements inside computer array that include the searched string in their title */}
            <Button
              _hover={{}}
              onClick={() => {
                setSearchPannel(props.computers);
                highlightSearch();
                const tempList = props.computers.filter((computer) =>
                  computer.title.includes(search)
                );
                setSearchPannel(tempList);
              }}
            >
              <SearchIcon></SearchIcon>
            </Button>
          </PopoverTrigger>
        </InputLeftAddon>
        {/* input element */}
        <HStack>
          <Input
            h={"50px"}
            ref={ref}
            type="tel"
            placeholder="Search"
            onChange={(e) => {
              setSearch(e.target.value);
              console.log("Value:", search);
            }}
          />
        </HStack>
        <PopoverContent ml={"100px"} overflowY={"auto"} maxHeight={"500px"}>
          {/* mapping through the searched items and putting them in stacks */}
          {searchPannel.map((computer, index) => {
            return (
              <VStack key={index} alignItems={"center"}>
                <Box w="100%" h="1px" bg={"black"}></Box>
                <Button
                  onClick={() => {
                    navigate(`/${computer.id}`);
                  }}
                  _hover={{ bg: "transparent" }}
                  bg={"transparent"}
                >
                  <Heading fontSize={"15px"} textAlign={"center"}>
                    {computer.title}
                  </Heading>
                </Button>

                <Button
                  onClick={() => {
                    navigate(`/${computer.id}`);
                  }}
                  _hover={{ bg: "transparent" }}
                  bg={"transparent"}
                  h={"180px"}
                  pb={"20px"}
                  w={"80%"}
                >
                  <Image pb={"20px"} src={computer.images[0]}></Image>
                </Button>
              </VStack>
            );
          })}{" "}
        </PopoverContent>
      </InputGroup>
    </Popover>
  );
}

export default SearchBar;
