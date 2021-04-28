import { Grid, Flex, Text } from "@chakra-ui/react";

export function ContinentDescription() {
  return(
    <Grid 
      templateColumns={["1fr", "1fr", "1fr 1fr", "1.2fr 1fr"]}
      gap={[5, 10, 16, 20]}
      marginY={["8", "20"]}
    >
      <Text>
        A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo 
        a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a 
        leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, 
        o Cáucaso, e o mar Negro a sudeste
      </Text>
    </Grid>
  );
}