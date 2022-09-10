import Button from "./Button"
import { StyledDialogMenu } from "./styles/DialogMenu.styled"
import { theme } from "../../Theme"

const DialogMenu = ({className, children, buttons, onXMark}) => {
  return (
    <StyledDialogMenu onXMark={onXMark} className={className}>
        <p>{children}</p>
        <div className="buttons-bottom">
          {buttons.map(({name, callback, color=theme.colorPalette.blue}, index) => {
            return <div key={index}><Button onClick={() => callback()} color={color}>{name}</Button></div>
          })}
        </div>
    </StyledDialogMenu>
  )
}

export default DialogMenu