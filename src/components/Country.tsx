import { Box, Text } from '@chakra-ui/react';

export const Country: React.FC = () => {
  return (
    <Box
      position="relative"
      backgroundImage="url('/images/countries/europe.svg')"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      h="550"
    >
      <Text
        position="absolute"
        bottom="20"
        left="60"
        fontWeight={600}
        fontSize={48}
        color="gray.100"
      >
        Europe
      </Text>
    </Box>
  );
};
