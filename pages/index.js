// import Head from 'next/head'
import styled from 'styled-components'
import NextHead from '../components/NextHead'
import About from '../components/about'
// import styles from '../styles/Home.module.css'
import '../styles/style.css'

const Card = styled.div`
  width: 20%;
  border:1px solid red;
  font-size:30px;
  text-align: center;
  box-shadow: 0 20px 30px rgba(0,0,0,0.2);
  margin: 0 auto;
  margin-top: 20px;
`

export default function Home() {
  return (
    <div>
      <NextHead 
        title="Create Next App"
        description="react next practice"
        keywords="react,next" />
      {/* <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="react next practice" />
        <meta name="keywords" content="react,next" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Create Next App" />
        <meta property="og:description" content="react next practice" />
        <meta property="og:image" content="" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head> */}
        <Card>
          card
        </Card>
        <About tg="compontens tag" />
        <h1 className='make_test'>test</h1>
        <div className='eli'>
          <img src="img/EeYO01dUYAAO5ru.jpg" />
        </div>
    </div>
  )
}
