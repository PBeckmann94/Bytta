import Message from './Message'
import { Flex, Spacer } from '@chakra-ui/react'
function MessageContainer() {
  return (
    <Flex direction="column" height="100%">
      <Spacer />
      <Message text="yoooo" avatar="https://i.imgur.com/eyoNjrV.png" user />
      <Message
        isSentFromCurrentUser
        text="yooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo"
        avatar="https://i.imgur.com/eyoNjrV.png"
      />
      <Message text="plz respond" avatar="https://i.imgur.com/eyoNjrV.png" />
    </Flex>
  )
}
export default MessageContainer
