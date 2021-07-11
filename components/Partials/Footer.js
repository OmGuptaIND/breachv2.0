import styled from "styled-components";
import Image from 'next/image';
import { devicesSmall } from "../../devices";
import { Avatar } from "@material-ui/core";
import blurEffect from "../../utils/BlurEffect";

export default function Footer() {
    return (
        <Container>
            <LogoContainer>
                <Logo><span>B</span>reach<span>.</span></Logo>
                <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta finibus justo, vestibulum finibus justo gravida ac. Phasellus hendrerit elementum turpis, ac ornare lectus imperdiet sed.</Description>
                <AboutBtn>About Us ></AboutBtn>
            </LogoContainer>

            <HeadContainer>
                <ContainerHeader>Infographics</ContainerHeader>
                <InfographicsCard>
                    <ImageContainer>
                        <Image placeholder='blur' blurDataURL={blurEffect} layout = 'fill' src = '/images/one.jpeg' alt = 'image' />
                    </ImageContainer>
                    <CardData>
                        <CardHeader>Appointed Dedocated the French Crossiants</CardHeader>
                        <CardAuthors>Vansh Mahajan, Diya Rajvanshi</CardAuthors>
                    </CardData>
                </InfographicsCard>

                <InfographicsCard>
                    <ImageContainer>
                        <Image placeholder='blur' blurDataURL={blurEffect} layout = 'fill' src = '/images/two.jpeg' alt = 'image' />
                    </ImageContainer>
                    <CardData>
                        <CardHeader>Appointed Dedocated the French Crossiants</CardHeader>
                        <CardAuthors>Vansh Mahajan, Diya Rajvanshi</CardAuthors>
                    </CardData>
                </InfographicsCard>

                <InfographicsCard>
                    <ImageContainer>
                        <Image placeholder='blur' blurDataURL={blurEffect} layout = 'fill' src = '/images/three.jpeg' alt = 'image' />
                    </ImageContainer>
                    <CardData>
                        <CardHeader>Appointed Dedocated the French Crossiants</CardHeader>
                        <CardAuthors>Vansh Mahajan, Diya Rajvanshi</CardAuthors>
                    </CardData>
                </InfographicsCard>
                <ViewButton>View All</ViewButton>
            </HeadContainer>

            <HeadContainer>
                <ContainerHeader>Categories</ContainerHeader>
                <Categories>Featured</Categories>
                <Categories>India</Categories>
                <Categories>Religion</Categories>
                <Categories>Technology</Categories>
                <Categories>Finance</Categories>
                <Categories>World News</Categories>
            </HeadContainer>

            <HeadContainer>
                <ContainerHeader>Creators</ContainerHeader>
                <CreatorCard>
                    <AvatarImage placeholder='blur' blurDataURL={blurEffect} src = '/images/one.jpeg' alt = 'Om Gupta' />
                    <Creator>
                        <h1>Om Gupta</h1>
                        <p>21 Articles</p>
                    </Creator>
                </CreatorCard>

                <CreatorCard>
                    <AvatarImage placeholder='blur' blurDataURL={blurEffect} src = '/images/two.jpeg' alt = 'Om Gupta' />
                    <Creator>
                        <h1>Krishna Kulshreshta</h1>
                        <p>21 Articles</p>
                    </Creator>
                </CreatorCard>

                <CreatorCard>
                    <AvatarImage placeholder='blur' blurDataURL={blurEffect} src = '/images/three.jpeg' alt = 'Om Gupta' />
                    <Creator>
                        <h1>Vansh Mahajan</h1>
                        <p>21 Articles</p>
                    </Creator>
                </CreatorCard>

                <CreatorCard>
                    <AvatarImage placeholder='blur' blurDataURL={blurEffect} src = '/images/four.jpeg' alt = 'Om Gupta' />
                    <Creator>
                        <h1>Ananya Nautiyal</h1>
                        <p>21 Articles</p>
                    </Creator>
                </CreatorCard>

                <CreatorCard>
                    <AvatarImage placeholder='blur' blurDataURL={blurEffect} src = '/images/five.jpeg' alt = 'Om Gupta' />
                    <Creator>
                        <h1>Diya Rajvanshi</h1>
                        <p>21 Articles</p>
                    </Creator>
                </CreatorCard>

                <CreatorCard>
                    <AvatarImage placeholder='blur' blurDataURL={blurEffect} src = '/images/three.jpeg' alt = 'Om Gupta' />
                    <Creator>
                        <h1>Arjun Saxena</h1>
                        <p>21 Articles</p>
                    </Creator>
                </CreatorCard>
            </HeadContainer>
        </Container>
    )
}
const LogoContainer = styled.div`
    margin-bottom: 30px;
`;

