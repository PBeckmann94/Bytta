import FeedTitle from './feed/FeedTitle'
import InputBar from './feed/InputBar'
import MessageContainer from './feed/MessageContainer'

import { Flex, Box, useColorModeValue } from '@chakra-ui/react'

function ChatFeed() {
  const shadow = useColorModeValue(
    '-1px 0px 0px #AAAAAA',
    '-1px 0px 0px #333333'
  )
  return (
    <Flex direction="column" h="95vh" w="100%" boxShadow={shadow} p={8}>
      <Box p={4}>
        <FeedTitle
          avatar="https://i.imgur.com/eyoNjrV.png"
          username="trainguy33"
          tradeDescription="Trading tractor for iphone 3"
        />
      </Box>
      <Box h="100%" p={4}>
        <MessageContainer />
      </Box>
      <Box>
        <InputBar />
      </Box>
    </Flex>
  )
}
export default ChatFeed
