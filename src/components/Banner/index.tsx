import { Box, Flex, Heading, Image, Text, useBreakpointValue } from "@chakra-ui/react";

export function Banner() {
  const isWideVersion = useBreakpointValue({
    base: true,
    lg: false,
  });
  return (
    <Flex
      width="100%"
      height={["40", "60", "80"]}
      backgroundImage="url('/images/banner.jpg')"
      backgroundPosition={["100% 20%", "100% 20%", "100% 30%"]}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Flex
        width="100%"
        marginX="auto"
        maxWidth={1440}
        alignItems="center"
        justifyContent="space-between"
      >
        <Box marginLeft="4">
          <Heading color="gray.100" fontWeight="500" fontSize={["xl", "2xl", "4xl"]}>
            5 Continentes,<br/>infinitas possibilidades.
          </Heading>
          <Text 
            marginTop="5"
            color="gray.300"
            fontSize={["0.8rem", "xl"]}
            maxWidth={["100%", "550px"]}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
          </Text>
        </Box>
        { !isWideVersion && (
          <Image 
            src="/images/Airplane.svg" 
            alt="yellow-plane"
            width={[]}
            transform="translateY(48px)" 
            marginLeft="8"
          />
        )}
        
      </Flex>
    </Flex>
  );
}