import { StyledSmileyFace } from "./styles/SmileyFace.styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons'
import { faFaceSadTear } from '@fortawesome/free-solid-svg-icons'
import { GameContext } from "./Game"
import { useContext } from "react"

const SmileyFace = ({mood}) => {

  const {dispatch} = useContext(GameContext)

  return (
    <StyledSmileyFace onClick={() => dispatch({type: 'OPEN_PAUSE_MENU'})}>
        {(() => {
          switch(mood) {
            case 'happy':
              return <FontAwesomeIcon icon={faFaceSmile} />
            case 'sad':
              return <FontAwesomeIcon icon={faFaceSadTear} />
          }
        })()} 
    </StyledSmileyFace>
  )
}

export default SmileyFace