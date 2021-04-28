import { Flex, Grid, Text } from "@chakra-ui/react";

import { Info } from "./Info";
import { MyPopover } from "./MyPopover";

export function ContinentDescription() {
  return(
    <Grid 
      templateColumns={["1fr", "1fr", "1fr 1fr", "1.2fr 1fr"]}
      gap={[5, 10, 16, 20]}
      marginY={["8", "20"]}
    >
      <Text
        fontSize={["lg", "xl", "xl", "2xl"]}
        color="gray.700"
        textAlign="justify"
      >
        A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo 
        a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a 
        leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, 
        o Cáucaso, e o mar Negro a sudeste
      </Text>

      <Flex alignItems="center" justifyContent="space-between">
        <Info characteristic="país" value={50} />
        <Info characteristic="línguas" value={60} />
        <Info characteristic="cidades +100" value={27}>
          <MyPopover />
        </Info>
      </Flex>
    </Grid>
  );
}