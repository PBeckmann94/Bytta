import { Flex, Box, Avatar, Text } from '@chakra-ui/react'

function Conversation({ user, item }) {
  return (
    <Flex p={4}>
      <Avatar src="https://i.imgur.com/eyoNjrV.png" />
      <Flex direction="column" paddingLeft={3}>
        <Box>
          <Text alignSelf="center">{item}</Text>
        </Box>
        <Text fontSize="xs">plz answer i showed u my genitals</Text>
      </Flex>
    </Flex>
  )
}

export default Conversation
