import styled from "styled-components";
import data from '../../Data/ArticlesData';
import GridCards from "../GridCards/GridCards";
import PageSection from "../Partials/PageSection"
export default function Recent() {
    return (
        <Container>
            <PageSection>
                <h1>Recent Articles</h1>
            </PageSection>
            <GridCards data = {data} />
        </Container>
    )
}

const Container = styled.div`
`;


