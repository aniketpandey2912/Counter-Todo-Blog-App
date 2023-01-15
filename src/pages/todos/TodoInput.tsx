import React, { useRef } from "react";
import axios from "axios";
import { Input, Button, Flex } from "@chakra-ui/react";

// https://mock-server-app-ycs2.onrender.com/todos

const TodoInput = ({ addTodo }: any) => {
  const inputRef: React.LegacyRef<HTMLInputElement> = useRef(null);

  const handleAddTodo = () => {
    addTodo(inputRef.current?.value);
    console.log(inputRef.current?.value);
  };

  console.log(inputRef.current?.value);

  return (
    <Flex w="100%">
      <Input
        bgColor="black"
        color="white"
        ref={inputRef}
        placeholder="ADD SOMETHING..."
      />
      <Button colorScheme="green" onClick={handleAddTodo}>
        ADD
      </Button>
    </Flex>
  );
};

export default TodoInput;
