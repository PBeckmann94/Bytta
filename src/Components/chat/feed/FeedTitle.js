import { Avatar, Text, Flex, Box } from '@chakra-ui/react'

function FeedTitle({ avatar, username, tradeDescription }) {
  return (
    <Box>
      <Flex>
        <Avatar src={avatar} />
        <Text paddingLeft="10px" fontSize="2xl" alignSelf="center">
          {username}
        </Text>
      </Flex>
      <Text alignSelf="center" paddingTop="10px">
        {tradeDescription}
      </Text>
    </Box>
  )
}

export default FeedTitle
