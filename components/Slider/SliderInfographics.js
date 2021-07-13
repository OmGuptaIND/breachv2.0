import styled from "styled-components";
import Image from 'next/image';
import blurEffect from "../../utils/BlurEffect";
import { Avatar } from "@material-ui/core";

export default function SliderInfographics({doc}) {
  return (
    <Card>
      <ImageContainer>
        <ImageDiv
          width='250px'
          height='150px'
          layout='responsive'
          src={doc?.imgUrl}
          alt='imageErr'
          placeholder='blur'
          blurDataURL={blurEffect}
        />
      </ImageContainer>
      <CardContainer>
        <AvatarImage src = {doc?.author?.authorimgUrl} alt = {doc?.author?.authorName} />
        <CardData>
          <h1>{doc?.title}</h1>
          <Author>{doc?.author.authorName}</Author>
          <ArticleData>
            {doc?.readTime && <p>{doc.readTime} mins</p>}
            {doc?.readTime && (<span>.</span>)}
            <ReadTime>21 May 2021</ReadTime>
          </ArticleData>
        </CardData>
      </CardContainer>
    </Card>
  );
}
const Card = styled.div`
  user-select: none; /* supported by Chrome and Opera */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  width: 290px;
  height: auto;
  background-color: white;
  border-radius: 10px;
  margin-right: 25px;
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



const CardContainer = styled.div`
  margin-top: -10px;
  padding: 0px 2%;
  margin-bottom: 10px;
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
const CardData = styled.div`
  > h1 {
    font-size: 20px;
    margin-bottom: 10px;
    height: 90px;
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