import React from 'react';
import { Box, Flex, Image, Text, VStack, Link, Grid } from '@chakra-ui/react';

const WellnessBonus = () => {
  const bonuses = [
    { icon: 'wellness_bonus_icon_01.svg', text: '40% off on your first order' },
    { icon: 'wellness_bonus_icon_04.svg', text: 'A gift after 2 orders' },
    { icon: 'wellness_bonus_icon_02.svg', text: '20% off on your next orders' },
    {
      icon: 'wellness_bonus_icon_05.svg',
      text: 'Sneak peek into our new product launches',
    },
    {
      icon: 'wellness_bonus_icon_03.svg',
      text: 'Free consultation with our nutrition expert',
    },
    {
      icon: 'wellness_bonus_icon_06.svg',
      text: 'Unlock VIP benefits on 8th order',
    },
  ];

  return (
    <Box bg="#F3DF5D" p={6} borderRadius="50px" maxW="container.xl" mx="auto">
      <Flex justify="space-between" align="center" mb={6}>
        <Text fontSize="6xl" fontWeight="bold" color="#1A541D">Wellness Bonus</Text>
        <Image
          src="https://cdn.shopify.com/s/files/1/0654/7079/1899/files/wellness_bonus_icon_stamp_1.svg?v=1721371853"
          alt="LWC Logo"
          boxSize="100px"
        />
      </Flex>
      <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={4}>
        {bonuses.map((bonus, index) => (
          <Flex key={index} align="center" gap={4}>
            <Image
              src={`https://cdn.shopify.com/s/files/1/0654/7079/1899/files/${bonus.icon}`}
              alt={`Icon ${index + 1}`}
              boxSize="50px"
            />
            <Link href="#" color="blue.500" fontSize="lg">
              {bonus.text}
            </Link>
          </Flex>
        ))}
      </Grid>
    </Box>
  );
};

export default WellnessBonus;
