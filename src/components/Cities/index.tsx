import { Grid, Heading } from "@chakra-ui/react";

import { City } from "./City";

export function Cities() {
  return (
    <>
      <Heading
        fontWeight="500" 
        fontSize={["2xl", "4xl"]}
        marginBottom="18"
      >
        Cidades +100
      </Heading>
      <Grid 
        templateColumns={["1fr", "1fr 1fr", "repeat(3, 1fr)", "repeat(4, 1fr)"]}
        gap={["20px", "45px"]}
        alignItems="center"
        justifyContent="center"
        paddingX={["30px", "0"]}
      >
        <City cityImgSrc="/images/city/londres.png" country="Reino Unido" city="Londres" flagImgSrc="/images/flag/reinoUnido.png"  />
        <City cityImgSrc="/images/city/paris.png" country="França" city="Paris" flagImgSrc="/images/flag/franca.png"  />
        <City cityImgSrc="/images/city/roma.png" country="Itália" city="Roma" flagImgSrc="/images/flag/italia.png"  />
        <City cityImgSrc="/images/city/praga.png" country="República Checa" city="Praga" flagImgSrc="/images/flag/republicaTcheca.png"  />
        <City cityImgSrc="/images/city/amsterda.png" country="Holanda" city="Amsterdã" flagImgSrc="/images/flag/holanda.png"  />
      </Grid>
    </>
  );
}