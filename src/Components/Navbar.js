import React from "react";

import { Flex, Spacer, Box, Heading } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex
      minWidth="max-content"
      alignItems="center"
      gap="2"
      p="16px"
      bgColor={"lavender"}
    >
      <Box p="2">
        <Heading size="md">Trivia Guy</Heading>
      </Box>
      <Spacer />
      {/* <Button colorScheme='teal'>Log in</Button> */}
    </Flex>
  );
};

export default Navbar;
