import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom'
import { Box,
  Flex,
  Input,
  Button,
  Link,
  InputGroup,
  Stack,
  Heading,
  InputLeftElement,
  FormControl,
  useColorModeValue } from '@chakra-ui/react'
import {
  auth,
  registerWithEmailAndPassword,
} from '../firebase'


function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useNavigate();
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    if (user) history.replace("/dashboard");
  }, [user, loading]);

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
          <Heading>Register</Heading>
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
                    />
                    <Input 
                      type="text"
                       className="register__textBox"
                       value={name}
                       onChange={(e) => setName(e.target.value)}
                       placeholder="Full Name"
                       bg={useColorModeValue('white', '#353535')}
                    />
                  </InputGroup>
                </FormControl>

                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                    />
                    <Input
                    type="text"
                      className="register__textBox"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="E-mail Address"
                      bg={useColorModeValue('white', '#353535')}
                    />
                </InputGroup>
                </FormControl>

                <FormControl>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                    />
                    <Input
                     type="password"
                      className="register__textBox"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                     placeholder="Password"
                     bg={useColorModeValue('white', '#353535')}
                    />
                </InputGroup>
                </FormControl>

                <Button 
                className="register__btn"
                onClick={register}                
                backgroundColor={useColorModeValue('white.500', 'blue.500')}
                >
                Register
                </Button>


              </Stack>
            </form>
          </Box>
        </Stack>

        <Box>
          
          Already have an account?{' '}
          <Link
          color='blue.500' 
          href="/signin">Sign in</Link> now.
        </Box>
      </Flex>
    )
  }

export default Register;