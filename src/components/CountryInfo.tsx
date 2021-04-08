import { Flex, SimpleGrid, Text } from '@chakra-ui/react';

export const CountryInfo: React.FC = () => {
  return (
    <SimpleGrid
      columns={[1, 1, 2]}
      spacing={40}
      px={[0, 0, 40]}
      py={[0, 0, 50]}
    >
      <Flex align="center" m="5">
        <Text fontSize={24} fontWeight="normal" color="gray.600">
          A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.
        </Text>
      </Flex>
      <Flex justify="space-around" align="center">
        <Flex direction="column" align="center">
          <Text fontSize={40} color="yellow.500" fontWeight="semibold">
            50
          </Text>
          <Text color="gray.600" fontWeight="semibold">
            países
          </Text>
        </Flex>
        <Flex direction="column" align="center">
          <Text fontSize={40} color="yellow.500" fontWeight="semibold">
            60
          </Text>
          <Text color="gray.600" fontWeight="semibold">
            línguas
          </Text>
        </Flex>
        <Flex direction="column" align="center">
          <Text fontSize={40} color="yellow.500" fontWeight="semibold">
            27
          </Text>
          <Text color="gray.600" fontWeight="semibold">
            cidades +100
          </Text>
        </Flex>
      </Flex>
    </SimpleGrid>
  );
};
