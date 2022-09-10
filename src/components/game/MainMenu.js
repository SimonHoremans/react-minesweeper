import { theme } from "../../Theme"
import { StyledMainMenu } from "./styles/MainMenu.styled"
import Button from "./Button"
import { Route, Routes, useNavigate } from "react-router-dom"
import StartMenu from "./StartMenu"
import GameModeMenu from "./GameModeMenu"
import CustomGameMode from "./CustomGameMode"

const MainMenu = () => {

    const navigate = useNavigate()

  return (
    <StyledMainMenu>
        <h1 onClick={() => navigate('/')}>Minnswipr</h1>
        <Routes>
            <Route index element={<StartMenu/>}/>
            <Route path='gameMode' element={<GameModeMenu/>}/>
            <Route path='customGameMode' element={<CustomGameMode/>}/>
        </Routes>
    </StyledMainMenu>
  )
}

export default MainMenu