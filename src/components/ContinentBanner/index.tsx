import { Flex, Text } from '@chakra-ui/react';

export function ContinentBanner() {
  return(
    <Flex
      width="100%"
      height={["150px", "300px", "500px"]}
      paddingX={["0", "0", "36"]}
      paddingTop={["0", "0", "72"]}
      backgroundImage="url(/images/BannerEuropa.png)"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      alignItems="center"
      justifyContent={["center", "center", "flex-start"]}
    >
      <Text
        color="gray.100"
        textAlign={["center", "left"]}
        fontSize={["1.75rem", "5xl"]}
        fontWeight="500"

      >
        Europa
      </Text>
    </Flex>
  )
}