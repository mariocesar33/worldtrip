import { Box, Image, Flex, Heading, Text } from "@chakra-ui/react";

export function City() {
  return (
    <Box borderRadius="4px" overflow="hidden">
      <Image src="/images/city/londres.png" height="170px" width="100%"/>
      <Flex
        padding="6"
        alignItems="center"
        justifyContent="space-between"
        background="white"
        border="1px"
        borderColor="yellow.300"
        borderTop="0"
      >
        <Flex direction="column">
          <Heading fontSize="xl" fontWeight="500">Londres</Heading>
          <Text 
            marginTop="3" 
            fontSize="md" 
            color="gray.500" 
            fontWeight="500"
          >
            Reino Unido
          </Text>
        </Flex>
        <Image 
          src="/images/flag/reinoUnido.png" 
          width="30px"
          height="30px"
          borderTopRadius="50%"
          objectFit="cover"
        />
      </Flex>
    </Box>
  );
}