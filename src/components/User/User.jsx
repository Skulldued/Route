import React from 'react'
import {useParams} from 'react-router-dom';
const User = () => {
    const {id} =useParams()
  return (
    <>
      user:-{id}
    </>
  )
}

export default User
