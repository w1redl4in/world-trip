import { Flex, Text, Box } from '@chakra-ui/react';
import { Carousel as ReactResponsiveCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export const Carousel: React.FC = () => {
  return (
    <Flex as="section" justify="center" align="center" direction="column">
      <Text fontSize={36} color="gray.600">
        Vamos nessa?
      </Text>
      <Text fontSize={36} color="gray.600">
        Então escolha seu continente
      </Text>
      <Box maxWidth="800" mt="8">
        <ReactResponsiveCarousel renderThumbs={() => []}>
          <div>
            <img src="/images/carousel/europe.svg" alt="europe svg" />
            <p className="legend">Europe</p>
          </div>
          <div>
            <img src="/images/carousel/europe.svg" alt="europe svg" />
            <p className="legend">Europe</p>
          </div>
          <div>
            <img src="/images/carousel/europe.svg" alt="europe svg" />
            <p className="legend">Europe</p>
          </div>
        </ReactResponsiveCarousel>
      </Box>
    </Flex>
  );
};
