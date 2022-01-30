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
        description="helo its ya boi indianBoi33 from swedene i like play counter stirk and i selled my wife for internet connection please donateion"
        distance="2"
      />
      <Post
        userName="SkitneKjell"
        itemProvided={Iphone}
        itemWanted={Traktor}
        description="I wanna die"
        distance="2"
      />{' '}
      <Post
        userName="SkitneKjell"
        itemProvided={Iphone}
        itemWanted={Traktor}
        description="I wanna die"
        distance="2"
      />
    </SimpleGrid>
  )
}
export default Feed
