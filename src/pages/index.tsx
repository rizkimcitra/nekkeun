import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className='max-w-2xl py-10 mx-auto w-[90%]'>
      <Head>
        <title>Nekkeun - NEXT.js App</title>
      </Head>
      <h1 className='text-3xl md:text-5xl font-bold text-center'>Hello World</h1>
    </div>
  )
}

export default Home
