import HeroSelection from '@/components/pages/create/HeroSelection';
import StartupForm from '@/components/pages/create/StartupForm';
import { auth } from '@/lib/auth';
import React from 'react';


const page = async () => {
  const session = await auth();

  if(!session) {
    return Response.redirect(new URL("/", process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"));
  }

  return (
    <>
      <HeroSelection />
      <StartupForm />
    </>
  )
}

export default page;