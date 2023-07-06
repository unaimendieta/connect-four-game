import { Container, Desc, MainContainer, Num, OkayButton, RulesContainer, SecodaryTitle, Title } from "./styles";

const Rules = () => {
	return (
        <MainContainer>
            <RulesContainer>
                <Title>RULES</Title>
                <Container>
                    <SecodaryTitle>OBJECTIVE</SecodaryTitle>
                    <Desc>Be the first player to connect 4 of the same colored discs in a row (either vertically, horizontally, or diagonally).</Desc>
                </Container>
                <Container>
                    <SecodaryTitle>HOW TO PLAY</SecodaryTitle>
                    <Desc><Num>1</Num> Red goes first in the first game.</Desc>
                    <Desc><Num>2</Num> Players must alternate turns, and only one disc can be dropped in each turn. </Desc>
                    <Desc><Num>3</Num> The game ends when there is a 4-in-a-row or a stalemate.</Desc>
                    <Desc><Num>4</Num> The starter of the previous game goes second on the next game.</Desc>
                </Container>
                <OkayButton to="/"></OkayButton>
            </RulesContainer>
        </MainContainer>
	);
};

export default Rules;