import React from "react";
import {
  Box,
  IconButton,
  Stack,
  Text,
  Container,
  Code,
  Image,
} from "@chakra-ui/react";


export default function Banner() {
  const card = 
    {
      title: "Loop Wellness Club",
      text: "Welcome, Abel",
      image:'https://images.unsplash.com/photo-1706523867829-6177b426abc4?q=80&w=1214&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }


  return (
    <Box
    bg={'gray.50'}
    name="test1"
    pt={16}
      position={"relative"}
      height={"100%"}
      width={"full"}
      overflow={"hidden"}
    > 
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />


          <Box
            height={"350px"}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundBlendMode={'lighten'}
            backgroundSize={['cover']}
            backgroundImage={`url(${card.image})`}
          >
            <Container align={'center'} size="container.lg" height={["250px","750px"]} position="relative">
              <Stack
                spacing={6}
                w={"full"}
                maxW={"lg"}
                position="absolute"
                top={["90%","5%","10%","10%"]}
                transform="translate(0, -50%)"
              >
                <Text
                fontFamily={'fantasy'}
                fontWeight={'bold'}
                color="gray.100"
                mt={10}
                fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                >
                  {card.title}
                </Text>
                <Text
                 fontFamily={'fantasy'}
                 fontWeight={'bold'}
                  color="gray.100"
                  fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                >
                  {card.text}
                </Text>
                
              </Stack>
              <Image pt={40} h={80} display={['none','block']} src="https://cdn.shopify.com/s/files/1/0654/7079/1899/files/electrolytesss.svg?v=1722001529"/>
            </Container>
            
          </Box>



    </Box>
  );
}