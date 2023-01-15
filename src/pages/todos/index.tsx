import React, { useEffect, useState } from "react";

import { Box, Heading, VStack } from "@chakra-ui/react";
import TodoInput from "./TodoInput";

import axios from "axios";
import TodoList from "./TodoList";

// https://mock-server-app-ycs2.onrender.com/todos

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const res: any = await axios.get(
      "https://mock-server-app-ycs2.onrender.com/todos"
    );
    setTodos(res.data);
  };

  const addTodo = async (text: string) => {
    let newTodo = {
      title: text,
      isCompleted: false,
    };

    let res = await axios.post(
      "https://mock-server-app-ycs2.onrender.com/todos",
      newTodo
    );
    getTodos();
  };

  const deleteTodo = async (id: number | string) => {
    let res = await axios.delete(
      "https://mock-server-app-ycs2.onrender.com/todos/" + id
    );
    getTodos();
  };

  const toggleStatus = async (id: number | string, newStatus: boolean) => {
    let res = await axios.patch(
      "https://mock-server-app-ycs2.onrender.com/todos/" + id,
      { isCompleted: newStatus }
    );
    getTodos();
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <Box bgColor="lavender" h="100vmax" textAlign="center">
      <Heading mb="30px">TODO-APP</Heading>
      <VStack w="40%" m="auto">
        <TodoInput addTodo={addTodo} />
        {todos.length === 0 ? (
          <Heading as="h1" size="lg">
            Loading...
          </Heading>
        ) : (
          <Heading as="h1" size="lg">
            Todo List
          </Heading>
        )}

        <TodoList
          todos={todos}
          toggleStatus={toggleStatus}
          deleteTodo={deleteTodo}
        />
      </VStack>
    </Box>
  );
};

export default TodoApp;
