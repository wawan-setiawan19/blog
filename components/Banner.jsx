import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
  } from '@chakra-ui/react';

import Link from 'next/link';
  
  export default function CallToActionWithVideo() {
    return (
      <Container maxW={'8xl'}>
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column', md: 'row' }}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: '30%',
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  bg: 'blue.400',
                  zIndex: -1,
                }}>
                Write once,
              </Text>
              <br />
              <Text as={'span'} color={'blue.400'}>
                use everywhere!
              </Text>
            </Heading>
            <Text color={'gray.500'}>
              You can create amazing story or amazing scene in world with your post, so let's to write your magical word
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: 'column', sm: 'row' }}>
                <Link href='/posts/create'>
                    <Button
                        rounded={'full'}
                        size={'lg'}
                        fontWeight={'normal'}
                        px={6}
                        colorScheme={'blue'}
                        bg={'blue.400'}
                        _hover={{ bg: 'blue.500' }}>
                        Create Your Amazing Post
                    </Button>
                </Link>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>
            
            <Box
              position={'relative'}
              height={'300px'}
              rounded={'2xl'}
              boxShadow={'2xl'}
              width={'full'}
              overflow={'hidden'}>
              <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={
                  'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                }
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
    );
  }