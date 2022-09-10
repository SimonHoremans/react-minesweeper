import { StyledSubMenu } from "./styles/SubMenu.styled"
import Button from "./Button"
import { theme } from "../../Theme"
import { useNavigate } from "react-router-dom"
import BackButton from "./BackButton"

const GameModeMenu = () => {
    const navigate = useNavigate()
    const backgroundColor = theme.colors.background
    const onCustom = () => {
      navigate('/mainMenu/customGameMode')
    }
    const onStandard = () => {
      navigate('/minefield', {state: {width: 20, height: 20, numberOfMines: 40}})
    }

  return (
    <StyledSubMenu>
        <div className='main-content'>
            <div><Button onClick={onStandard} stretch={true} color={theme.colorPalette.green} backgroundColor={backgroundColor}>Standard</Button></div>
            <div><Button onClick={onCustom} stretch={true} color={theme.colorPalette.blue} backgroundColor={backgroundColor}>Custom</Button></div>
        </div>
        <div className='footer-buttons'>
            <BackButton/>
        </div>
    </StyledSubMenu>
  )
}

export default GameModeMenu