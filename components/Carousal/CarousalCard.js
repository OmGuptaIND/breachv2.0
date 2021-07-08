import styled from "styled-components";
import Image from 'next/image';
import blurEffect from '../../utils/BlurEffect';
import Card from "./Card";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { devicesSmall } from "../../devices";
export default function CarousalCard({doc, prevSlide, nextSlide}) {
    return (
        <Container>
            <ImageContainer>
                <ImageShow
                src={doc.imgUrl}
                alt='hero-image'
                layout='fill'
                placeholder='blur'
                loading = 'eager'
                blurDataURL={blurEffect}
                />
                <OverLayHero />
            </ImageContainer>
            <Card doc = {doc} />
            <CardControls>
                <Slider>
                    <ArrowLeft onClick = {() => prevSlide()} fontSize = 'inherit'/>
                </Slider>
                <Slider>
                    <ArrowRight onClick = {() => nextSlide()} fontSize = 'inherit' />
                </Slider>
            </CardControls>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
`;
const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;
const ImageShow = styled(Image)`
  z-index: -1;
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;
const OverLayHero = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

const CardControls = styled.div`
    position: absolute;
    bottom: 3%;
    right: 5%;
    display: flex;
    align-items: center;
    border-radius: 10px;
    border: 1px solid white;
    @media ${devicesSmall.mobileL}
    {
        bottom: 10%;
        right: 5%;
    }
    @media ${devicesSmall.laptop}
    {
        bottom: 10%;
        right: 10%;
    }
`;
const Slider = styled.div`
    font-size: 3rem;
    margin: 0px 20px;
    transform: translate(12%);
    padding: 0px;
    margin: 0px 10px;
`;
const ArrowLeft = styled(ArrowBackIosIcon)`
    margin-bottom: -8px;
    cursor: pointer;
`;
const ArrowRight = styled(ArrowForwardIosIcon)`
    margin-bottom:-8px;
    cursor: pointer;
`;

