import { Avatar } from "@material-ui/core";
import Image from "next/image";
import styled from "styled-components";
import { devicesSmall } from "../../devices";
import blurEffect from "../../utils/BlurEffect";

export default function ArticleCard({ doc }) {
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
      <CardContainer>
        <AvatarImage src = {doc?.author?.authorimgUrl} alt = {doc?.author?.authorName} />
        <CardData>
          <h1>{doc.title}</h1>
          <p>{doc.desc}</p>
          <Author>{doc.author.authorName}</Author>
          <ArticleData>
            <p>{doc.readTime} mins</p>
            <span>.</span>
            <ReadTime>21 May 2021</ReadTime>
          </ArticleData>
        </CardData>
      </CardContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 380px;
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
  min-height: 180px;
  max-height: 200px;
  border-radius: 15px 15px 0px 0px;
  margin-bottom: 10px;
`;
const ImageValue = styled(Image)`
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
const AvatarImage = styled(Avatar)`
  margin-bottom: 10px;
  &&&{
    width:50px;
    height:50px
  }
`;
const CardContainer = styled.div`
  margin-top: -40px;
  padding: 0px 2%;
  min-height: 200px;
  max-height: 300px;
`;

const ArticleData = styled.div`
  display: flex;
  align-items: center;
  >p{
    font-size: 14px;
    font-weight: 200;
    letter-spacing: 1px;
    margin-top: 10px;
  }
  >span{
    margin: 0px 8px;
    font-size: 20px;
    font-weight: bold;
  }
`;
const Author = styled.p`
  color: var(--color-under);
  font-weight: 200;
  margin-top: 10px;
  letter-spacing:1px;
`;
const ReadTime = styled.p`
  font-weight: bold;
  color: var(--color-btn);
`;