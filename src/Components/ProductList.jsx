import React from 'react'
import { Box, Image, Text, Stack } from '@chakra-ui/react'

const ProductList = () => {
  const products = [
    {
      title: 'Black Coffee by Loop',
      description: 'Subscription discount ($5.00)',
      price: '$20.00',
      originalPrice: '$25.00', 
      imageUrl: 'https://cdn.shopify.com/s/files/1/0654/7079/1899/files/2.png?v=1696319737'
    },
    {
      title: 'Inner Loop Supplement- Auto-ship Subscription',
      description: 'Description of product 2.',
      price: '$30.00',
      originalPrice: '$35.00',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0654/7079/1899/products/9.png?v=1707334714'
    },
    {
      title: 'Gut Health Powder by Alicia Kentzwood3',
      description: 'Subscription discount (15%).',
      price: '$40.00',
      originalPrice: '$47.00',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0654/7079/1899/files/image_58227018-eead-4b7b-af36-ba44b65d4a82.png?v=1691393869'
    },
    {
      title: 'Loop Yoga Membership',
      description: 'Subscription discount (35%).',
      price: '$45.00',
      originalPrice: '$60.00',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0654/7079/1899/products/32.png?v=1707334671'
    },
    {
      title: 'Yoga Membership',
      description: 'Subscription discount (45%).',
      price: '$55.00',
      originalPrice: '$70.00',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0654/7079/1899/products/32.png?v=1707334671'
    },
    {
      title: 'Auto-ship Subscription',
      description: 'Description of product 2.',
      price: '$34.00',
      originalPrice: '$40.00',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0654/7079/1899/products/9.png?v=1707334714'
    },
  ];

  return (
    <Stack spacing={6}>
      {products.map((product, index) => (
        <Box key={index}>
          <Image border={'1px solid black'} rounded={10} src={product.imageUrl} w={'100px'} />
          <Text fontWeight="bold">{product.title}</Text>
          <Text>
            {product.description}
            <br />
            {product.price}{' '}
            {product.originalPrice && (
              <Text as="span" textDecoration={'line-through'}>
                {product.originalPrice}
              </Text>
            )}
          </Text>
        </Box>
      ))}
    </Stack>
  );
};

export default ProductList;
