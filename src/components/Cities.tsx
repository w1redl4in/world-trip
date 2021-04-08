import { Stack, Text, Flex, Box, Image, Wrap } from '@chakra-ui/react';

const Cards = {
  Londres: {
    path: '/images/cities/londres/londres.svg',
    flag: '/images/cities/londres/flag.svg',
  },
  Londres1: {
    path: '/images/cities/londres/londres.svg',
    flag: '/images/cities/londres/flag.svg',
  },
  Londres2: {
    path: '/images/cities/londres/londres.svg',
    flag: '/images/cities/londres/flag.svg',
  },
  Londres3: {
    path: '/images/cities/londres/londres.svg',
    flag: '/images/cities/londres/flag.svg',
  },
  Londres4: {
    path: '/images/cities/londres/londres.svg',
    flag: '/images/cities/londres/flag.svg',
  },
  Londres5: {
    path: '/images/cities/londres/londres.svg',
    flag: '/images/cities/londres/flag.svg',
  },
};

export const Cities = () => {
  return (
    <Stack px={[0, 0, 44]} my={[0, 0, 10]}>
      <Text fontWeight="medium" fontSize={36}>
        Cidades +100
      </Text>

      <Wrap flexWrap="wrap" justify="space-between">
        {Object.entries(Cards).map(([key, value]) => (
          <Box key={key} width="256" height="279" bg="white" my="5">
            <Image src={value.path} alt={key} />
            <Flex justify="space-around">
              <Stack h="100%" p="6">
                <Text fontSize={20} fontWeight="medium">
                  {key}
                </Text>
                <Text fontSize={16} fontWeight="medium" color="gray.500">
                  {key}
                </Text>
              </Stack>
              <Image src={value.flag} alt={key} />
            </Flex>
          </Box>
        ))}
      </Wrap>
    </Stack>
  );
};
