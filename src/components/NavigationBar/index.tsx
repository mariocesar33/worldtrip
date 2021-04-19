import { HStack } from "@chakra-ui/react";
import { NavLink } from "./NavLink";

export function NavigationBar() {
  return (
    <HStack marginTop="24" marginX="auto" width="100%" maxWidth={1440}  alignItems="center" justifyContent="space-between">
      <NavLink src="/images/cocktail.svg" >
        vida noturna
      </NavLink>
      <NavLink src="/images/surf.svg">
        praia
      </NavLink>
      <NavLink src="/images/building.svg">
        moderno
      </NavLink>
      <NavLink src="/images/museum.svg">
        clássico
      </NavLink>
      <NavLink src="/images/earth.svg">
        e mais...
      </NavLink>
    </HStack>
  );
}