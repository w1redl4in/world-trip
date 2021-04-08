import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      '100': '#F5F8FA',
      '200': '#DADADA',
      '500': '#999999',
      '600': '#47585B',
    },
    yellow: {
      '500': '#FFBA08',
    },
  },
  fonts: {
    body: 'Poppins',
    heading: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.100',
      },
    },
  },
});
