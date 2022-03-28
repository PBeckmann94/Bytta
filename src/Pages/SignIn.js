import { useState } from 'react'
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  useColorModeValue
} from '@chakra-ui/react'
import { AtSignIcon, LockIcon } from '@chakra-ui/icons'
import LoginToast from '../Components/toasts/LoginToast'
import { auth, logInWithEmailAndPassword, signInWithGoogle } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
const CFaUserAlt = chakra(AtSignIcon)
const CFaLock = chakra(LockIcon)

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, error] = useAuthState(auth);
  

  const handleShowClick = () => setShowPassword(!showPassword)

  return (
    <Flex
      flexDirection="column"
      height="80vh"
      width="100wh"
      backgroundColor="gray.300"
      justifyContent="center"
      alignItems="center"
      bg={useColorModeValue('#dddddd', '#202023')}
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="blue.400" />
        <Heading>Velkommen</Heading>
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
          <form>
            <Stack
              spacing={4}
              p="2rem"
              backgroundColor={useColorModeValue('blue.400', 'gray.700')}
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray" />}
                  />
                  <Input 
                  type="email" 
                  value={email} 
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail adresse" 
                  bg={useColorModeValue('white', '#353535')}
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaLock color="gray" />}
                  />
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Passord" 
                    bg={useColorModeValue('white', '#353535')}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" bg="gray.400" onClick={handleShowClick}>
                      {showPassword ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link>Glemt passord?</Link>
                </FormHelperText>
              </FormControl>
              <button 
                className="login__button"
                bg="white"
                onClick={() => logInWithEmailAndPassword(email, password)}
                borderRadius={0}
                type="submit"
                variant="solid"               
                width="full"
                
              >
                Logg Inn
              </button>
              <Button 
              className="login__btn login__google" 
              bg="blue.500" 
              onClick={signInWithGoogle}>
                Logg inn med Google
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        Ny Bruker?{' '}
        <Link color="blue.500" href="#">
          Lag bruker
        </Link>
      </Box>
    </Flex>
  )
}

export default Signin
