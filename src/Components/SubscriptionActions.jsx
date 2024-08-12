import React from 'react';
import { Box, Button, VStack } from '@chakra-ui/react';

const SubscriptionActions = () => {
    return (
        <VStack spacing={2} align="center">
            <Button
                variant="outline"
                maxW="xl"
                _hover={{ bg: 'green.700', color: 'white' }}
                transition="background-color 0.3s, color 0.3s"
            >
                Pause subscription
            </Button>
            <Button
                variant="outline"
                maxW="xl"
                _hover={{ bg: 'green.700', color: 'white' }}
                transition="background-color 0.3s, color 0.3s"
            >
                Cancel subscription
            </Button>
        </VStack>
    );
};

export default SubscriptionActions;
