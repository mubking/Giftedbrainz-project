import { getServerSession } from 'next-auth'
import Signup from '../../Components/registration/Signup'
import React from 'react'
import { authOptions } from '../../lib/auth'

const page = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
   <Signup session={session}/>
  )
}

export default page