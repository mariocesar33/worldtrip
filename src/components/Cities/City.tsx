import { Box, Image, Flex, Heading, Text } from "@chakra-ui/react";

interface CityProps {
  country: string;
  city: string;
  flagImgSrc: string;
  cityImgSrc: string;
}

export function City({ country, city, flagImgSrc, cityImgSrc }: CityProps) {
  return (
    <Box borderRadius="4px" overflow="hidden">
      <Image src={cityImgSrc} height="170px" width="100%"/>
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
          <Heading fontSize="xl" fontWeight="500">{city}</Heading>
          <Text 
            marginTop="3" 
            fontSize="md" 
            color="gray.500" 
            fontWeight="500"
          >
            {country}
          </Text>
        </Flex>
        <Image 
          src={flagImgSrc} 
          width="30px"
          height="30px"
          borderTopRadius="50%"
          objectFit="cover"
        />
      </Flex>
    </Box>
  );
}