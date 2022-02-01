import Sidebar from '../Components/chat/Sidebar'
import ChatFeed from '../Components/chat/ChatFeed'
import { Flex } from '@chakra-ui/react'
function Messages() {
  return (
    <Flex>
      <Sidebar />
      <ChatFeed />
    </Flex>
  )
}

export default Messages
