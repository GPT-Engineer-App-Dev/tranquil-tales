import { Box, Container, Flex, Heading, Text, VStack, HStack, Link, Divider, Stack } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      {/* Navigation Bar */}
      <Flex as="nav" justify="space-between" align="center" mb={8} p={4} bg="gray.100" borderRadius="md">
        <Heading as="h1" size="lg">My Blog</Heading>
        <HStack spacing={4}>
          <Link href="#">Home</Link>
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
        </HStack>
      </Flex>

      <Flex direction={{ base: "column", md: "row" }} align="start" spacing={8}>
        {/* Main Content */}
        <Box flex="3" p={4}>
          <VStack spacing={8} align="start">
            <Box>
              <Heading as="h2" size="md">Blog Post Title 1</Heading>
              <Text fontSize="sm" color="gray.500">January 1, 2023</Text>
              <Text mt={2}>This is a short excerpt from the blog post...</Text>
            </Box>
            <Divider />
            <Box>
              <Heading as="h2" size="md">Blog Post Title 2</Heading>
              <Text fontSize="sm" color="gray.500">February 1, 2023</Text>
              <Text mt={2}>This is a short excerpt from the blog post...</Text>
            </Box>
            <Divider />
            <Box>
              <Heading as="h2" size="md">Blog Post Title 3</Heading>
              <Text fontSize="sm" color="gray.500">March 1, 2023</Text>
              <Text mt={2}>This is a short excerpt from the blog post...</Text>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" p={4} bg="gray.50" borderRadius="md">
          <Heading as="h3" size="md" mb={4}>Recent Posts</Heading>
          <VStack spacing={4} align="start">
            <Link href="#">Recent Post 1</Link>
            <Link href="#">Recent Post 2</Link>
            <Link href="#">Recent Post 3</Link>
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

      {/* Footer */}
      <Box as="footer" mt={8} p={4} bg="gray.100" borderRadius="md">
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