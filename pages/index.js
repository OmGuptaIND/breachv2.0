import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';
import HeroPage from '../components/HeroPage';
import Recent from '../components/Homepage/Recent';
import { devicesSmall } from '../devices';
export default function Home() {
  return (
    <Container>
      <HeroPage />
      <SectionContainer>
        <Recent />
      </SectionContainer>
    </Container>
  )
}

const Container = styled.div`
`;

const SectionContainer = styled.div`
    padding: 20px 2%;
    transition: all 0.6s ease-in-out;
    @media ${devicesSmall.tablet}
    {
        padding: 20px 5%;
    }
`;
