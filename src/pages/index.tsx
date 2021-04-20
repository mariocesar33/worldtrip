import { Flex, Heading } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Divider } from "../components/Dividir";
import { Header } from "../components/Header";
import { NavigationBar } from "../components/NavigationBar";

export default function Home() {
  return (
    <Flex direction="column" height="100vh">
      <Header />

      <Banner />

      <NavigationBar />

      <Divider />

      <Heading 
        marginX="auto"
        textAlign="center"
      >
        Vamos nessa?<br />
        Então escolha seu continente
      </Heading>
    </Flex>
  )
}
