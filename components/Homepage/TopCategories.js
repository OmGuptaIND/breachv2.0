import { useState } from "react";
import styled from "styled-components";
import PageSection from '../../components/Partials/PageSection';
import { devicesSmall } from "../../devices";
import CategoriesCard from "../CategoriesCard";
export default function TopCategories() {
    const [Data, setData] = useState([
        {
            id: Math.floor(Math.random() * 1000),
            imgUrl: '/images/one.jpeg',
            title: 'Religion'
        },
        {
            id: Math.floor(Math.random() * 1000),
            imgUrl: '/images/two.jpeg',
            title: 'Technology'
        },
        {
            id: Math.floor(Math.random() * 1000),
            imgUrl: '/images/three.jpeg',
            title: 'Finance'
        },
        {
            id: Math.floor(Math.random() * 1000),
            imgUrl: '/images/four.jpeg',
            title: 'Politics'
        },
    ])
    return (
        <Container>
            <PageSection color = 'red'>
                <h1>Top Categories</h1>
            </PageSection>
            <CategoriedContainer>
                {Data?.map(doc => <CategoriesCard key = {doc?.id} doc={doc} />)}
            </CategoriedContainer>
        </Container>
    )
}

const Container = styled.div`
    margin-bottom: 30px;
`;

const CategoriedContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    @media ${devicesSmall.tablet}
    {
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px ;
    }

    @media ${devicesSmall.laptop}
    {
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 20px ;
    }
`;
