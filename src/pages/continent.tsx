import { Flex } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { ContinentBanner } from '../components/ContinentBanner';
import { ContinentDescription } from '../components/ContinentDescription';

export default function Continent() {
  return (
    <Flex direction="column">
      <Header />
      <ContinentBanner />

      <Flex 
        direction="column"
        maxWidth={1440}
        marginX="auto"
        marginBottom="10"
        paddingX="1rem"
      >
        <ContinentDescription />
      </Flex>

    </Flex>
  );
}