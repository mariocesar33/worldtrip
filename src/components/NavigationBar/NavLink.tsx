import { Flex, Img, Link as ChakraLink, LinkProps, Text, useBreakpointValue } from "@chakra-ui/react";

interface NavLinkProps extends LinkProps {
  children: string;
  src: string;
  href?: string
}

export function NavLink({ children, src, href, ...rest }: NavLinkProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <ChakraLink  {...rest}>
      <Flex 
        direction={["row", "column"]} 
        alignItems="center" 
        justifyContent="center"
      >
        { isWideVersion ? <Img src={src} /> : <Text color="yellow.400" fontSize="4xl" marginRight="2">•</Text> }
        
        <Text 
          marginTop="7" 
          fontWeight="600" 
          color="gray.700" 
          fontSize={["md", "xl", "2xl"]}
        >
          {children}
        </Text>
      </Flex>
    </ChakraLink>
  )
}