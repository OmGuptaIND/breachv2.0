import styled from "styled-components";
import { device, devicesSmall } from "../../devices";

export default function PageSection({children, color, show = true}) {
    return (
        <Container>
            <TitleContainer>
                <SideBorder color = {color}/>
                {children}
            </TitleContainer>
            <ViewMore show = {show} >
                <p>See All</p>
            </ViewMore>
        </Container>
    )
}
const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-between;
`;
const SideBorder = styled.div`
    width:8px;
    background-color: ${props => props.color ? props.color : 'blueviolet'} ;
    height: 18px;
`;
const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    >h1{
        transition: all 0.6s ease-in-out;
        margin-left: 10px;
        font-size: 2rem;
    }
    @media ${devicesSmall.tablet}
    {
        >h1{
            font-size: 2.5rem;
        }
    }
`;

const ViewMore = styled.div`
    display: ${props => props.show ? 'inline-block' : 'none'};
    >p{
        font-family: var(--font-assent);
        font-weight: 100;
        font-size: 15px;
        background-color: #121212;
        padding: 5px 10px;
        border-radius: 10px;
        cursor: pointer;
    }
    @media ${device.mobileS}
    {
        >p{
            font-size: 10px;
        }
    }
`;