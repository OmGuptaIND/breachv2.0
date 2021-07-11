import styled from "styled-components";
import PageSection from '../../components/Partials/PageSection';
import data from '../../Data/ArticlesData';
import Slider from "../Slider/Slider";
export default function EditorsPick() {
    return (
        <Container>
            <PageSection color = 'yellow'>
                <h1>Editors Pick</h1>
            </PageSection>
            <Slider data={data} />
        </Container>
    )
}

const Container = styled.div`
    margin-bottom: 30px;
`;
