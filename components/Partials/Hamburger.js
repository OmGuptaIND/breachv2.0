import MenuIcon from '@material-ui/icons/Menu';
import styled from 'styled-components';
import { IconButton } from '@material-ui/core';
import { devicesSmall } from '../../devices';
import { useState } from 'react';
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import CloseSharpIcon from '@material-ui/icons/CloseSharp';
export default function Hamburger() {
    const [open, setOpen] = useState(false);
    const [openPages, setOpenPages] = useState(false);
    return (
        <Container>
            <IconButton onClick={() => setOpen(true)} color = 'inherit' >
                <MenuIcon fontSize = 'large' />
            </IconButton>
            <DrawerContainer anchor='top' open={open} onOpen={() => setOpen(true)} onClose={()=>setOpen(false)}>
                <ContainerValue>
                    <CrosIconButton>
                        <IconButton onClick={() => setOpen(false)} color = 'inherit' >
                            <CloseSharpIcon fontSize = 'large' />
                        </IconButton>
                    </CrosIconButton>
                    <HeadContainer>
                        <h1>Home</h1>
                    </HeadContainer>
                    <HeadContainer>
                        <h1>Articles</h1>
                    </HeadContainer>
                    <HeadContainer>
                        <AccordianContainer>
                            <AccordianTitle is_shown = {openPages} onClick = {()=>setOpenPages(!openPages)} >
                                <h1>Pages</h1>
                                <DropIcon fontSize="large" />
                            </AccordianTitle>
                            <AccordianData is_shown = {openPages} >
                                <p>About Us</p>
                                <p>Contact Us</p>
                                <p>FAQ</p>
                                <p>Coming Soon..</p>
                            </AccordianData>
                        </AccordianContainer>
                    </HeadContainer>
                    <HeadContainer>
                        <AccordianContainer>
                            <AccordianTitle is_shown = {openPages} >
                                <h1>Others</h1>
                                <DropIcon fontSize="large" />
                            </AccordianTitle>
                            <AccordianData is_shown = {openPages} >
                                <p>About Us</p>
                                <p>Contact Us</p>
                                <p>FAQ</p>
                                <p>Coming Soon..</p>
                            </AccordianData>
                        </AccordianContainer>
                    </HeadContainer>
                </ContainerValue>
            </DrawerContainer>
        </Container>
    )
}
const Container = styled.div`
    transition: all 0.6s ease-in-out;
    @media ${devicesSmall.tablet}
    {
        display: none;
    }
`;
const DrawerContainer = styled(SwipeableDrawer)`
    position: relative;
`;

const CrosIconButton = styled.div`
    position: absolute;
    top: 0;
    right: 0;
`;

const ContainerValue = styled.div`
    width: 100%;
    height: auto;
    background-color: #121212;
    color: white;
    padding-top: 30px;
    font-size: 13px;
`;

const HeadContainer = styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: space-between;
    padding: 20px 2%;
    transition: all 0.4s ease-in-out;
    :hover{
        color: var(--color-btn);
    }
`;
const DropIcon = styled(ArrowDropDownIcon)`

`;
const AccordianContainer = styled.div`
    width: 100%;
    transition: all 0.4s ease-in-out;
`;

const AccordianTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all 0.4s ease-in-out;
    color: ${props => props.is_shown ? 'var(--color-btn)' : 'inherit'};
    :hover{
        color: var(--color-btn);
    }
`;
const AccordianData = styled.div`
    background-color: var(--color-btn);
    border-radius: 10px;
    padding: 0px 12px;
    margin-top: 10px;
    width: 100%;
    transition: all 0.4s ease-in-out;
    display: ${props => props.is_shown ? 'inline-block' : 'none'};
    >p{
        padding: 15px 0px;
        font-size: 22px;
        font-weight: bold;
        letter-spacing: 1px;
    }
`;