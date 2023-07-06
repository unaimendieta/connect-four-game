import {  useState } from "react";
import { Footer, Game, GameContainer, GameTable, Gap, Logo, MainContainer,  Nav, NavOption, PlayerContainer, PlayerLogo, PlayerName, PlayerPoint, Timer, Turn, TurnMarker, Win, WinnerContainer } from "./styles";

const PlayerGame = () => {
    
    const [game,setGame] = useState({
        table:[['','','','','','',''],
               ['','','','','','',''],
               ['','','','','','',''],
               ['','','','','','',''],
               ['','','','','','',''],
               ['','','','','','','']],
        player1Points:0,
        player2Points:0,
        turn:"player1",
        // turnCont:0,
        winner:""
    }); 
	return (
        <>
            <MainContainer>
                <PlayerContainer>
                    <PlayerLogo  src="../../images/player-one.svg"/>
                    <PlayerName>PLAYER 1</PlayerName>
                    <PlayerPoint>{game.player1Points}</PlayerPoint>
                </PlayerContainer>
                <GameContainer>
                    <Nav>
                        <NavOption >MENU</NavOption>
                        <Logo src="../../images/logo.svg"/>
                        <NavOption onClick={()=>resetGame(game,setGame)}>RESTART</NavOption>
                    </Nav>
                    <Game>
                        <GameTable gameFinished={game.winner!==""}>
                            {/* Fila0 */}
                            <Gap id="0_0" used={game.table[0][0] ===''?"#7945FF":(game.table[0][0] ==='red'?"#FD6687":"#FFCE67")} onClick={e=>handleClick(e.target, game,setGame)}></Gap>
                            <Gap id="0_1" used={game.table[0][1] ===''?"#7945FF":(game.table[0][0] ==='red'?"#FD6687":"#FFCE67")} onClick={e=>handleClick(e.target, game,setGame)}></Gap>
                            <Gap id="0_2" used={game.table[0][2] ===''?"#7945FF":(game.table[0][0] ==='red'?"#FD6687":"#FFCE67")} onClick={e=>handleClick(e.target, game,setGame)}></Gap>
                            <Gap id="0_3" used={game.table[0][3] ===''?"#7945FF":(game.table[0][0] ==='red'?"#FD6687":"#FFCE67")} onClick={e=>handleClick(e.target, game,setGame)}></Gap>
                            <Gap id="0_4" used={game.table[0][4] ===''?"#7945FF":(game.table[0][0] ==='red'?"#FD6687":"#FFCE67")} onClick={e=>handleClick(e.target, game,setGame)}></Gap>
                            <Gap id="0_5" used={game.table[0][5] ===''?"#7945FF":(game.table[0][0] ==='red'?"#FD6687":"#FFCE67")} onClick={e=>handleClick(e.target, game,setGame)}></Gap>
                            <Gap id="0_6" used={game.table[0][6] ===''?"#7945FF":(game.table[0][0] ==='red'?"#FD6687":"#FFCE67")} onClick={e=>handleClick(e.target, game,setGame)}></Gap>
                            {/* Fila1 */}
                            <Gap id="1_0" used={game.table[1][0] ===''?"#7945FF":(game.table[1][0] ==='red'?"#FD6687":"#FFCE67")} onClick={e=>handleClick(e.target, game,setGame)}></Gap>
                            <Gap id="1_1" used={game.table[1][1] ===''?"#7945FF":(game.table[1][1] ==='red'?"#FD6687":"#FFCE67")} onClick={e=>handleClick(e.target, game,setGame)}></Gap>
                            <Gap id="1_2" used={game.table[1][2] ===''?"#7945FF":(game.table[1][2] ==='red'?"#FD6687":"#FFCE67")} onClick={e=>handleClick(e.target, game,setGame)}></Gap>
                            <Gap id="1_3" used={game.table[1][3] ===''?"#7945FF":(game.table[1][3] ==='red'?"#FD6687":"#FFCE67")} onClick={e=>handleClick(e.target, game,setGame)}></Gap>
                            <Gap id="1_4" used={game.table[1][4] ===''?"#7945FF":(game.table[1][4] ==='red'?"#FD6687":"#FFCE67")} onClick={e=>handleClick(e.target, game,setGame)}></Gap>
                            <Gap id="1_5" used={game.table[1][5] ===''?"#7945FF":(game.table[1][5] ==='red'?"#FD6687":"#FFCE67")} onClick={e=>handleClick(e.target, game,setGame)}></Gap>
                            <Gap id="1_6" used={game.table[1][6] ===''?"#7945FF":(game.table[1][6] ==='red'?"#FD6687":"#FFCE67")} onClick={e=>handleClick(e.target, game,setGame)}></Gap>
                            {/* Fila2 */}
                            <Gap id="2_0" used={game.table[2][0] ===''?"#7945FF":(game.table[2][0] ==='red'?"#FD6687":"#FFCE67")} onClick={e=>handleClick(e.target, game,setGame)}></Gap>
                            <Gap id="2_1" used={game.table[2][1] ===''?"#7945FF":(game.table[2][1] ==='red'?"#FD6687":"#FFCE67")} onClick={e=>handleClick(e.target, game,setGame)}></Gap>
                            <Gap id="2_2" used={game.table[2][2] ===''?"#7945FF":(game.table[2][2] ==='red'?"#FD6687":"#FFCE67")} onClick={e=>handleClick(e.target, game,setGame)}></Gap>
                            <Gap id="2_3" used={game.table[2][3] ===''?"#7945FF":(game.table[2][3] ==='red'?"#FD6687":"#FFCE67")} onClick={e=>handleClick(e.target, game,setGame)}></Gap>
                            <Gap id="2_4" used={game.table[2][4] ===''?"#7945FF":(game.table[2][4] ==='red'?"#FD6687":"#FFCE67")} onClick={e=>handleClick(e.target, game,setGame)}></Gap>
                            <Gap id="2_5" used={game.table[2][5] ===''?"#7945FF":(game.table[2][5] ==='red'?"#FD6687":"#FFCE67")} onClick={e=>handleClick(e.target, game,setGame)}></Gap>
                            <Gap id="2_6" used={game.table[2][6] ===''?"#7945FF":(game.table[2][6] ==='red'?"#FD6687":"#FFCE67")} onClick={e=>handleClick(e.target, game,setGame)}></Gap>
                            {/* Fila3 */}
                            <Gap id="3_0" used={game.table[3][0] ===''?"#7945FF":(game.table[3][0] ==='red'?"#FD6687":"#FFCE67")} onClick={e=>handleClick(e.target, game,setGame)}></Gap>
                            <Gap id="3_1" used={game.table[3][1] ===''?"#7945FF":(game.table[3][1] ==='red'?"#FD6687":"#FFCE67")} onClick={e=>handleClick(e.target, game,setGame)}></Gap>
                            <Gap id="3_2" used={game.table[3][2] ===''?"#7945FF":(game.table[3][2] ==='red'?"#FD6687":"#FFCE67")} onClick={e=>handleClick(e.target, game,setGame)}></Gap>
                            <Gap id="3_3" used={game.table[3][3] ===''?"#7945FF":(game.table[3][3] ==='red'?"#FD6687":"#FFCE67")} onClick={e=>handleClick(e.target, game,setGame)}></Gap>
                            <Gap id="3_4" used={game.table[3][4] ===''?"#7945FF":(game.table[3][4] ==='red'?"#FD6687":"#FFCE67")} onClick={e=>handleClick(e.target, game,setGame)}></Gap>
                            <Gap id="3_5" used={game.table[3][5] ===''?"#7945FF":(game.table[3][5] ==='red'?"#FD6687":"#FFCE67")} onClick={e=>handleClick(e.target, game,setGame)}></Gap>
                            <Gap id="3_6" used={game.table[3][6] ===''?"#7945FF":(game.table[3][6] ==='red'?"#FD6687":"#FFCE67")} onClick={e=>handleClick(e.target, game,setGame)}></Gap>
                            {/* Fila4 */}
                            <Gap id="4_0" used={game.table[4][0] ===''?"#7945FF":(game.table[4][0] ==='red'?"#FD6687":"#FFCE67")} onClick={e=>handleClick(e.target, game,setGame)}></Gap>
                            <Gap id="4_1" used={game.table[4][1] ===''?"#7945FF":(game.table[4][1] ==='red'?"#FD6687":"#FFCE67")} onClick={e=>handleClick(e.target, game,setGame)}></Gap>
                            <Gap id="4_2" used={game.table[4][2] ===''?"#7945FF":(game.table[4][2] ==='red'?"#FD6687":"#FFCE67")} onClick={e=>handleClick(e.target, game,setGame)}></Gap>
                            <Gap id="4_3" used={game.table[4][3] ===''?"#7945FF":(game.table[4][3] ==='red'?"#FD6687":"#FFCE67")} onClick={e=>handleClick(e.target, game,setGame)}></Gap>
                            <Gap id="4_4" used={game.table[4][4] ===''?"#7945FF":(game.table[4][4] ==='red'?"#FD6687":"#FFCE67")} onClick={e=>handleClick(e.target, game,setGame)}></Gap>
                            <Gap id="4_5" used={game.table[4][5] ===''?"#7945FF":(game.table[4][5] ==='red'?"#FD6687":"#FFCE67")} onClick={e=>handleClick(e.target, game,setGame)}></Gap>
                            <Gap id="4_6" used={game.table[4][6] ===''?"#7945FF":(game.table[4][6] ==='red'?"#FD6687":"#FFCE67")} onClick={e=>handleClick(e.target, game,setGame)}></Gap>
                            {/* Fila5 */}
                            <Gap id="5_0" used={game.table[5][0] ===''?"#7945FF":(game.table[5][0] ==='red'?"#FD6687":"#FFCE67")} onClick={e=>handleClick(e.target, game,setGame)}></Gap>
                            <Gap id="5_1" used={game.table[5][1] ===''?"#7945FF":(game.table[5][1] ==='red'?"#FD6687":"#FFCE67")} onClick={e=>handleClick(e.target, game,setGame)}></Gap>
                            <Gap id="5_2" used={game.table[5][2] ===''?"#7945FF":(game.table[5][2] ==='red'?"#FD6687":"#FFCE67")} onClick={e=>handleClick(e.target, game,setGame)}></Gap>
                            <Gap id="5_3" used={game.table[5][3] ===''?"#7945FF":(game.table[5][3] ==='red'?"#FD6687":"#FFCE67")} onClick={e=>handleClick(e.target, game,setGame)}></Gap>
                            <Gap id="5_4" used={game.table[5][4] ===''?"#7945FF":(game.table[5][4] ==='red'?"#FD6687":"#FFCE67")} onClick={e=>handleClick(e.target, game,setGame)}></Gap>
                            <Gap id="5_5" used={game.table[5][5] ===''?"#7945FF":(game.table[5][5] ==='red'?"#FD6687":"#FFCE67")} onClick={e=>handleClick(e.target, game,setGame)}></Gap>
                            <Gap id="5_6" used={game.table[5][6] ===''?"#7945FF":(game.table[5][6] ==='red'?"#FD6687":"#FFCE67")} onClick={e=>handleClick(e.target, game,setGame)}></Gap>
                        </GameTable>
                        {game.winner===""?
                            <TurnMarker turn={game.turn}>
                                <Turn>{game.turn}&apos;s turn</Turn>
                                <Timer>20s</Timer>
                            </TurnMarker>
                        :   
                            <WinnerContainer>
                                <Turn>{game.winner}</Turn>
                                <Win>WINS</Win>
                                <NavOption  onClick={()=>resetGame(game,setGame)}>PLAY AGAIN</NavOption>
                            </WinnerContainer>
                        }
                    </Game>
                </GameContainer>
                <PlayerContainer>
                    <PlayerLogo src="../../images/player-two.svg"/>
                    <PlayerName>PLAYER 2</PlayerName>
                    <PlayerPoint>{game.player2Points}</PlayerPoint>
                </PlayerContainer>
                <Footer winner={game.winner!==""?(game.winner==="player1"?"#FD6687":"#FFCE67"):"#5C2DD5"}></Footer>
            </MainContainer>
        </>
	);
};

