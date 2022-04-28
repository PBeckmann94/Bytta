import { useState, useEffect } from 'react'
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  Link,
  InputLeftElement,
  chakra,
  Box,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  useColorModeValue,
  CircularProgress
} from '@chakra-ui/react'
import { AtSignIcon, LockIcon } from '@chakra-ui/icons'
import { useToast } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"
import { auth, logInWithEmailAndPassword, signInWithGoogle, sendPasswordReset } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import ErrorMessage from "../Components/toasts/ErrorMessage"


const CFaUserAlt = chakra(AtSignIcon)
const CFaLock = chakra(LockIcon)
const toast = useToast

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const handleSubmit = async event => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await userLogin({ email, password });
      setIsLoading(false);
    } catch (error) {
      setError('Invalid username or password');
      setIsLoading(false);
      setEmail('');
      setPassword('');
    }
  };

  const userLogin = async ({ email, password }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'test@test.com' && password === 'test123') {
          resolve();
        } else {
          reject();
        }
      }, 3000);
    });
  };


  useEffect(() => {
    if (user) navigate('/dashboard');
  });


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
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">

          <form onSubmit={handleSubmit}>
          {error && <ErrorMessage message={error} />}

            <Stack
              spacing={4}
              p="2rem"
              backgroundColor={useColorModeValue('blue.400', 'gray.700')}
              boxShadow="md"
            >
              <FormControl isRequired>
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
              <FormControl isRequired>
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
                  <Link onClick={sendPasswordReset}>Glemt passord?</Link>
                </FormHelperText>
              </FormControl>

              <Button 
                className="login__button"
                backgroundColor={useColorModeValue('white.500', 'blue.500')}
                onClick={() => logInWithEmailAndPassword(email, password)}
                type="submit"
              > 
              {isLoading ? (
              <CircularProgress isIndeterminate size="24px" color="teal" />
              ) : (
                'Logg Inn'
              )}
              </Button>

              <Button 
              className="login__btn login__google" 
              backgroundColor={useColorModeValue('white.500', 'blue.500')}
              variant="solid"   
              onClick={signInWithGoogle}>
                Logg inn med Google
              </Button>

            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
       
        Ny Bruker?{' '}
        <Link
        color='blue.500' 
        href="/register">
        Lag bruker 
        </Link>
       
          

      </Box>
    </Flex>
  )
}

export default Signin
