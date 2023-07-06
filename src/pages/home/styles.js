import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MainContainer = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #5C2DD5;
`;
const Menu = styled.div`
    width: 480px;
    height: 435px;
    border-radius: 40px;
    border: 3px solid #000;
    background:  #7945FF;
    box-shadow: 0px 10px 0px 0px #000;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
`;
const Logo = styled.img`
    width: 52px;
    height: 52px;
`;
const MenuButton = styled(NavLink)`
    text-decoration: none;
    width: 100%;
    height: 72px;
    border-radius: 20px;
    border: 3px solid #000;
    background: #FFCE67;
    box-shadow: 0px 10px 0px 0px #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    :nth-child(3){
        background: #FD6687;
    }
    :last-child{
        background: #fff;
    }
`;
const OptionText = styled.p`
    color: #000;

    /* Heading (M) */
    font-size: 24px;
    font-family: 'Space Grotesk', sans-serif;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
const OptionIcon = styled.img`
    width: 82px;
    height: 46px;
`;

export {MainContainer,Logo,Menu,MenuButton,OptionIcon,OptionText};