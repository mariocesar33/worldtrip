import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from 'next/link';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Navigation, Pagination, A11y]);

export function Slider() {
  return (
    <Flex
      height={["250px", "450px"]}
      width="100%"
      maxWidth={1440}
      marginX="auto"
      marginBottom={["5", "10"]}
    >
      <Swiper
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 0.4 }}
      style={{ width: "100%", flex: "1" }}
      >
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

        <SwiperSlide>
          <Flex
            width="100%"
            height="100%"
            alignItems="center"
            justifyContent="center"
            backgroundImage="url(/images/ContinentAfrica.jpg)"
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
                  Africa
                </Heading>
                <Text
                  fontWeight="bold"
                  color="gray.300"
                  fontSize={["0.8rem", "1xl", "2xl"]}
                  marginTop={["2", "4"]}
                >
                  O continente é considerado o berço da humanidade.
                </Text>
              </a>
            </Link>
          </Flex>
        </SwiperSlide>
      </Swiper>

    </Flex>
  );
} 