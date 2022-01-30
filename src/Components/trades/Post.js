import {
  Flex,
  Box,
  Text,
  Spacer,
  Container,
  useColorModeValue
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Avatar } from '@chakra-ui/react'
function Post({ itemProvided, itemWanted, description, userName, distance }) {
  return (
    <Container
      bg={useColorModeValue('#eeeeee', '#252535')}
      borderRadius="20px"
      p={4}
    >
      <Flex>
        <Avatar
          name={userName}
          size="sm"
          bg={useColorModeValue('#3333ff', 'lightgray')}
          color={useColorModeValue('#eeeeee', '#333333')}
        />
        <Flex>
          <Text style={{ alignSelf: 'center', paddingLeft: '5px' }}>
            {userName}
          </Text>
        </Flex>
        <Spacer />
        <Box>{distance} km unna</Box>
      </Flex>
      <Box maxW="50%" p={4}>
        <Flex>
          <img src={itemProvided} style={{ borderRadius: '10px' }} alt="" />
          <ArrowForwardIcon alignSelf="center" />
          <img
            src={itemWanted}
            style={{
              borderRadius: '10px'
            }}
            alt=""
          />
        </Flex>
      </Box>
      <Text align="center">{description}</Text>
    </Container>
  )
}

export default Post
