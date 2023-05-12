import React from "react";
import {
  HStack,
  VStack,
  Grid,
  Heading,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Box,
} from "@chakra-ui/react";
import { StarIcon, ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

function HomePage(props) {
  const navigate = useNavigate();

  return (
    // homepage section
    <section id="HomePage">
      {/* stack that houses all the home page elements */}
      <VStack
        mt={"100px"}
        spacing={{ base: "20px", md: "80px" }}
        pt={"80px"}
        pb={{ base: "450px", md: "200px" }}
        bg={"gray.900"}
        overflowX={"hidden"}
      >
        <Heading color={"white"} textAlign={"center"} fontSize={"50px"}>
          OUR MINI COMPUTERS
        </Heading>
        <HStack w={"100%"} bg={"white"} justifyContent={"end"}>
          <Heading fontWeight={"normal"} fontSize={"30px"}>
            Sort:
          </Heading>
          {/* menu + button that chnanges our sort state */}
          <Menu>
            <>
              <MenuButton w={"200px"} as={Button}>
                <Heading w={"100%"} fontSize={"18px"} textAlign={"center"}>
                  Price
                  {props.sort == "up" ? (
                    <ChevronUpIcon></ChevronUpIcon>
                  ) : (
                    <ChevronDownIcon fontSize={"20px"}></ChevronDownIcon>
                  )}
                </Heading>
              </MenuButton>
              <MenuList>
                <MenuItem
                  onClick={() => {
                    props.setSort("up");
                    let sortedComputers = props.computer.sort((p1, p2) =>
                      p1.price > p2.price ? 1 : p1.price < p2.price ? -1 : 0
                    );
                    props.setComputer(sortedComputers);
                  }}
                >
                  <Heading w={"100%"} fontSize={"18px"} textAlign={"center"}>
                    Price<ChevronUpIcon></ChevronUpIcon>
                  </Heading>
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    props.setSort("down");
                    let sortedComputers = props.computer.sort((p1, p2) =>
                      p1.price < p2.price ? 1 : p1.price > p2.price ? -1 : 0
                    );
                    props.setComputer(sortedComputers);
                  }}
                >
                  <Heading w={"100%"} fontSize={"18px"} textAlign={"center"}>
                    Price<ChevronDownIcon fontSize={"20px"}></ChevronDownIcon>{" "}
                  </Heading>
                </MenuItem>
              </MenuList>
            </>
          </Menu>
        </HStack>
        {/* Grid box for  products */}
        <Grid
          templateColumns={{
            base: "repeat(1, 300px)",
            md: "repeat(2, 400px)",
            xlg: "repeat(3,400px)",
          }}
          justifyContent={"center"}
          w={"60%"}
          gap={"5%"}
        >
          {/* maps through all the product items and houses the products details in cards */}
          {props.computer.map((computer, index) => {
            return (
              <Card
                alignItems={"center"}
                bg={"white"}
                key={index}
                w={{ base: "300px", md: "380px" }}
              >
                <CardHeader>
                  <Button
                    onClick={() => {
                      navigate(`/${computer.id}`);
                    }}
                    _hover={{ bg: "transparent" }}
                    bg={"transparent"}
                  >
                    <Heading
                      fontSize={{ base: "28px", md: "32px" }}
                      fontWeight={"medium"}
                      color={"red"}
                    >
                      {computer.title}
                    </Heading>
                  </Button>
                </CardHeader>
                <CardBody w={"100%"}>
                  <Button
                    _hover={{ bg: "transparent" }}
                    bg={"transparent"}
                    h={"150px"}
                    onClick={() => {
                      navigate(`/${computer.id}`);
                    }}
                  >
                    <Image
                      border={"2px solid black"}
                      borderRadius={"3%"}
                      width={"350px"}
                      height={"180px"}
                      src={computer.images[0]}
                    ></Image>
                  </Button>
                </CardBody>
                <CardFooter>
                  <HStack
                    w={"100%"}
                    justifyItems={"center"}
                    spacing={{ base: "40px", md: "90px" }}
                  >
                    {/* button that adds a product to the favorite items array */}
                    <Button
                      onClick={() => {
                        if (props.favorites.includes(computer)) {
                          const tempList = props.favorites.filter((id) => {
                            return id !== computer;
                          });
                          props.setFavorite(tempList);
                        } else {
                          props.setFavorite([...props.favorites, computer]);
                        }
                      }}
                      _hover={"transparent"}
                      borderRadius={"50%"}
                      bg={"transparent"}
                      color={
                        props.favorites.includes(computer)
                          ? "yellow.400"
                          : "gray.300"
                      }
                    >
                      <StarIcon fontSize={"40px"}></StarIcon>{" "}
                    </Button>
                    <Heading
                      color={"black"}
                      fontSize="30px"
                    >{`${computer.price}$`}</Heading>
                    <Popover>
                      <PopoverTrigger>
                        <Button
                          _hover={"transparent"}
                          borderRadius={"50%"}
                          bg={"transparent"}
                        >
                          <Image src="https://cdn-icons-png.flaticon.com/512/5218/5218600.png"></Image>
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent>
                        {/* button that adds a product to the cart items array */}

                        <Button
                          onClick={() => {
                            if (props.basket.includes(computer)) {
                              const tempList = props.basket.filter((id) => {
                                return id !== computer;
                              });
                              props.setBasket(tempList);
                            } else {
                              props.setBasket([...props.basket, computer]);
                            }
                          }}
                        >
                          {props.basket.includes(computer)
                            ? "Remove from basket"
                            : "Add to basket"}
                        </Button>
                      </PopoverContent>
                    </Popover>
                  </HStack>
                </CardFooter>
              </Card>
            );
          })}
        </Grid>
      </VStack>
    </section>
  );
}

export default HomePage;
