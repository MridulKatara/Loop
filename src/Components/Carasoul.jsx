import { Box, Button, Center, Flex, Image, Stack, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carasoul = ({ pack }) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        arrows: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                    autoplay: true,
                },
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                    autoplay: true,
                },
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                    autoplay: true,
                },
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                    autoplay: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    infinite: true,
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    autoplay: true,
                },
            },
            {
                breakpoint: 500,
                settings: {
                    infinite: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    dots: false,
                    autoplay: true,
                },
            },
        ],
    }
    return (
        <Box my={8} >

            <Slider {...settings}>


                {pack.length ? pack.map((Props) => {
                    return <Stack
                        w="１００％"
                        h="350px" mx={'2'}
                        rounded={10}
                        alignContent="center"
                        justifyContent="center"
                    >
                        <Image src={Props.image} fit={"contain"} h={'220px'} w={['360px', '420px', '500px']} />
                        <Box>
                            <Text color={'gray.700'} fontWeight="bold">
                                {Props.title}
                            </Text>
                            


                        </Box>
                        <Flex w={'200px'} justifyContent={'space-evenly'}>
                                
                                    <Text  textDecoration={'line-through'} >
                                        ${Props.mrp}
                                    </Text>
                                    <Text>
                                        ${Props.offer}
                                    </Text>
                                
                                <Button  colorScheme='green' color={'#f7f7ca'} rounded={'50'} size={'sm'}>
                                    +
                                </Button>

                            </Flex>

                    </Stack>
                }) : <Center> NO PRODUCTS</Center>}

            </Slider>
        </Box>
    )
}

export default Carasoul