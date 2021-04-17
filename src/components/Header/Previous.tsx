import { Icon } from '@chakra-ui/react';
import Link from 'next/link';
import { FiChevronLeft } from "react-icons/fi";

export function Previous() {
  return (
    <Link href="/" passHref >
      <a><Icon as={FiChevronLeft} fontSize={["14", "24", "28"]}/></a>
    </Link>    
  );
}