import { clsxm } from '@/libs'

import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <main className={clsxm('layout')}>
      <Head>
        <title>Nekkeun - NEXT.js App</title>
      </Head>

      <section className={clsxm('min-h-screen', 'flex flex-col', 'items-center justify-center')}>
        <h1 className={clsxm('mb-4', 'text-center', 'md:text-5xl')}>Nekkeun - NEXT.js App</h1>
        <p className='text-center max-w-prose'>
          Nekkeun doesn&apos;t mean <em>ngabatin</em>, Nekken mean <em>Nekkeun</em>, in other word,
          it&apos;s <em>NextKeun</em>, which means let&apos;s build an app with NEXT.js
        </p>
      </section>
    </main>
  )
}

export default Home
