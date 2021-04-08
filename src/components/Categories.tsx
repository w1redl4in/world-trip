import {
  Flex,
  Stack,
  Image,
  Text,
  Divider,
  Center,
  useMediaQuery,
} from '@chakra-ui/react';
import { Categories as CategoriesIcons } from '../constants/categories';

export const Categories = () => {
  const [isLargerThan1280] = useMediaQuery('(min-width: 1280px)');

  return (
    <>
      <Flex
        as="section"
        align="center"
        justify="space-around"
        mt="20"
        flexWrap="wrap"
      >
        {Object.entries(CategoriesIcons).map(([key, value]) => (
          <Stack key={key} textAlign="center">
            <Flex direction="column" align="center" justify="space-between">
              {isLargerThan1280 ? (
                <>
                  <Image boxSize="50px" src={value.path} />
                  <Text fontWeight={600} color="gray.500">
                    {key}
                  </Text>
                </>
              ) : (
                <>
                  <Text fontWeight={600} color="gray.500">
                    {key}
                  </Text>
                </>
              )}
            </Flex>
          </Stack>
        ))}
      </Flex>
      <Center height="50px">
        <Divider orientation="horizontal" width="20" />
      </Center>
    </>
  );
};
