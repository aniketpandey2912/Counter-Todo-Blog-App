import React, { useState } from "react";
import { Box, Button, Heading, VStack } from "@chakra-ui/react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <Box
      h="670px"
      backgroundImage={
        "https://cdn.fansshare.com/image/backgroundimage/ult-background-repeat-967811056.jpg"
      }
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    >
      <VStack textAlign="center" py="20%" color="white">
        <Heading>Counter : {count}</Heading>
        <Box>
          <Button
            colorScheme="green"
            disabled={count === 0}
            onClick={() => setCount((prev) => prev - 1)}
          >
            DEC
          </Button>
          <Button
            colorScheme="green"
            onClick={() => setCount((prev) => prev + 1)}
            ml="10px"
          >
            INC
          </Button>
          <Button
            disabled={count === 0}
            colorScheme="green"
            onClick={() => setCount(0)}
            ml="10px"
          >
            Reset
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default Counter;
