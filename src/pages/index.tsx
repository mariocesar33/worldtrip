import { Flex, Heading } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Divider } from "../components/Dividir";
import { Header } from "../components/Header";
import { NavigationBar } from "../components/NavigationBar";
import { Slider } from "../components/Slider";

export default function Home() {
  return (
    <Flex direction="column" >
      <Header />

      <Banner />

      <NavigationBar />

      <Divider /> 

      <Heading 
        marginX="auto"
        textAlign="center"
        fontWeight="500"
        fontSize={["lg", "3xl", "4xl"]}
        marginBottom={["5", "14"]}
      >
        Vamos nessa?<br />
        Então escolha seu continente
      </Heading>

      <Slider />
    </Flex>
  )
}
