import { useState, useEffect } from "react";
import styled from "styled-components";
import CarousalCard from './CarousalCard';
import data from './Data';

export default function Carousal() {
    const [current, setCurrent] = useState(0);
    const length = data.length;
    const prevSlide = () =>{
        setCurrent(current === 0 ? length - 1 : current - 1 );
    }
    const nextSlide = () =>{
        setCurrent(current === length - 1 ? 0 : current + 1 );
    }
    // setTimeout(()=>nextSlide(), 4000);
    return (
        <Container>
            {data?.map( (doc, index) => <> { index === current && <CarousalCard prevSlide = {prevSlide} nextSlide = {nextSlide}  doc={doc} /> } </> )}
        </Container>
    )
}
const Container = styled.div``;