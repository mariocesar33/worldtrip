import { Flex, HStack } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { NavigationBar } from "../components/NavigationBar";

export default function Home() {
  return (
    <Flex direction="column" height="100vh">
      <Header />

      <Banner />

      <NavigationBar />
    </Flex>
  )
}
