import React from 'react'
import { Button } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '../../firebase'

const AdminContainer = () => {
<<<<<<< HEAD
  const [users, setUsers] = useState([])
  const usersCollectionRef = collection(db, 'users')
  // burde sjekke localstorage, kun laste fra db hvis lastChanged i users
  //  ikke samsvarer med localstorage sin lastUpdated feks
  useEffect(() => {
    onSnapshot(usersCollectionRef, snapshot => {
      setUsers(
        snapshot.docs.map(doc => {
          return {
            id: doc.id,
            viewing: false,
            ...doc.data()
          }
        })
      )
    })
  }, [usersCollectionRef])
  return (
    <>
      <Button
        variant="solid"
        onClick={() => {
          console.log(users)
        }}
      >
        console log users array
      </Button>
      <ul>
        {users.map(userObj => (
          <Button key={userObj.email}>{userObj.displayName}</Button>
        ))}
      </ul>
    </>
  )
=======
  return <>hallo</>

>>>>>>> 0438296de4a6b947cfdae087b23f8ee428ad3763
}

export default AdminContainer