const handleClick = (param, game,setGame)=>{
    // const row = param.id.split("_")[0];
    const column = param.id.split("_")[1];
    const table = [...game.table];
    let turn = game.turn;
    const color =(game.turn==="player1")?"red":"yellow";
    let turnCont = game.turnCont;
    let winner = game.winner;
    let player1Points   = game.player1Points;
    let player2Points = game.player2Points;
    let pos;
    for (let index = 5; index > -1; index--) { 
        if (table[index][column]==='') {
            pos = [index,column];
            break;
        }
        
    }
    if (pos!==undefined) {
        table[pos[0]][pos[1]]=color;
        turnCont++;
        winner= checkWinner(table,turn,color);
        if (turn==="player1") {
           turn="player2" ;
        }else{
            turn="player1" ;
        }
        if (winner!=="" ) {
            if (winner==="player1") {
                player1Points++;
            }else{
                player2Points++;
            }
        }
    }
    setGame({...game,
        table,
        turn,
        turnCont,
        winner,
        player1Points,
        player2Points
    })
}
const checkWinner = (table,turn, color)=>{
    let winner="";
    winner=checkRow(table,turn, color);
    if(winner===""){
        winner=checkColumn(table, turn, color);
        if(winner===""){
        winner=checkDiagonalUp(table, turn, color);
            if(winner===""){
            winner=checkDiagonalDown(table, turn, color);
            }
        }
       
    }
    return winner;
}
const checkRow = (table,turn, color)=>{
    let winner="";
    let cont=0;
    for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 7; col++) {
            if(table[row][col]===color){
                cont++;
                if (cont===4) {
                    winner=turn;
                    break;
                }
            }else{
                cont=0;
            }
           
        }
        cont=0;
        
    }
    return winner;
}
const checkColumn = (table,turn, color)=>{
    let winner="";
    let cont=0;
    for (let col = 0; col < 7; col++) {
        for (let row = 5; row > -1; row--) {
            if(table[row][col]===color){
                cont++;
                if (cont===4) {
                    winner=turn;
                    break;
                }
            }else{
                cont=0;
            }
           
        }
        cont=0;
        
    }
    return winner;
}
const checkDiagonalUp = (table,turn, color)=>{
    let winner="";
    let cont=0;
    for (let row = 3; row < 6; row++) {
        for (let col = 0; col < row+1; col++) {
            // console.log(row-col,col);
            if(table[row-col][col]===color){
                cont++;
                if (cont===4) {
                    winner=turn;
                    break;
                }
            }else{
                cont=0;
            }
           
        }
        cont=0;
        
    }
    if (winner==="") {
        cont=0;
        // console.log("_________________________")
        for (let index = 1; index < 4; index++) {
            for (let col = index; col < 7; col++) {
                // console.log((5+index)-col,col);
                
                if(table[(5+index)-col][col]===color){
                    cont++;
                    if (cont===4) {
                        winner=turn;
                        break;
                    }
                }else{
                    cont=0;
                }
            
            }
            cont=0;
            // console.log("_________________________")
        }
    }
       

    return winner;
}
const checkDiagonalDown = (table,turn, color)=>{
    let winner="";
    let cont=0;
    for (let row = 3; row > -1; row--) {
        for (let col = 0; col <= 5-row; col++) {
            // console.log(row+col,col,table[row+col][col]);
            if(table[row+col][col]===color){
                cont++;
                if (cont===4) {
                    winner=turn;
                    break;
                }
            }else{
                cont=0;
            }
           
        }
        cont=0;
        // console.log("_________________________")
        
    }
    if (winner==="") {
        cont=0;
        // console.log("___________aaaaaa______________")
        for (let index = 1; index < 4; index++) {
            for (let col = index; col < 7; col++) {
                // console.log((index-col)*(-1),col,table[(index-col)*(-1)][col]);
                
                if(table[(index-col)*(-1)][col]===color){ 
                    cont++;
                    if (cont===4) {
                        winner=turn;
                        break;
                    }
                }else{
                    cont=0;
                }
            
            }
            cont=0;
            // console.log("_________________________")
        }
    }
       

    return winner;
}
const resetGame = ( game,setGame)=>{
    setGame({...game,
        table:[['','','','','','',''],
               ['','','','','','',''],
               ['','','','','','',''],
               ['','','','','','',''],
               ['','','','','','',''],
               ['','','','','','','']],
        turn:"player1",
        turnCont:0,
        winner:""
    })
}
export default PlayerGame;