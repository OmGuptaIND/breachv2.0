import styled from 'styled-components';
import '../styles/globals.css'

//Components
import Header from '../components/Header';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Header />
      <Head>
        <title>Breach.</title>
      </Head>
      <Component {...pageProps} />
    </Container>

  )
}
export default MyApp;

const Container = styled.div``;
