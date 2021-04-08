import { Flex, Text, Box } from '@chakra-ui/react';
import { Carousel as ReactResponsiveCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useRouter } from 'next/router';

export const Carousel: React.FC = () => {
  const history = useRouter();

  const handleRoute = () => {
    history.push('/europe');
  };

  return (
    <Flex
      as="section"
      justify="center"
      align="center"
      direction="column"
      textAlign="center"
    >
      <Text fontSize={36} color="gray.600">
        Vamos nessa?
      </Text>
      <Text fontSize={36} color="gray.600">
        Então escolha seu continente
      </Text>
      <Box maxWidth="800" mt="8">
        <ReactResponsiveCarousel renderThumbs={() => []}>
          <Box
            onClick={handleRoute}
            _hover={{
              cursor: 'pointer',
            }}
          >
            <img src="/images/carousel/europe.svg" alt="europe svg" />
            <p className="legend">Europe</p>
          </Box>
          <Box
            onClick={handleRoute}
            _hover={{
              cursor: 'pointer',
            }}
          >
            <img src="/images/carousel/europe.svg" alt="europe svg" />
            <p className="legend">Europe</p>
          </Box>
          <Box
            onClick={handleRoute}
            _hover={{
              cursor: 'pointer',
            }}
          >
            <img src="/images/carousel/europe.svg" alt="europe svg" />
            <p className="legend">Europe</p>
          </Box>
        </ReactResponsiveCarousel>
      </Box>
    </Flex>
  );
};
