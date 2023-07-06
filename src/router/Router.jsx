import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import CpuGame from "../pages/cpuGame/CpuGame";
import PlayerGame from "../pages/playerGame/PlayerGame";
import Rules from "../pages/rules/Rules";
const Router = () => {
	return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cpu" element={<CpuGame />} />
            <Route path="/players" element={<PlayerGame />} />
            <Route path="/rules" element={<Rules />} />
        </Routes>
	);
};

export default Router;