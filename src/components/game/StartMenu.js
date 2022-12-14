import { StyledSubMenu } from "./styles/SubMenu.styled"
import Button from "./Button"
import { theme } from "../../Theme"
import { useNavigate } from "react-router-dom"

const StartMenu = () => {

    const backgroundColor = theme.colors.background
    const navigate = useNavigate()

    const onNewGame = () => {
        navigate('gameMode')
    }

  return (
    <StyledSubMenu>
        <div className="main-content">
            <div>
                <Button onClick={onNewGame} stretch={true} color={theme.colorPalette.green} backgroundColor={backgroundColor}>New Game</Button>
            </div>
        </div>
    </StyledSubMenu>
  )
}

export default StartMenu