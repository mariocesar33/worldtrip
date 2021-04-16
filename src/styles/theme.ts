import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: { 
    gray: {
      "700": "#47585B",
      "600": "#999999",
      "500": "#CCCCCC",
      "400": "#797D9A",
      "300": "#DADADA",
      "100": "#F5F8FA",
    },
    yellow: {
      "400": "#FFBA08",
      "300": "#FFDB7F",
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.100',
        color: 'gray.700',
      }
    }
  }
});