import styled from "styled-components";
import Image from 'next/image';
import blurEffect from "../../utils/BlurEffect";

export default function SliderCard({imgUrl, text}) {
  return (
    <Card>
      <ImageContainer>
        <ImageDiv
          width='250px'
          height='150px'
          layout='responsive'
          src={imgUrl}
          alt='imageErr'
          placeholder='blur'
          blurDataURL={blurEffect}
        />
      </ImageContainer>
      <p>
        {text}
      </p>
    </Card>
  );
}
const Card = styled.div`
  width: 250px;
  height: 285px;
  background-color: white;
  border-radius: 10px;
  margin-right: 20px;
  background-color: #121212;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: ${(props) => `${props.isTrue}px`};
  > p {
    color: var(--color-font);
    font-family: var(--font);
    font-weight: 200;
    font-size: 16px;
    margin: 20px 5px 0px 10px;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 150px;
  > img {
    width: 100%;
    border-radius: 10px 10px 0px 0px;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageDiv = styled(Image)`
  border-radius: 10px 10px 0px 0px;
  object-fit: cover;
`;