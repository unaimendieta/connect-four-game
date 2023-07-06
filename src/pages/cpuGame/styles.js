import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MainContainer = styled.main`
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;
    background: #7945FF;
    padding-top: 53px;
`;
const Footer = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 200px;
    border-radius: 60px 60px 0px 0px;
    background: ${props=>props.winner};;
    z-index: 0;
`;
const PlayerContainer = styled.div`
    width: 141px;
    height: 160px;
    border-radius: 20px;
    border: 3px solid #000;
    background: #FFF;
    box-shadow: 0px 10px 0px 0px #000;

`;
const PlayerLogo = styled.img`
    position: relative;
    left: 50%;
    transform: translate(-50%);
    top:-30px;
    width: 54px;
    height: 59px;
`;
const PlayerName = styled.p`
    margin-top: -20px;
    color:  #000;
    text-align: center;
    font-size: 20px;
    font-family: 'Space Grotesk', sans-serif;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
const PlayerPoint = styled.p`
    color:  #000;
    text-align: center;
    font-size: 56px;
    font-family: 'Space Grotesk', sans-serif;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
const GameContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 50px;
    z-index: 1;
`;
const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 52px;
    width: 100%;
`;
const Logo = styled.img`
    width: 52px;
    height: 52px;
`;
const NavOption = styled.p`
    color:  #FFF;
    font-size: 16px;
    font-family: 'Space Grotesk', sans-serif;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding:10px 20px ;
    border-radius: 20px;
    background: #5C2DD5;
    cursor: pointer;
`;
const Game = styled.div`
    position: relative;
    width: 100%;
`;
const Mark = styled.img`
    position: absolute;
    top: -30px;
    left: ${props=>props.pos};
    width: 32px;
    height: 26px;
`;
const GameTable = styled.div`
    display: grid;
    grid-template-columns: repeat(7,64px);
    grid-template-rows: repeat(6,64px);
    gap: 24px;
    padding: 20px 20px 60px 20px;
    border-radius: 40px;
    border: 3px solid #000;
    background: #FFF;
    box-shadow: 0px 10px 0px 0px #000;
    pointer-events: ${props=>props.gameFinished&&"none"};
`;
const Gap = styled.div`
    width: 64px;
    height: 64px;
    border-radius: 64px;
    background: ${props=>props.used};
    border: 2px solid black;
    box-shadow: inset 0px 10px 0px 0px rgba(0,0,0,1);
`;
const TurnMarker = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    top: 90%;
    width: 220px;
    height: 185px;
    background-image: url(${props=>props.turn==="your"?"../../images/turn-background-red.svg":"../../images/turn-background-yellow.svg"});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
`;

const Turn = styled.p`
    color: #000;
    text-align: center;

    font-size: 16px;
    font-family: 'Space Grotesk', sans-serif;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform:uppercase;
`;
const Timer = styled.p`
    color: #000;
    text-align: center;

    font-size: 56px;
    font-family: 'Space Grotesk', sans-serif;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
const WinnerContainer = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    top: 90%;
    width: 220px;
    height: 185px;
    border-radius: 20px;
    border: 3px solid #000;
    background: #FFF;
    box-shadow: 0px 10px 0px 0px #000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
`;
const Win = styled.p`
    color: #000;
    text-align: center;

    font-size: 56px;
    font-family: 'Space Grotesk', sans-serif;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;
export {MainContainer,Footer,Game,GameContainer,GameTable,Gap,Mark,Nav,NavLink,NavOption,PlayerContainer,PlayerLogo,PlayerName,PlayerPoint,Timer,Turn,TurnMarker,Logo,Win,WinnerContainer};