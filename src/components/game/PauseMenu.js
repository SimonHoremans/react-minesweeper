import Menu from "./Menu"
import { theme } from "../../Theme"
import { StyledPauseMenu } from "./styles/PauseMenu.styled"
import Button from "./Button"

const PauseMenu = ({onXMark}) => {
  return (
    <StyledPauseMenu onXMark={onXMark}>
            <div><Button stretch={true} color={theme.colorPalette.green}>Resume</Button></div>
            <div><Button stretch={true} color={theme.colorPalette.yellow[0]}>Retry</Button></div>
            <div><Button stretch={true} color={theme.colorPalette.yellow[0]}>Menu</Button></div>
            <div><Button stretch={true} color={theme.colorPalette.red[0]}>Stop</Button></div>
    </StyledPauseMenu>
  )
}

export default PauseMenu