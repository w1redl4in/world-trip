import { Flex, Stack, Image, Text, Divider, Center } from '@chakra-ui/react';
import { Categories as CategoriesIcons } from '../constants/categories';

export const Categories = () => {
  return (
    <>
      <Flex
        as="section"
        px="180"
        h="140"
        align="center"
        justify="space-between"
        mt="20"
      >
        {Object.entries(CategoriesIcons).map(([key, value]) => (
          <Stack key={key} textAlign="center">
            <Image src={value.path} />
            <Text fontWeight={600} color="gray.500">
              {key}
            </Text>
          </Stack>
        ))}
      </Flex>
      <Center height="50px">
        <Divider orientation="horizontal" width="20" colorScheme="gray" />
      </Center>
    </>
  );
};
