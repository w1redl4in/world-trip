import { Box, Flex, Text, Stack, Image } from '@chakra-ui/react';

export const Banner = () => {
  return (
    <Box
      backgroundImage="url('/images/banner.svg')"
      h="268"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Flex
        as="div"
        justify="center"
        h="100%"
        ml="36"
        direction="column"
        position="relative"
      >
        <Stack>
          <Text color="gray.100" fontSize="3xl" fontWeight={500}>
            5 Continentes, <br /> Infinitas possibilidades.
          </Text>
          <Text fontSize="md" color="gray.100" fontWeight={400}>
            Chegou a hora de tirar do papel a viagem que você <br /> sempre
            sonhou.
          </Text>
        </Stack>
        <Image
          src="/images/airplane.svg"
          alt="airplane"
          position="absolute"
          right="64"
          bottom="-10"
        />
      </Flex>
    </Box>
  );
};
