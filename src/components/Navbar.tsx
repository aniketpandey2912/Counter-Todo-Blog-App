import React from "react";
import { Flex, Heading, Spacer, Button, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const handleClick = (path: string) => {
    router.push(path);
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <Flex
      bgColor="blue.100"
      p="20px"
      cursor="pointer"
      color="green"
      alignItems="center"
    >
      <Heading onClick={() => handleClick("/")}>HOME</Heading>
      <Spacer />
      <Heading onClick={() => handleClick("/counter")}>COUNTER</Heading>
      <Spacer />
      <Heading onClick={() => handleClick("/blogs")}>BLOGS</Heading>
      <Spacer />
      <Heading onClick={() => handleClick("/todos")}>TODOS</Heading>
      <Spacer />
      <Button colorScheme="blackAlpha" onClick={handleGoBack}>
        GO BACK
      </Button>
    </Flex>
  );
};

export default Navbar;
