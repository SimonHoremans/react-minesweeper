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
    const onBeginner = () => {
      navigate('/minefield', {state: {width:8, height: 10, numberOfMines: 7}})
    }

    const onEasy = () => {
      navigate('/minefield', {state: {width:9, height: 14, numberOfMines: 15}})
    }

    const onIntermediate = () => {
      navigate('/minefield', {state: {width:15, height: 20, numberOfMines: 40}})
    }

    const onExpert = () => {
      navigate('/minefield', {state: {width:19, height: 26, numberOfMines: 99}})
    }

  return (
    <StyledSubMenu>
        <div className='main-content'>
            <div><Button onClick={onBeginner} stretch={true} color={theme.colorPalette.purple} backgroundColor={backgroundColor}>Beginner</Button></div>
            <div><Button onClick={onEasy} stretch={true} color={theme.colorPalette.green} backgroundColor={backgroundColor}>Easy</Button></div>
            <div><Button onClick={onIntermediate} stretch={true} color={theme.colorPalette.yellow[0]} backgroundColor={backgroundColor}>Intermediate</Button></div>
            <div><Button onClick={onExpert} stretch={true} color={theme.colorPalette.red[0]} backgroundColor={backgroundColor}>Expert</Button></div>
            <div><Button onClick={onCustom} stretch={true} color={theme.colorPalette.blue} backgroundColor={backgroundColor}>Custom</Button></div>
        </div>
        <div className='footer-buttons'>
            <BackButton/>
        </div>
    </StyledSubMenu>
  )
}

export default GameModeMenu