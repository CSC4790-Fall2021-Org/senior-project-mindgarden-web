import Head from 'next/head'
import { Navbar } from '../components/Navbar';

const Home = () => {
  return (
    <div>
    <Head>
      <title>Create Next App</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Navbar />
    <div>Hello World</div>
  </div>
  )
}

export default Home
