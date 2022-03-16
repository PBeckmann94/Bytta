import { SimpleGrid } from '@chakra-ui/react'
import Post from './Post'
import Iphone from '../../public/imgs/iphone.png'
import Traktor from '../../public/imgs/traktor.png'
function Feed() {
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} p={8} spacing={4}>
      <Post
        userName="SkitneKjell"
        itemProvided={Iphone}
        itemWanted={Traktor}
        description="trading my very old iphone for a very expensive tractor"
        distance="2"
      />
      <Post
        userName="SkitneKjell"
        itemProvided={Iphone}
        itemWanted={Traktor}
        description=":D"
        distance="2"
      />{' '}
      <Post
        userName="SkitneKjell"
        itemProvided={Iphone}
        itemWanted={Traktor}
        description=":D"
        distance="2"
      />
    </SimpleGrid>
  )
}
export default Feed
