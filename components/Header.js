import styled from "styled-components";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import SearchIcon from '@material-ui/icons/Search';
import DropDown from './DropDown';
import { useState } from "react";
import MenuIcon from '@material-ui/icons/Menu';
import { devicesSmall } from "../devices";
export default function Header() {
    const [showArticles, setShowArticles] = useState(false);
    const [showPages, setShowPages] = useState(false);
  return (
    <Container>
      <Logo>Breach.</Logo>
      <HeaderOptions>
        <Options>
          <Links>Home</Links>
        </Options>
        <Options onMouseEnter = {(e) => setShowArticles(true)} onMouseLeave = {() => setShowArticles(false)} >
          <Links>Articles</Links>
            <DropIcon fontSize='small' />
          <DropDown show = {showArticles}>
            <DropOptionsContainer>
                <DropOptions>Videos</DropOptions>
                <DropOptions>Newsletters</DropOptions>
                <DropOptions>Inforgraphics</DropOptions>
                <DropOptions>Coming Soon...</DropOptions>
            </DropOptionsContainer>
          </DropDown>
        </Options>
        <Options onMouseEnter = {(e) => setShowPages(true)} onMouseLeave = {() => setShowPages(false)} >
          <Links>Pages</Links>
          <DropIcon fontSize='small' />
          <DropDown show = {showPages}>
            <DropOptionsContainer>
                <DropOptions>About Us</DropOptions>
                <DropOptions>Contact Us</DropOptions>
                <DropOptions>FAQ</DropOptions>
                <DropOptions>Coming Soon...</DropOptions>
            </DropOptionsContainer>
          </DropDown>
        </Options>
        <Options>
          <Links>Docs</Links>
        </Options>
      </HeaderOptions>
      <UtilityContainer>
        <SearchDiv fontSize='large' />
        <Contribute>Contribute</Contribute>
      </UtilityContainer>
    <Drawer>
        <MenuIcon fontSize = 'large' />
    </Drawer>
    </Container>
  );
}

const Container = styled.div`
    display: flex;
    position: absolute;
    top: 0px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 20px 10px;
    background-color: inherit;
    z-index:999;
    transition: all 0.6s ease-in-out;
    @media ${devicesSmall.laptop}
    {
        padding: 20px 50px;
    }
`;
const Logo = styled.h1`
    font-size: 40px;
    cursor: pointer;
    transition: all 0.6s ease-in-out;
    @media ${devicesSmall.mobileL}
    {
        font-size:45px;
    }
`;
const HeaderOptions = styled.div`
    display: flex;
    align-items: center;
    display: none;
    transition: all 0.6s ease-in-out;
    @media ${devicesSmall.tablet}
    {
        display: flex;
    }
`;
const Options = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    padding: 3px 20px;
    font-size: 18px;
    letter-spacing:1.3px;
    cursor: pointer;
    transition: all 0.6s ease-in-out;
    @media ${devicesSmall.laptop}
    {
        padding: 3px 40px;
    }
`;
const Links = styled.p`
    transition: all 0.4s ease-in-out;
    :hover{
        color:var(--color-btn);
    }
`;
const DropIcon = styled(ArrowDropDownIcon)``;
const SearchDiv = styled(SearchIcon)`
    margin-right: 15px;
    border: 1px solid whitesmoke;
    border-radius:5px;
    padding:2px;
    cursor: pointer;
`;
const Contribute = styled.button`
    color: var(--color-font);
    padding: 10px 15px;
    background-color: var(--color-btn);
    font-size: 14px;
    font-weight: 300;
    letter-spacing:2px;
    font-family: var(--font-main-family);
    outline: none;
    border: none;
    border-radius: 10px;
    box-shadow: 0px 1px 10px rgba(255, 255, 255, 0.3);
    cursor: pointer;
`;
const UtilityContainer = styled.div`
    align-items: center;
    display: none;
    transition: all 0.6s ease-in-out;
    @media ${devicesSmall.tablet}
    {
        display: flex;
    }
`;

const DropOptionsContainer = styled.div`
    padding:20px;
`;
const DropOptions = styled.p`
    margin: 10px 0px 20px 0px;
    font-family: var(--font-assent);
    font-family: 400;
    z-index: 1;
    :hover{
        
    }
`;

const Drawer = styled.div`
    transition: all 0.6s ease-in-out;
    @media ${devicesSmall.tablet}
    {
        display: none;
    }
`;