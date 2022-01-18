import { Container, Box } from '@chakra-ui/react'
import React from 'react'
import { Flex, Spacer } from '@chakra-ui/react'
import AdminNav from './AdminNav'
import Dashboard from './Dashboard'
const AdminContainer = () => {
  return (
    <Flex grow h="80vh" bg="blackAlpha.200" direction="column">
      <AdminNav />
      <Box h="10" bg="red.500">
        <Dashboard />
      </Box>
    </Flex>
  )
}

export default AdminContainer
