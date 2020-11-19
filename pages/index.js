import Head from 'next/head'
import styled from 'styled-components'
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
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Card>
          card
        </Card>
        <h1 className='make_test'>test</h1>
    </div>
  )
}
