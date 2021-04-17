import { Flex, Grid } from "@chakra-ui/react";
import { Logo } from "./Logo";
import { Previous } from "./Previous";

export function Header() {
  return (
    <Flex
      as="header"
      width="100%"
      maxWidth={1440}
      height={["12", "16", "24"]}
      marginX="auto"
      alignItems="center"
      justifyContent="center"
      background="white"
    >
      <Grid
        height={["12", "16", "24"]}
        marginX="auto"
        width="100%"
        maxWidth={1440}
        alignItems="center"
        justifyContent="center"
        templateColumns="repeat(3, 1fr)"
      >
        <Previous />
        <Logo />
      </Grid>
    </Flex>
  );
}