import React from 'react'
import { Stack, Text, Button } from '@chakra-ui/react'

const TryCard = () => {
  return (
    <Stack 
      p="10" 
      mt="30px" // Added margin-top
      boxShadow="lg" 
      borderRadius="2xl" 
      backgroundPosition="top" 
      bgImage="https://images.unsplash.com/photo-1659256297426-cb50e6a36fd8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    >
      <Stack direction="row" alignItems="center">
        <Text color="gray.100" fontWeight="semibold" fontSize="xx-large">
          Try something new!
        </Text>
      </Stack>

      <Stack direction={{ base: 'column', md: 'row' }} justifyContent="space-between">
        <Text textAlign="left" maxW="4xl" color="gray.100" fontWeight="semibold" fontSize="x-large">
          Rehydrate and replenish with our newly launched electrolytes
        </Text>
        <br />
      </Stack>
      <br />
      <Button
        size="md"
        w="200px"
        variant="outline"
        align="left"
        colorScheme="green"
        color="green"
        sx={{
          backgroundColor: '#E5FFA5',
          color: '#000',
          border: 'none',
          padding: '10px 20px',
          fontSize: '1.1rem',
          cursor: 'pointer',
          borderRadius: '20px',
          _hover: {
            backgroundColor: '#d4f88a',
          },
        }}
      >
        See all products
      </Button>
    </Stack>
  )
}

export default TryCard
