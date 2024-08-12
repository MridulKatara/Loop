import { Box, Button, Flex, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Status = () => {
  return (
    <Box bgColor={'#f5f49c'} rounded={20} p={10}>
      <Stack>
        <Text color={'green'} align={'left'} fontSize="28px" py={'4'}>
          Upcoming order : October 8, 2024
        </Text>
        <Flex justifyContent={'space-evenly'}>
          <Button
            rounded={'50'}
            size={'lg'}
            w={'30%'}
            colorScheme="whatsapp"
            color={'#f5f59d'}
            _hover={{ bg: 'green', color: 'white' }}
          >
            Order Now
          </Button>
          <Button
            rounded={'50'}
            size={'lg'}
            w={'30%'}
            variant={'outline'}
            colorScheme="darkgreen"
            color={'green'}
            _hover={{ bg: 'green', color: 'white' }}
          >
            Skip
          </Button>
          <Button
            rounded={'50'}
            size={'lg'}
            w={'30%'}
            variant={'outline'}
            colorScheme="darkgreen"
            color={'green'}
            _hover={{ bg: 'green', color: 'white' }}
          >
            Postpone
          </Button>
        </Flex>
        <Text py={'4'} align={'left'} color={'green'}>
          Last order was charged on April 5, 2024
        </Text>
      </Stack>
    </Box>
  )
}

export default Status
