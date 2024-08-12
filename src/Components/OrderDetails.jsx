import { Box, Button, Center, Flex, Icon, Image, SimpleGrid, Stack, Text, Divider, Input } from '@chakra-ui/react'
import { RepeatIcon } from '@chakra-ui/icons'
import React from 'react'
import TryCard from './TryCard'
import SubscriptionCard from './WellnessBonus'
import { DrawerButton } from './Drawer'
import StepperSubs from './Stepper'
import Carasoul from './Carasoul'
import Status from './Status'
import PromoBanner from './PromoBanner';
import SubscriptionActions from './SubscriptionActions';

export const beers = [
    {
        id: '1',
        image: 'https://cdn.shopify.com/s/files/1/0654/7079/1899/files/6.jpg?v=1721999553',
        title: 'Cocunut electrolyte',
        mrp: '11.00',
        offer: '9.90'
    },
    {
        id: '2',
        image: 'https://cdn.shopify.com/s/files/1/0654/7079/1899/files/8.jpg?v=1721999780',
        title: 'Curacao electrolyte',
        mrp: '11.00',
        offer: '9.90'
    },
    {
        id: '3',
        image: 'https://cdn.shopify.com/s/files/1/0654/7079/1899/files/2.jpg?v=1721999630',
        title: 'Guava electrolyte',
        mrp: '11.00',
        offer: '9.90'
    },
    {
        id: '4',
        image: 'https://cdn.shopify.com/s/files/1/0654/7079/1899/files/7.jpg?v=1721999744',
        title: 'Lime electrolyte',
        mrp: '11.00',
        offer: '9.90'
    }
];

// Sample data for products
const products = [
    {
        title: 'Black Coffee by Loop',
        description: 'Subscription discount ($5.00)',
        price: '$20.00',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0654/7079/1899/files/2.png?v=1696319737'
    },
    {
        title: 'Inner Loop Supplement- Auto-ship Subscription',
        description: 'Description of product 2.',
        price: '$30.00',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0654/7079/1899/products/9.png?v=1707334714'
    },
    {
        title: 'Gut Health Powder by Alicia Kentzwood3',
        description: 'Subscription discount (15%).',
        price: '$40.00',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0654/7079/1899/files/image_58227018-eead-4b7b-af36-ba44b65d4a82.png?v=1691393869'
    },
    {
        title: 'Loop Yoga Membership',
        description: 'Subscription discount (35%).',
        price: '$45.00',
        imageUrl: 'https://cdn.shopify.com/s/files/1/0654/7079/1899/products/32.png?v=1707334671'
    },
    // Add more products as needed
];

const OrderDetails = () => {
    return (
        <Box color='green' textAlign={'center'} mt={[10, 20]} fontWeight={'semibold'}>
            <Stack mx={[0, 10, 20, 40]}>
                <Image src='https://cdn.shopify.com/s/files/1/0654/7079/1899/files/3rd_order_desktop.png?v=1710427192'/>
    
                <br/>
                <Flex align={'center'} mx={[5, 5]}>
                    <Text fontSize="26px">
                        ORDER  -  #10179281115
                    </Text>
                    <Button _hover={'none'} variant={'solid'} ml={'4'} bg={'green'} color={'yellow'} borderRadius={'20'} size={'sm'}>Active</Button>
                </Flex>
                <Flex align={'center'} mx={[5, 5]}>
                    <Text fontSize="22px"> $806.71 </Text>
                    <Text fontSize="20px">
                    + $0 shipping
                    </Text>
                </Flex>
                <Flex align={'center'} mx={[5, 5]}>
                    <Icon as={RepeatIcon} boxSize={'1em'} mr={2} />
                    <Text fontSize="20px">
                    Deliver every 1 month
                    </Text>
                </Flex>
                <br/>
                <Status/>
                <TryCard />
                <Carasoul pack={beers}/>
                
                <Divider size="lg" borderWidth="1px" borderColor="black" />

                <Flex justifyContent={'space-between'} my={4}>
                    <Text fontSize={'larger'}>
                    Saving plan details
                    </Text>
                    <DrawerButton/>
                </Flex>

                <SimpleGrid
                    columns={[1, 2, 2]}
                    spacing={6} 
                    p={4} 
                    w="full" 
                >
                    {products.map((product, index) => (
                        <Box key={index} p={10} rounded={10} border={'1px solid gray'}>
                            <Flex>
                                <Image border={'1px solid black'} rounded={10} src={product.imageUrl} w={'100px'} />
                                <Box ml={4}>
                                    <Text fontWeight="bold">{product.title}</Text>
                                    <Text>{product.description}</Text>
                                    <Text fontWeight="semibold">{product.price}</Text>
                                </Box>
                            </Flex>
                        </Box>
                    ))}
                </SimpleGrid>

                <SimpleGrid columns={[1, null, 2]} spacing='40px'>
                <Box p={10} rounded={10} border={'1px solid gray'}>
                        <Text fontSize="xl" mb={2}>Discount Code</Text>
                        <Flex>
                            <Input placeholder='Enter discount code' size='md' mr={2} />
                            <Button colorScheme='green'>Apply</Button>
                        </Flex>
                    </Box>
                    <Box p={10} rounded={10} border={'1px solid gray'}>
                        Order notes
                        -
                    </Box>
                    <Box p={10} rounded={10} border={'1px solid gray'}>
                        Subscription plan
                        Deliver every 2 weeks
                    </Box>
                    <Box p={10} rounded={10} border={'1px solid gray'}>
                        Shipping address
                        Abel Lesle
                        1218 San Anselmo Ave
                        San Anselmo, California, 94960
                        United States
                        +14157488744
                    </Box>
                    <Box p={10} rounded={10} border={'1px solid gray'}>
                        Payment details
                        Visa ending in 4242
                        Expires 2/29
                        Last updated on: May 5, 2023
                    </Box>
                </SimpleGrid>
                <br/>

                <Text fontSize="20px">Last update mail sent on: July 24, 2024</Text>
            </Stack>
            <br/>
            <SubscriptionCard />
            <br/>
            <SubscriptionActions />
            <br/>

            <PromoBanner />
            <br/>
        </Box>
    )
}

export default OrderDetails
