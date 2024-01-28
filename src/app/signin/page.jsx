import { getServerSession } from "next-auth";
import Signin from "../../Components/registration/Signin";
import React from 'react'
import { authOptions } from "../../lib/auth";

const page = async () => {
  const session = await getServerSession(authOptions);
  return (
    <Signin session={session}/>
  )
}

export default page