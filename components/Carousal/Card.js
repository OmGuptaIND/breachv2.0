import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import { device } from "../../devices";
export default function Card({doc}) {
    return (
        <Container>
            <Tags>
                {doc.tags.map( (item, index) => <Tag key = {index} >{item}</Tag> )}
            </Tags>
            <CardData>
                <CardTitle>{doc.title}</CardTitle>
                <CardDesc>{doc.desc}</CardDesc>
            </CardData>
            <CardAuthor>
                <Avatar src = {doc.author.authorimgUrl} alt = 'Om Gupta' />
                <AuthorName>{doc.author.authorName}</AuthorName>
            </CardAuthor>
        </Container>
    )
}
const Container = styled.div`
    position: absolute;
    top: 30%;
    left: 5%;
    z-index: 2;
    @media ${device.tablet}
    {
        top: 20%;
        left: 1%;
        padding: 0px 10px;
    }
`;
const CardData = styled.div`
    width:70vw;
    margin-bottom: 30px;
    @media ${device.tablet}
    {
        width: 93vw;
    }
`;
const Tags = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;
const Tag = styled.p`
    padding: 8px 14px;
    background-color: var(--color-btn);
    margin: 0px 20px 0px 0px;
    border-radius: 20px;
    font-weight: 200;
    letter-spacing:1.2px;
    font-size: 1.1rem;
    @media ${device.mobileL}
    {
        font-size: 14px;
    }
`;
const CardTitle = styled.h2`
    font-family: var(--font-main);
    font-size: 3.5rem;
    font-weight:var(--font-main-weight);
    margin-bottom: 10px;
    @media ${device.mobileL}
    {
        font-size: 2.5rem;
        margin-bottom: 20px;
    }
`;
const CardDesc = styled.p`
    font-size: 1.2rem;
    font-family: var(--font-assent);
    font-weight: 300;
    @media ${device.mobileL}
    {
        font-size: 18px;
    }
`;
const CardAuthor = styled.div`
    display: flex;
    align-items: center;
`;
const AuthorName = styled.p`
    margin-left: 10px;
    font-size: 1.1rem;
    letter-spacing:1.1px;

`;