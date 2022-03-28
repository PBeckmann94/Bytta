import React from 'react'
import { Button } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { db } from '../../firebase'
import { collection, getDocs } from 'firebase/firestore/lite'

const AdminContainer = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    async function getUsers(db) {
      const usersCol = collection(db, 'users')
      const usersSnapshot = await getDocs(usersCol)
      const usersList = usersSnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
      }))
      setUsers(usersList)
    }
    getUsers(db)
  }, [])

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
}

export default AdminContainer
