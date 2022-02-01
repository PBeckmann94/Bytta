import { Flex, Box, Input, Text } from '@chakra-ui/react'

function TitleAndSearch() {
  return (
    <>
      <Flex p={4} align="center" justifyContent="center">
        <Text fontSize="2xl"> Chats </Text>
      </Flex>
      <Box p={1}>
        <Input placeholder="Search in chat" />
      </Box>
    </>
  )
}
export default TitleAndSearch
