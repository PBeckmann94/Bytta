import React from 'react'
import {
  Link,
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Container,
  Heading,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  useColorModeValue,
  useColorMode,
  Divider,
  Spacer
} from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
import { HamburgerIcon } from '@chakra-ui/icons'
import Logo from './Logo'
import ThemeToggleButton from './ThemeToggleButton'
import { Navigate } from 'react-router-dom'
const NavBar = props => {
  const [isOpen, setIsOpen] = React.useState(false)
  const { toggleColorMode } = useColorMode()
  const toggle = () => setIsOpen(!isOpen)

  // MenuList er like bred som parent, mA fikses

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ff000000', '#202023')}
      style={{ backdropFilter: 'blur(10px' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        flexDir="row"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
      >
        <Flex align="left" mr={5}>
          <Heading as="h2" size="md" letterSpacing="tighter">
            <Logo />
          </Heading>
        </Flex>
        <MenuLinks />
        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                bg={useColorModeValue('#dddddd', '#FBD28D')}
                icon={<HamburgerIcon />}
                aria-label="Options"
                variant="outlined"
                color={'black'}
              />
              <MenuList border="1px solid blue" width={{ base: '1px' }}>
                <MenuItem to="/">Home</MenuItem>
                <MenuItem to="/about">About</MenuItem>
                <MenuItem to="/profile">Profile </MenuItem>
                <MenuItem to="/settings">Settings </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: 'block', md: 'none' }} onClick={toggle}>
      {isOpen ? <CloseIcon /> : <HamburgerIcon />}
    </Box>
  )
}

const MenuItem = ({ children, isLast, to = '/', ...rest }) => {
  return (
    <Link href={to}>
      <Text display="block" {...rest}>
        {children}
      </Text>
      <Box flex={1} align="right"></Box>
    </Link>
  )
}

const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? 'block' : 'none', md: 'block' }}
      flexBasis={{ base: '100%', md: 'auto' }}
    >
      <Stack
        spacing={8}
        align="center"
        justify={['center', 'space-between', 'flex-end', 'flex-end']}
        direction={['column', 'row', 'row', 'row']}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/about">About</MenuItem>
        <MenuItem to="/profile">Profile </MenuItem>
        <MenuItem to="/settings">Settings </MenuItem>
      </Stack>
    </Box>
  )
}

const NavBarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={['primary.500', 'primary.500', 'transparent', 'transparent']}
      color={['white', 'white', 'primary.700', 'primary.700']}
      {...props}
    >
      {children}
    </Flex>
  )
}

export { NavBar }
