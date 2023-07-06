import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MainContainer = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #7945FF;
`;
const RulesContainer = styled.div`
    position: relative;
    width: 480px;
    height: 537px;
    border-radius: 40px;
    border: 3px solid #000;
    background: #FFF;
    box-shadow: 0px 10px 0px 0px #000;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 30px;
`;
const Title = styled.h1`
    color:  #000;
    text-align: center;
    font-size: 56px;
    font-family: 'Space Grotesk', sans-serif;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
const Container = styled.div` 
    display: flex;
    flex-direction: column;
    gap: 16px;
`;
const SecodaryTitle = styled.p`
    color: #7945FF;
    font-size: 20px;
    font-family: 'Space Grotesk', sans-serif;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
const Desc = styled.p`
    color:  #000;
    font-size: 16px;
    font-family: 'Space Grotesk', sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    display: flex;
    gap: 8px;
    
`;
const Num = styled.p`
    color:  #000;
    font-size: 16px;
    font-family: 'Space Grotesk', sans-serif;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    
`;
const OkayButton = styled(NavLink)`
    position: absolute;
    width: 70px;
    height: 74px;
    background-image: url("../../images/icon-check.svg");
    background-size: cover;
    bottom: -40px;
    left: 50%;
    transform: translate(-50%);
`;
export {MainContainer,Container,Desc,Num,OkayButton,RulesContainer,SecodaryTitle,Title};