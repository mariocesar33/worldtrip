import { Box } from '@chakra-ui/react';

export function Divider()  {
  return (
    <Box
      background="gray.700"
      width={["16", "24"]}
      height="1"
      marginX="auto"
      marginY={["9", "20"]}
    /> 
  );
}