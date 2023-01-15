import React from "react";
import { Box, Heading, Text, SimpleGrid } from "@chakra-ui/react";

const Blog = ({ posts }: any) => {
  return (
    <Box bgColor="lavender" textAlign="center">
      <Heading>Blogs</Heading>
      <SimpleGrid
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(270px, 1fr))"
        p="5%"
      >
        {posts?.map((post: any) => (
          <Box
            key={post.id}
            border="1px solid black"
            boxShadow="lg"
            p="6"
            rounded="md"
            bg="white"
          >
            <Text mb="20px" fontWeight="bold">
              {post.title}
            </Text>
            <Text>{post.body}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default Blog;
