import React from 'react';
import { Box, Flex, Heading, Text, Button, Icon } from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

const PromoBanner = () => {
    return (
        <Box bg="purple.600" color="white" py={8} textAlign="center" width="full">
            <Flex justify="center" align="center" mb={4}>
                <Text fontSize="lg" mr={2}>Rated</Text>
                <Flex color="yellow.400">
                    {[...Array(5)].map((_, i) => (
                        <Icon key={i} as={StarIcon} />
                    ))}
                </Flex>
                <Text fontSize="lg" ml={2}>on Shopify App Store</Text>
            </Flex>
            <Heading fontSize="3xl" fontWeight="bold" mb={4}>
                This store is powered by Loop subscriptions!
            </Heading>
            <Text fontSize="lg" mb={6}>
                Turn your customers into subscribers and drive recurring revenue for your DTC brand.
            </Text>
            <Button
                bg="black"
                color="white"
                px={6}
                py={2}
                borderRadius="md"
                _hover={{ bg: 'gray.800' }}
            >
                Book a Demo
            </Button>
        </Box>
    );
};

export default PromoBanner;
