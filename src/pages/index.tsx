import { clsxm } from '@/libs'
import { dateFormat } from '@/libs/dateFormat'

import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'

const Home: NextPage = () => {
  const [clock, setClock] = useState<null | string>(null)
  const updateClock = () => setClock(new Date().toISOString())

  const config = {
    dateStyle: 'full',
    timeStyle: 'full'
  } as Intl.DateTimeFormatOptions

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const timerId = setInterval(updateClock, 1000)

      return () => clearInterval(timerId)
    }
  }, [clock])

  return (
    <main className={clsxm('layout')}>
      <Head>
        <title>Nekkeun - NEXT.js App</title>
      </Head>

      <section className={clsxm('min-h-screen', 'flex flex-col', 'items-center justify-center')}>
        <h1 className={clsxm('text-center', 'md:text-5xl')}>Nekkeun - NEXT.js App</h1>
        <p className={clsxm('my-4', 'max-w-prose', 'text-center')}>
          Nekkeun doesn&apos;t mean <em>ngabatin</em>, Nekken mean <em>Nekkeun</em>, in other word,
          it&apos;s <em>NextKeun</em>, which means let&apos;s build an app with NEXT.js 😂😂😂
        </p>

        {clock && <time dateTime={clock}>{dateFormat(clock, 'en-GB', config)}</time>}
      </section>
    </main>
  )
}

export default Home
