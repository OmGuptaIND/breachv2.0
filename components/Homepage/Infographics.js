import styled from "styled-components";
import PageSection from '../../components/Partials/PageSection';
import data from '../../Data/ArticlesData';
import SliderInfographics from "../Slider/SliderInfographics";
import Slider from "../Slider/Slider";

export default function Infographics() {
    return (
        <Container>
            <PageSection color = 'yellow'>
                <h1>Infographics</h1>
            </PageSection>
            <Slider data={data} />
        </Container>
    )
}

const Container = styled.div`

`;
