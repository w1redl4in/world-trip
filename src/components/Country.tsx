import { Box, Text } from '@chakra-ui/react';

export const Country: React.FC = () => {
  return (
    <Box
      position="relative"
      backgroundImage="url('/images/countries/europe.svg')"
      backgroundPosition="left"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      maxWidth="100%"
      width="100%"
      height="500"
    >
      <Text
        position="absolute"
        bottom={[0, 0, 20]}
        left={[0, 0, 60]}
        fontWeight={600}
        fontSize="3xl"
        color="gray.100"
        p="1"
      >
        Europe
      </Text>
    </Box>
  );
};
