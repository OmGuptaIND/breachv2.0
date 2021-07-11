import styled from "styled-components";
import { devicesSmall } from "../../devices.js";
import ArticleCard from "./ArticleCard.js";
import Card from "./Card";
export default function GridCards({data}) {
    return (
        <CardContainer>
            {data?.map((doc, index) => <ArticleCard key = {doc.id} id = {index} doc = {doc} />)}
        </CardContainer>
    )
}
const CardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    transition: max-width 0.6s ease-in-out;
    @media ${devicesSmall.tablet}
    {
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
    @media ${devicesSmall.laptop}
    {
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 10px;
    }
`;