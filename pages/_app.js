import styled from 'styled-components';
import '../styles/globals.css'

//Components
import Header from '../components/Partials/Header';
import Footer from '../components/Partials/Footer';
import Copyright from '../components/Partials/Copyright';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <Header />
      <Head>
        <link rel = 'icon' href = '/logo/logo.svg' />
        <title>Breach | Opinion is now a choice</title>
      </Head>
      <Component {...pageProps} />
      <Footer />
      <Copyright />
    </Container>

  )
}
export default MyApp;

const Container = styled.div``;
