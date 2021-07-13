import { useRef } from "react";
import styled from "styled-components";

export default function SliderTrack({children}) {
    const divRef = useRef(null);
    let moving = false
    let initialPosition = null;
    let transform = 0;
    let lastPageX = 0;
    let transformValue = 0;
    let reached = false;
    const handleGestureStart = (e) => {
        initialPosition = e.pageX;
        moving = true;
        const transformMatrix = window.getComputedStyle(divRef.current).getPropertyValue('transform');
        if(transformMatrix !== 'none')
        {
            transform = parseInt(transformMatrix.split(',')[4].trim());
        }
    }
    const handleGestureMove = (e) => {
        if(moving){
            const currentPosition = e.pageX;
            if( e.pageX - lastPageX > 0 && transformValue > 0) return;
            else if ((Math.abs(transformValue) > divRef.current.offsetWidth - 320)) return;
            const diff = currentPosition - initialPosition;
            transformValue = transform + diff;
            reached = false;
            divRef.current.style.transform = `translateX(${transformValue}px)`;
        }
        lastPageX = e.pageX;
    }

    const handleGestureEnd = (e) => {
        moving = false;
    }
    return (
        <Track ref = {divRef} onPointerDown = {handleGestureStart} onPointerMove = {handleGestureMove} onPointerUp = {handleGestureEnd} onMouseDown = {handleGestureStart} onMouseMove = {handleGestureMove} onMouseUp = {handleGestureEnd} >
            {children}
        </Track>
    )
}

const Track = styled.div`
    position:absolute;
    left: 0px;
    cursor: pointer;
    display:inline-flex;
    touch-action: none;
`;