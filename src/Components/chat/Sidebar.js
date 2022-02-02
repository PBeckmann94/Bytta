import { Flex, Box } from '@chakra-ui/react'
import TitleAndSearch from './sidebar/TitleAndSearch'
import Conversation from './sidebar/Conversation'
function Sidebar() {
  return (
    <Flex align="stretch" direction="column" maxW="30%" w="100%">
      <Box p={2}>
        <TitleAndSearch />
        <Conversation user="train guy" item="train" />
        <Conversation user="train guy" item="train" />
        <Conversation user="train guy" item="train" />
      </Box>
    </Flex>
  )
}

export default Sidebar
