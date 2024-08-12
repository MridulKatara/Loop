import React from 'react';
import {
  Box,
  Flex,
  Stack,
  useDisclosure,
  HStack,
  IconButton,
  Image,
  Button,
  Icon,
  Avatar
} from '@chakra-ui/react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BiShoppingBag, BiSearch } from 'react-icons/bi';
import { Link } from 'react-scroll';

const links = [
  { name: "Shop Subscription", id: "test1" },
  { name: "Bundles", id: "test2" },
  { name: "Manage Subscriptions", id: "test3" },
  { name: "Recharge Alternative", id: "test4" },
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box 
        position={'fixed'} 
        top={["60px", "50px"]} // Adjust top position based on MarqueeSlider height
        w={'full'} 
        zIndex={1} 
        bg={'gray.100'} 
        px={4}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={4} alignItems={"center"}>
            <Link
              activeClass="active"
              className="test1"
              spy={true}
              smooth={true}
              duration={500}
              offset={50}
            >
              <Image src={'https://demo.loopwork.co/cdn/shop/files/Vector.png?v=1707344688&width=60'} m={'auto'} w={20} />
            </Link>
          </HStack>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {links.map((link, i) => (
              <Button
                key={i}
                color={'gray.600'}
                size="sm"
                onClick={() => {
                  document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {link.name}
              </Button>
            ))}
          </HStack>
          <IconButton
            size={"md"}
            icon={isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            aria-label={"Open Menu"}
            display={["inherit", "inherit", "none"]}
            onClick={isOpen ? onClose : onOpen}
          />
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button color={'gray.600'}>
                <Icon as={BiShoppingBag} fontSize={'24'} />
              </Button>
              <Button color={'gray.600'}>
                <Icon as={BiSearch} fontSize={'24'} />
              </Button>
              <Button color={'gray.600'}>
                <Avatar size="sm" name="User" src="https://bit.ly/sage-adebayo" />
              </Button>
            </Stack>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box
            pb={4}
            w={["100%", "100%", "80%"]}
            maxW={800}
            display={["inherit", "inherit", "none"]}
          >
            <Stack as={"nav"} spacing={4} alignItems="center" w="">
              {links.map((link, i) => (
                <Button
                  key={i}
                  color={'gray.600'}
                  size="sm"
                  onClick={() => {
                    document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  {link.name}
                </Button>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
      <br/>
      <br/>
      
    </>
  );
}