const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    border-top: 0.6px solid var(--color-under);
    border-bottom: 0.6px solid var(--color-under);
    padding: 20px 4%;
    transition: all 0.6s ease-in-out;
    @media ${devicesSmall.tablet}
    {
        padding: 20px 5%;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
    @media ${devicesSmall.laptop}
    {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 10px;
    }
`;

const Logo = styled.h1`
    font-size: 40px;
    cursor: default;
    transition: all 0.6s ease-in-out;
    >span{
        color: var(--color-btn);
    }
    @media ${devicesSmall.mobileL}
    {
        font-size:45px;
    }
`;

const Description = styled.p`
    font-size: 15px;
    font-weight: 200;
    letter-spacing: 1px;
    cursor: default;
`;

const AboutBtn = styled.button`
    display: flex;
    align-items: center;
    color: var(--color-font);
    font-size: 16px;
    border: 2px solid white;
    border-radius:10px;
    padding: 12px 20px;
    background-color: var(--color-back);
    font-weight: 300;
    font-family: var(--font-assent);
    margin-top: 20px;
    letter-spacing: 1px;
    cursor: pointer;
`;

const HeadContainer = styled.div`
    cursor: default;
    margin-bottom: 20px;
    @media ${devicesSmall.tablet}
    {
        text-align:center;
    }
`;

const ContainerHeader = styled.h1`
    padding-bottom: 5px;
    border-bottom: 3px solid var(--color-btn);
    display: inline-block;
    cursor: default;
`;
const Categories = styled.h1`
    font-family: var(--font-assent);
    font-size: 25px;
    margin-top: 30px;
    letter-spacing: 1px;
    cursor: pointer;
    transition: all 0.4s ease-in-out;
    :hover{
        color: var(--color-btn);
    }
`;

const InfographicsCard = styled.div`
    width: 100%;
    height: 100%;
    min-height:100px;
    max-height: 120px;
    display: flex;
    align-items: center;
    background-color:#121212;
    text-align: start;
    border-radius: 10px;
    margin-top: 20px;
    padding: 10px;
`;
const ImageContainer = styled.div`
    position: relative;
    width: 60%;
    height: 100%;
    min-height:100px;
    max-height: 120px;
    object-fit: cover;
    border-radius: 10px;
`;
const CardData = styled.div`
    margin-left: 10px;
`;
const CardHeader = styled.h1`
    font-size:14px;
    margin-bottom: 5px;
    transition: all 0.6s ease-in-out;
    cursor: pointer;
    :hover{
        color: var(--color-btn);
    }
`;
const CardAuthors = styled.p`
    font-size:12px;
    color: var(--color-under);
    font-weight: 200;
    letter-spacing: 1px;
`;

const CreatorCard = styled.div`
    display: flex;
    align-items: center;
    border-radius: 10px;
    margin-top: 20px;
`;

const ViewButton = styled.button`
    width: 100%;
    padding: 15px 20px;
    margin-top: 20px;
    border: none;
    outline: none;
    color: var(--color-font);
    background-color: var(--color-btn);
    font-size: 20px;
    font-family:var(--font-assent);
    font-weight: 700;
    letter-spacing: 2px;
    border-radius: 10px;
    box-shadow: 1px 1px 10px rgba(255, 255, 255, 0.4);
    cursor: pointer;
    transition: all 0.6s ease-in-out;
    :hover{
        background-color: var(--color-font);
        color: var(--color-btn);
    }
`;
const AvatarImage = styled(Avatar)`
  margin-bottom: 10px;
  margin-right: 10px;
  &&&{
    width:50px;
    height:50px
  }
`;
const Creator = styled.div`
    text-align: start;
    >h1{
        font-size: 16px;
        transition: all 0.6s ease-in-out;
        cursor: pointer;
        :hover{
            color: var(--color-btn);
        }
    }
    >p{
        font-size:14px;
        font-weight: 200;
        letter-spacing: 1px;
    }
`;