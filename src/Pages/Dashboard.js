import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from '../firebase'
import { query, collection, getDocs, where } from "firebase/firestore";
import { Button,
  Box,
  Flex,
  FormControl,
  useColorModeValue} from '@chakra-ui/react'
 


function Dashboard() {
  const [user, loading] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };
  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/signin");
    fetchUserName();
  }, [user, loading]);


  
  return (

<Flex flexDirection="column"
      height="80vh"
      width="100wh"
      justifyContent="center"
      alignItems="center"
      bg={useColorModeValue('#dddddd', '#202023')}>
      <Box
        p={8}
        borderWidth={1}
        borderRadius={8}
        boxShadow="1g"
      >
      <FormControl>
        
        <h1>Welcome</h1>
         <p>{name}</p>
         <p>{user?.email}</p>
         <Button className="dashboard__btn" onClick={logout}>
          Log out
         </Button>
         </FormControl>
    </Box>
</Flex>
  );
}
export default Dashboard