import { Box, Flex, Avatar, Text, useColorModeValue } from '@chakra-ui/react'

function Message({ avatar, text, isSentFromCurrentUser }) {
  const senderBackground = useColorModeValue('#E5E6EB', '#333333')
  const senderText = useColorModeValue('#333333', '#dddddd')
  return (
    <Box margin="20px" alignSelf={isSentFromCurrentUser ? 'end' : 'start'}>
      <Flex>
        <Avatar size="sm" alignSelf="center" src={avatar} />
        <Text
          bg={!isSentFromCurrentUser ? senderBackground : '#0183FF'}
          color={!isSentFromCurrentUser ? senderText : '#dddddd'}
          marginLeft="10px"
          padding="10px"
          borderRadius="20px"
          alignSelf="center"
          maxW="sm"
        >
          {text}
        </Text>
      </Flex>
    </Box>
  )
}
export default Message
