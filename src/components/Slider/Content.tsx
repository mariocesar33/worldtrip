import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from 'next/link';



import { SwiperSlide } from 'swiper/react';

interface ContentProps {
  url: string;
  href: string;
  title: string;
  subtitle: string;
}

export function Content() {
  return (
    <SwiperSlide>
      <Flex
        width="100%"
        height="100%"
        alignItems="center"
        justifyContent="center"
        backgroundImage="url(/images/ContinentEuropa.png)"
        backgroundRepeat="no-repeat"
        backgroundSize="cover"
        textAlign="center"
      >
        <Link href="/">
          <a>
            <Heading 
              fontSize={["3xl", "4xl", "5xl"]}
              color="gray.100"
              fontWeight="bold"
            >
              Eurpa
            </Heading>
            <Text
              fontWeight="bold"
              color="gray.300"
              fontSize={["0.8rem", "1xl", "2xl"]}
              marginTop={["2", "4"]}
            >
              O continente mais antigo.
            </Text>
          </a>
        </Link>
      </Flex>
    </SwiperSlide>
  );
}