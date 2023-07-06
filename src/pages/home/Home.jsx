import { Logo, MainContainer, Menu, MenuButton, OptionIcon, OptionText } from "./styles";

const Home = () => {
	return (
        <MainContainer>
            <Menu>
                <Logo src="../../images/logo.svg"/>
                <MenuButton to="/players"> 
                    <OptionText>PLAYER VS PLAYER</OptionText>
                    <OptionIcon src="../../images/player-vs-player.svg"/>
                </MenuButton>
                <MenuButton to="/cpu">
                    <OptionText>PLAYER VS CPU</OptionText>
                    <OptionIcon  src="../../images/player-vs-cpu.svg"/>
                </MenuButton>
                <MenuButton to="/rules">
                    <OptionText>GAME RULES</OptionText>
                </MenuButton>
            </Menu>
        </MainContainer>
	);
};

export default Home;