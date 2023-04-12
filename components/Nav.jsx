import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Container,
  Heading,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import Link from 'next/link';

const NavLink = ({ children, href, ...rest }) => (
  <Link href={href}>
        <Button
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
          textDecoration: 'none',
          bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        bg={...rest.bg}
        color={...rest.color}
        >
            {children}
        </Button>
  </Link>
);

const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Container maxW='8xl'>
            <Flex maxW='8xl' h={16} alignItems={'center'} justifyContent={'space-between'}>
                <Heading as="h2" size='lg'>Simple POST</Heading>

                <Flex alignItems='center'>
                    <NavLink href='/'>Home</NavLink>
                    <NavLink href='/posts/lists'>List Posts</NavLink>
                    <NavLink href='/about'>About</NavLink>
                </Flex>


                <Flex alignItems={'center'}>
                    <Stack direction={'row'} spacing={7}>
                        <NavLink color='white' bg='blue.400' href='/posts/create'>Create</NavLink>
                        <Button onClick={toggleColorMode}>
                            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                        </Button>


                        <Menu>
                        <MenuButton
                            as={Button}
                            rounded={'full'}
                            variant={'link'}
                            cursor={'pointer'}
                            minW={0}>
                            <Avatar
                            size={'sm'}
                            src={'https://avatars.dicebear.com/api/male/username.svg'}
                            />
                        </MenuButton>
                        <MenuList alignItems={'center'}>
                            <br />
                            <Center>
                            <Avatar
                                size={'2xl'}
                                src={'https://avatars.dicebear.com/api/male/username.svg'}
                            />
                            </Center>
                            <br />
                            <Center>
                            <p>Wawan Setiawan</p>
                            </Center>
                            <br />
                            <MenuDivider />
                        </MenuList>
                        </Menu>
                    </Stack>
                </Flex>
            </Flex>
        </Container>
      </Box>
    </>
  );
}

export default Nav;
