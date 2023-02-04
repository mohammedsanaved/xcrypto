import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import me from "../assets/me.jpg";
const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}> About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We provide the real Time Data for Crypto Invenstor
          </Text>
        </VStack>
        <VStack>
          <Avatar
            boxSize={"28"}
            mt={["4", "0"]}
            src={me}
            alignSelf={"center"}
          />
          <Text>Mohammed Sanaved</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
