import { Box, Flex, Text, Stack, Image, useMediaQuery } from '@chakra-ui/react';

export const Banner = () => {
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');

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
        {isLargerThan1280 && (
          <Image
            src="/images/airplane.svg"
            alt="airplane"
            position="absolute"
            right="64"
            bottom="-10"
          />
        )}
      </Flex>
    </Box>
  );
};
