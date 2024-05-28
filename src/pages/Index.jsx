import { useState } from "react";
import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Divider, Stack, Input, Textarea, Button, useColorMode, IconButton } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram, FaSun, FaMoon } from "react-icons/fa";

const Index = () => {
  const [posts, setPosts] = useState([
    { title: "Blog Post Title 1", date: "January 1, 2023", content: "This is a short excerpt from the blog post..." },
    { title: "Blog Post Title 2", date: "February 1, 2023", content: "This is a short excerpt from the blog post..." },
    { title: "Blog Post Title 3", date: "March 1, 2023", content: "This is a short excerpt from the blog post..." },
  ]);

  const [newPost, setNewPost] = useState({ title: "", date: "", content: "" });
  const { colorMode, toggleColorMode } = useColorMode();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts([...posts, newPost]);
    setNewPost({ title: "", date: "", content: "" });
  };

  return (
    <Container maxW="container.xl" p={4}>
      {/* Navigation Bar */}
      <Flex as="nav" justify="space-between" align="center" mb={8} p={4} bg={colorMode === "light" ? "gray.100" : "gray.700"} borderRadius="md">
        <Heading as="h1" size="lg">My Blog</Heading>
        <HStack spacing={4}>
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
          <IconButton
            icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
            isRound
            size="md"
            alignSelf="flex-end"
            onClick={toggleColorMode}
          />
        </HStack>
      </Flex>

      <Flex direction={{ base: "column", md: "row" }} align="start" spacing={8}>
        {/* Main Content */}
        <Box flex="3" p={4}>
          <VStack spacing={8} align="start">
            {posts.map((post, index) => (
              <Box key={index}>
                <Heading as="h2" size="md">{post.title}</Heading>
                <Text fontSize="sm" color="gray.500">{post.date}</Text>
                <Text mt={2}>{post.content}</Text>
                <Divider />
              </Box>
            ))}
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" p={4} bg={colorMode === "light" ? "gray.50" : "gray.600"} borderRadius="md">
          <Heading as="h3" size="md" mb={4}>Recent Posts</Heading>
          <VStack spacing={4} align="start">
            {posts.slice(0, 3).map((post, index) => (
              <Link key={index} href="#">{post.title}</Link>
            ))}
          </VStack>
          <Divider my={6} />
          <Heading as="h3" size="md" mb={4}>Categories</Heading>
          <VStack spacing={4} align="start">
            <Link href="#">Category 1</Link>
            <Link href="#">Category 2</Link>
            <Link href="#">Category 3</Link>
          </VStack>
        </Box>
      </Flex>

      {/* New Post Form */}
      <Box mt={8} p={4} bg={colorMode === "light" ? "gray.100" : "gray.700"} borderRadius="md">
        <Heading as="h3" size="md" mb={4}>Add New Post</Heading>
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="start">
            <Input
              placeholder="Title"
              name="title"
              value={newPost.title}
              onChange={handleChange}
              required
            />
            <Input
              placeholder="Date"
              name="date"
              value={newPost.date}
              onChange={handleChange}
              required
            />
            <Textarea
              placeholder="Content"
              name="content"
              value={newPost.content}
              onChange={handleChange}
              required
            />
            <Button type="submit" colorScheme="blue">Add Post</Button>
          </VStack>
        </form>
      </Box>

      {/* Footer */}
      <Box as="footer" mt={8} p={4} bg={colorMode === "light" ? "gray.100" : "gray.700"} borderRadius="md">
        <Flex justify="center" mb={4}>
          <HStack spacing={4}>
            <Link href="#"><FaTwitter /></Link>
            <Link href="#"><FaFacebook /></Link>
            <Link href="#"><FaInstagram /></Link>
          </HStack>
        </Flex>
        <Text textAlign="center" fontSize="sm" color="gray.600">&copy; 2023 My Blog. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;