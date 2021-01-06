import Head from 'next/head'

export default function Home() {
  return (
    <div>
        <Head>
            <title>
                NEXT JS Starter
            </title>
        </Head>
        <div className="bg-success min-h-screen flex justify-center items-center">
            <h1 className="text-white text-5xl font-bold">
                HELLO WORLD
            </h1>
        </div>
    </div>
  )
}
