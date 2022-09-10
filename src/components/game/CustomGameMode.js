import { theme } from "../../Theme"
import Button from "./Button"
import { StyledForm } from "./styles/Form.styled"
import { StyledSubMenu } from "./styles/SubMenu.styled"
import BackButton from "./BackButton"
import { useNavigate } from "react-router-dom"

const CustomGameMode = () => {

    const navigate = useNavigate()

    const backgroundColor = theme.colors.background
    const onSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)

        const data = []

        formData.forEach((value, key) => data[key] = value)

        navigate('/minefield', {state: data})
    }

  return (
    <StyledSubMenu>
        <div className='main-content'>
            <StyledForm onSubmit={onSubmit}>
                <div className='container'>
                    <div className="form-body">
                        <div className="input-group">
                            <label htmlFor='width'>Width: </label>
                            <input type='number' id='width' name='width'/>
                        </div>
                        <div className="input-group">
                            <label htmlFor='height'>Height: </label>
                            <input type='number' id='height' name='height'/>
                        </div>
                        <div className="input-group">
                            <label htmlFor='numberOfMines'>Number of mines: </label>
                            <input type='number' id='numberOfMines' name='numberOfMines'/>
                        </div>
                    </div>
                    <div className='form-footer'>
                        <Button backgroundColor={backgroundColor}>Play</Button>
                    </div>
                </div>
            </StyledForm>
        </div>
        <div className='footer-buttons'>
            <BackButton/>
        </div>
    </StyledSubMenu>
    
  )
}

export default CustomGameMode