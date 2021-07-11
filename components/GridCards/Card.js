import Image from "next/image";
import styled from "styled-components";
import { devicesSmall } from "../../devices";
import blurEffect from "../../utils/BlurEffect";

export default function Card({ doc }) {
  return (
    <Container>
      <ImageContainer>
        <ImageValue 
            src={doc.imgUrl} 
            alt='image' 
            layout='fill'
            placeholder='blur'
            blurDataURL={blurEffect}
        />
      </ImageContainer>
      <CardData>
        <h1>{doc.title}</h1>
        <p>{doc.desc}</p>
      </CardData>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 320px;
  background-color: #121212;
  margin-bottom: 10px;
  padding: 12px;
  border-radius: 15px;
  transition: max-width 0.6s ease-in-out;
  @media ${devicesSmall.tablet} {
    /* max-width: 320px; */
  }
`;
const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  border-radius: 15px 15px 0px 0px;
  margin-bottom: 10px;
`;
const ImageValue = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 15px 15px 0px 0px;
  object-fit: cover;
`;
const CardData = styled.div`
  > h1 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  > p {
    font-size: 15px;
    font-weight: 200;
    letter-spacing: 1px;
  }
`;