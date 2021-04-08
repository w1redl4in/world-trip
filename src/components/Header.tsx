import { Flex, Image } from '@chakra-ui/react';

export const Header = () => {
  return (
    <Flex
      as="header"
      height="100"
      display="flex"
      align="center"
      justify="center"
    >
      <Image src="/images/logo.svg" alt="world trip logo" />
    </Flex>
  );
};
