import { Box, Flex, Avatar, Text } from '@chakra-ui/react'

function Message({ user, avatar, text }) {
  return (
    <Box margin="20px">
      <Flex>
        <Avatar size="sm" alignSelf="center" src={avatar} />
        <Text
          bg="#0183FF"
          marginLeft="10px"
          padding="10px"
          borderRadius="20px"
          alignSelf="center"
        >
          {text}
        </Text>
      </Flex>
    </Box>
  )
}
export default Message
