import React from 'react';
import { Box, Text } from '@chakra-ui/react';

export default function MarqueeSlider() {
  return (
    <Box 
      position={'fixed'}
      top={0}
      w={'full'}
      zIndex={2}
      height={["60px", "50px"]}
      bg={'#723de8'}
      textAlign={'center'}
    >
      <Text 
        color={"gray.100"}
        fontWeight={'semibold'}
        pt={4}
        fontSize={['sm', 'md']}
      >
        Welcome to Loop Subscription's demo store 🚀 𝘒𝘯𝘰𝘸 𝘮𝘰𝘳𝘦 𝘢𝘣𝘰𝘶𝘁 𝘓𝘰𝘰𝘱 →
      </Text>
    </Box>
  );
}
