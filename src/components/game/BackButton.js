
import { useNavigate } from "react-router-dom"
import Button from "./Button"
import { theme } from "../../Theme"

const BackButton = () => {

    const backgroundColor = theme.colors.background

    const navigate = useNavigate()

  return (
    <Button onClick={() => navigate(-1)} stretch={true} color={theme.colorPalette.grey[5]} backgroundColor={backgroundColor}>Back</Button>
  )
}

export default BackButton