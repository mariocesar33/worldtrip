import { Img } from "@chakra-ui/react";

export function Logo() {
  return (
    <Img 
      src="/images/Logo.svg" 
      alt="woldtrip" 
      width={["20", "32", "44"]} 
      justifySelf="center"
      gridColumn="2"
    />
  );
};