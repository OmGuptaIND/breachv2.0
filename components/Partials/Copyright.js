import styled from "styled-components";
import { devicesSmall } from "../../devices";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';

export default function Copyright() {
    return (
        <Container>
            <Logo><span>B</span>reach<span>.</span></Logo>
            <p>Copyright (c) Breachindia . All rights reserved. </p>
            <SocialMedia>
                <MediaIcons>
                    <FacebookIcon fontSize = 'small' />

                </MediaIcons>
                <MediaIcons>
                    <InstagramIcon fontSize = 'small' />

                </MediaIcons>
                <MediaIcons>
                    <LinkedInIcon fontSize = 'small' />

                </MediaIcons>
                <MediaIcons>
                    <YouTubeIcon fontSize = 'small' />

                </MediaIcons>
            </SocialMedia>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    padding: 10px 4%;
    flex-direction: column;
    align-items: center;
    justify-content:center;
    >p{
        font-family: var(--font-assent);
        letter-spacing:1px;
        font-weight: 300;
        margin-top: 10px;
    }
    @media ${devicesSmall.tablet}
    {
        flex-direction: row;
        justify-content:space-between
    }
`;

const Logo = styled.h1`
    font-size: 20px;
    cursor: default;
    transition: all 0.6s ease-in-out;
    >span{
        color: var(--color-btn);
    }
    @media ${devicesSmall.mobileL}
    {
        font-size:30px;
    }
`;

const SocialMedia = styled.div`
    display: flex;
    align-items: center;
`;
const MediaIcons = styled.div`
    padding: 10px 10px;
    transition: all 0.6s ease-in-out;
    margin-top: 10px;
    :hover{
        color: var(--color-btn)
    }
`;

