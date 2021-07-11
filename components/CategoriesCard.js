import styled from "styled-components";
import Image from 'next/image';
import blurEffect from "../utils/BlurEffect";
import { useState } from "react";

export default function CategoriesCard({doc}) {
    const [view, setView] = useState(false);
    return (
        <Container onMouseEnter = {() => setView(true)} onMouseLeave = {() => setView(false)}>
            <ImageContainer>
                <ImageView placeholder='blur' blurDataURL={blurEffect} src = {doc.imgUrl} alt = 'err'  layout = 'fill' />
                <OverLayHero view = {view} />
            </ImageContainer>
            <CategoryTitle>{doc.title}</CategoryTitle>
        </Container>
    )
}

const Container = styled.div`
    width:100%;
    height: 250px;
    position: relative;
    margin-top: 20px;
    border-radius: 10px;
`;
const ImageContainer = styled.div`
    position: relative;
    width:100%;
    height: 80%;
    object-fit: cover;
    border-radius: 10px;
`;
const ImageView = styled(Image)`
    border-radius: 10px;
`;
const CategoryTitle = styled.h1`
    font-size:25px;
    margin-left: 5px;
    margin-top: 5px;
    cursor: pointer;
`;

const OverLayHero = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all 0.6s ease-in-out;
  cursor: pointer;
  background-color: ${props => props.view ? "rgba(0, 0, 120, 0.5)" : 'none' }
`;
