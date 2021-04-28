import { Flex, Heading, Text } from "@chakra-ui/react";
import React, { ReactElement } from "react";

interface InfoProps {
  characteristic: string;
  value: number;
  children?: ReactElement;
}

export function Info({characteristic, value, children}: InfoProps) {
  return(
    <Flex
      direction="column"
      justifyContent="center"
      alignItems={["flex-start", "flex-start", "center"]}
    >
      <Heading
        fontSize={["2xl", "5xl"]}
        color="yellow.400"
        fontWeight="500"
      >
        {value}
      </Heading>
      <Text
        fontWeight="500"
        fontSize={["md", "xl"]}
        color="gray.700"
      >
        {characteristic}
        { children }
      </Text>
    </Flex>
  );
}