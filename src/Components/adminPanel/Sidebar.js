import React, { useState } from 'react'
import {
  Flex,
  Text,
  IconButton,
  Divider,
  Avatar,
  Heading
} from '@chakra-ui/react'

import NavItem from './NavItem'

export default function Sidebar() {
  const [navSize, changeNavSize] = useState('large')
  return (
    <Flex
      pos="sticky"
      left="5"
      h="95vh"
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
      borderRadius={navSize === 'small' ? '15px' : '30px'}
      w={navSize === 'small' ? '75px' : '200px'}
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize === 'small' ? 'center' : 'flex-start'}
        as="nav"
      >
        <IconButton
          background="none"
          mt={5}
          _hover={{ background: 'none' }}
          onClick={() => {
            if (navSize === 'small') changeNavSize('large')
            else changeNavSize('small')
          }}
        />
        <NavItem
          navSize={navSize}
          title="Dashboard"
          description="This is the description for the dashboard."
        />
        <NavItem navSize={navSize} title="Calendar" active />
        <NavItem navSize={navSize} title="Clients" />
        <NavItem navSize={navSize} title="Animals" />
        <NavItem navSize={navSize} title="Stocks" />
        <NavItem navSize={navSize} title="Reports" />
        <NavItem navSize={navSize} title="Settings" />
      </Flex>

      <Flex
        p="5%"
        flexDir="column"
        w="100%"
        alignItems={navSize === 'small' ? 'center' : 'flex-start'}
        mb={4}
      >
        <Divider display={navSize === 'small' ? 'none' : 'flex'} />
        <Flex mt={4} align="center">
          <Avatar size="sm" src="avatar-1.jpg" />
          <Flex
            flexDir="column"
            ml={4}
            display={navSize === 'small' ? 'none' : 'flex'}
          >
            <Heading as="h3" size="sm">
              Morten Berge
            </Heading>
            <Text color="gray">Admin</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
