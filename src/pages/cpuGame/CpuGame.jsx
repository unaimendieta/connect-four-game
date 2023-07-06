import {  useState } from "react";
import { Footer, Game, GameContainer, GameTable, Gap, Logo, MainContainer,  Nav, NavOption, PlayerContainer, PlayerLogo, PlayerName, PlayerPoint, Timer, Turn, TurnMarker, Win, WinnerContainer } from "./styles";

const CpuGame = () => {
    
    const [game,setGame] = useState({
        table:[['','','','','','',''],
               ['','','','','','',''],
               ['','','','','','',''],
               ['','','','','','',''],
               ['','','','','','',''],
               ['','','','','','','']],
        playerPoints:0,
        cpuPoints:0,
        turn:"your",
        // turnCont:0,
        winner:""
    }); 
	return (
        <>
            <MainContainer>
                <PlayerContainer>
                    <PlayerLogo  src="../../images/you.svg"/>
                    <PlayerName>YOU</PlayerName>
                    <PlayerPoint>{game.playerPoints}</PlayerPoint>
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
                                <Turn>{game.winner==="your"?"you":"cpu"}</Turn>
                                <Win>WINS</Win>
                                <NavOption  onClick={()=>resetGame(game,setGame)}>PLAY AGAIN</NavOption>
                            </WinnerContainer>
                        }
                    </Game>
                </GameContainer>
                <PlayerContainer>
                    <PlayerLogo src="../../images/cpu.svg"/>
                    <PlayerName>CPU</PlayerName>
                    <PlayerPoint>{game.cpuPoints}</PlayerPoint>
                </PlayerContainer>
                <Footer winner={game.winner!==""?(game.winner==="your"?"#FD6687":"#FFCE67"):"#5C2DD5"}></Footer>
            </MainContainer>
        </>
	);
};

const handleClick = (param, game,setGame)=>{
    const column = param.id.split("_")[1];
    const table = [...game.table];
    let turn = game.turn;
    const color ="red";
    let turnCont = game.turnCont;
    let winner = game.winner;
    let playerPoints   = game.playerPoints;
    let cpuPoints = game.cpuPoints;
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
        if (turn==="your") {
           turn="cpu" ;
        }else{
            turn="your" ;
        }
        if (winner!=="" ) {
            if (winner==="your") {
                playerPoints++;
            }else{
                cpuPoints++;
            }
        }
    }
    setGame({...game,
        table,
        turn,
        turnCont,
        winner,
        playerPoints,
        cpuPoints
    })
    if (winner==="") {
        const cpuTimer = setTimeout(() =>playCpu(cpuTimer,game, setGame), 1000);
    }
}

const playCpu = (cpuTimer,game, setGame)=>{
    clearTimeout(cpuTimer);
    const table = [...game.table];
    let turn = game.turn;
    let turnCont = game.turnCont;
    let winner = game.winner;
    let playerPoints   = game.playerPoints;
    let cpuPoints = game.cpuPoints;
    const pos=getBetterOption(table);
    table[pos[0]][pos[1]]="yellow";
    turnCont++;
    winner= checkWinner(table,"cpu","yellow");
                turn="your" ;
        
        if (winner!=="" ) {
                if (winner==="your") {
                playerPoints++;
                }else{
                cpuPoints++;
                }
        }
    setGame({...game,
        table,
        turn,
        turnCont,
        winner,
        playerPoints,
        cpuPoints
    })
}
const getBetterOption= (table)=>{
      const points = [[0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0],
                    [0,0,0,0,0,0,0]];  
      const pos = [];
      const posiblePos = [];
      let finalPos = [];
      for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 7; col++) {
            if(table[row][col]!==""){
                points[row][col]=-1;
                pos.push([row,col]);
            }
           
        }
        
      }
      

      for (let index = 0; index < pos.length; index++) {
        if (pos[index][0]>0) {
                if(table[pos[index][0]-1][pos[index][1]]==='')points[pos[index][0]-1][pos[index][1]]=1;// arriba
        }
        // if (pos[index][0]<5) {
        //         if(table[pos[index][0]+1][pos[index][1]]==='')points[pos[index][0]+1][pos[index][1]]=1;// abajo
        // }
        // if (pos[index][1]>0&&((pos[index][0]<5&&(pos[index][0]-1===0||pos[index][0]-1===-1))||pos[index][0]===5)) {
        //         if(table[pos[index][0]][pos[index][1]-1]==='')points[pos[index][0]][pos[index][1]-1]=1;// izq
        // }
        // if (pos[index][1]<6&&((pos[index][0]<5&&(pos[index][0]-1===0||pos[index][0]-1===-1))||pos[index][0]===5)) {
        //         if(table[pos[index][0]][pos[index][1]+1]==='')points[pos[index][0]][pos[index][1]+1]=1;// der
        // }
        
      }
      
      for (let row = 0; row < 6; row++) {
        for (let col = 0; col < 7; col++) {
            if(points[row][col]===1){
                posiblePos.push([row,col]);
            }
           
        }
      }
      for (let index = 0; index < 7; index++) {
        if (points[5][index]===0){
            posiblePos.push([5,index]);
        
                
        }
        
      }

      const colors =["red","yellow"];
      const turn =["your","cpu"];
      let winner;
      const tmpTable=[...table];
      const winnerPos=[];
      const winnerPerPos=[];
      for (let index = 0; index < posiblePos.length; index++) {
        for (let index2 = 0; index2 < colors.length; index2++) {
                
                tmpTable[posiblePos[index][0]][posiblePos[index][1]]=colors[index2];
                winner=checkRow(tmpTable,turn[index2], colors[index2]);
                if (winner!==""){
                        winnerPos.push([posiblePos[index][0],posiblePos[index][1]]);
                        winnerPerPos.push(winner);
                        break;
                } 
                winner=checkColumn(tmpTable,turn[index2], colors[index2]);
                if (winner!==""){
                        winnerPos.push([posiblePos[index][0],posiblePos[index][1]]);
                        winnerPerPos.push(winner);
                        break;
                } 
                winner=checkDiagonalUp(tmpTable,turn[index2], colors[index2]);
                if (winner!==""){
                        winnerPos.push([posiblePos[index][0],posiblePos[index][1]]);
                        winnerPerPos.push(winner);
                        break;
                } 
                winner=checkDiagonalDown(tmpTable,turn[index2], colors[index2]);
                if (winner!==""){
                        winnerPos.push([posiblePos[index][0],posiblePos[index][1]]);
                        winnerPerPos.push(winner);
                        break;
                } 
        }
        tmpTable[posiblePos[index][0]][posiblePos[index][1]]="";  
      }


//       for (let index = points.length-1; index > -1; index--) {
//         console.log(points[index]);

//       }
      if (!winnerPerPos.includes( "your")&&!winnerPerPos.includes( "cpu")) {
        finalPos=posiblePos[Math.floor(Math.random() * posiblePos.length)];
      }else if(winnerPerPos.includes( "cpu")){
        for (let index = 0; index < winnerPerPos.length; index++) {
                if (winnerPerPos[index]==="cpu") {
                        finalPos=winnerPos[index];
                        break;
                }
        }
           
      }else if(winnerPerPos.includes( "your")){
        for (let index = 0; index < winnerPerPos.length; index++) {
                if (winnerPerPos[index]==="your") {
                        finalPos=winnerPos[index];
                        break;
                }
                
        }
           
      }
      console.log(finalPos);
      console.log(winnerPerPos);
      console.log(winnerPos);
      console.log(posiblePos);
      return finalPos;
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
        turn:"your",
        turnCont:0,
        winner:""
    })
}
export default CpuGame;