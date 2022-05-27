import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!  Hi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Hi! Welcome to my app! " />
        <h3> Example commit </h3>
        <p className="description">
          Get started by editing Test <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
