import { Flex, Image, Center as Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export const Header = () => {
  const history = useRouter();

  return (
    <Flex
      as="header"
      height="100"
      display="flex"
      align="center"
      justify="space-around"
      position="relative"
    >
      {history.pathname !== '/' && (
        <Box
          position="absolute"
          left="20"
          _hover={{
            cursor: 'pointer',
          }}
        >
          <Link href="/">
            <img src="/images/chevron-left.svg" />
          </Link>
        </Box>
      )}
      <Image src="/images/logo.svg" alt="world trip logo" mx="auto" />
    </Flex>
  );
};
