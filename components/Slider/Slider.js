import styled from "styled-components";
import SliderCard from "./SliderCard";
import SliderTrack from './SliderTrack';

export default function Slider({data}) {

    return (
        <Container>
            <CardCarousal>
                <SliderTrack>
                    {data?.map( doc => <SliderCard key = {doc.id} doc = {doc} /> )}
                </SliderTrack>
            </CardCarousal>
        </Container>
    )
}
const Container = styled.div`
    margin-top: 10px;
`;

const CardCarousal  = styled.div`
    width:100%;
    position: relative;
    overflow: hidden;
    height: 50vh;
`;
