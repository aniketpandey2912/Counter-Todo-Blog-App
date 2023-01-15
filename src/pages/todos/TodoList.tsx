import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";

function TodoList({ todos, toggleStatus, deleteTodo }: any) {
  return (
    <Box>
      {todos?.map((todo: any) => (
        <Box
          key={todo.id}
          mb="20px"
          bgColor="blackAlpha.800"
          p="20px"
          color="white"
          borderRadius="10px"
        >
          <Text bgColor={todo.isCompleted ? "green" : "orange"} mb="10px">
            {todo.title} - {todo.isCompleted ? "Completed" : "Pending"}
          </Text>
          <Button
            size="sm"
            colorScheme={todo.isCompleted ? "green" : "cyan"}
            onClick={() => toggleStatus(todo.id, !todo.isCompleted)}
          >
            {todo.isCompleted ? "MARK AS PENDING" : "MARK AS COMPLETED"}
          </Button>
          <Button
            size="sm"
            colorScheme="red"
            ml="10px"
            onClick={() => deleteTodo(todo.id)}
          >
            DELETE
          </Button>
        </Box>
      ))}
    </Box>
  );
}

export default TodoList;
