import Menu from "./Menu"
import { theme } from "../../Theme"
import { StyledPauseMenu } from "./styles/PauseMenu.styled"
import Button from "./Button"
import DialogMenu from "./DialogMenu"
import { FaYenSign } from "react-icons/fa"
import { useState } from "react"

const PauseMenu = ({onXMark, onResume, onRetry, onMenu, onStop}) => {

  const [confirm, setConfirm] = useState(null)

  const messages = {
    retry: 'Are you sure you want to retry?',
    stop: 'Are you sure you want to go to the main menu?'
  }

  const onConfirm = (name, callback) => {
    setConfirm({callback: callback, message: messages[name]})
  }

  return (
    <>
    {
      confirm === null ? 
      <StyledPauseMenu onXMark={onXMark}>
            <div><Button onClick={onResume} stretch={true} color={theme.colorPalette.green}>Resume</Button></div>
            <div><Button onClick={() => onConfirm('retry', onRetry)} stretch={true} color={theme.colorPalette.yellow[0]}>Retry</Button></div>
            {/* <div><Button onClick={() => onConfirm('menu', onMenu)} stretch={true} color={theme.colorPalette.blue}>Menu</Button></div> */}
            <div><Button onClick={() => onConfirm('stop', onStop)} stretch={true} color={theme.colorPalette.red[0]}>Stop</Button></div>
      </StyledPauseMenu>:
      <DialogMenu buttons={[
        {
          name: 'yes',
          color: theme.colorPalette.green,
          callback: confirm.callback
        },
        {
          name: 'no',
          color: theme.colorPalette.red[0],
          callback: () => setConfirm(null)
        }
      ]}>
        <p>{confirm.message}</p>
      </DialogMenu>
    }
    
    </>
  )
}

export default PauseMenu