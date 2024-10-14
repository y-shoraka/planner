'use client'

// import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react'


function HomePage() {
  // const { data: session } = useSession();
  return (
  //   <div>
  //   {!session ? (
  //     <>
  //       <p>You are not signed in.</p>
  //       <button onClick={() => signIn('google')}>Sign in with Google</button>
  //     </>
  //   ) : (
  //     <>
  //       <p>Welcome, {session?.user?.name??''}</p>
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </>
  //   )}
  // </div>
  <div>hello it is homepage</div>
  )
}

export default HomePage