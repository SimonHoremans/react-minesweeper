import { StyledSmileyFace } from "./styles/SmileyFace.styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons'
import { faFaceSadTear } from '@fortawesome/free-solid-svg-icons'
import { GameContext } from "./Game"
import { useContext } from "react"

const SmileyFace = ({mood}) => {

  const {setShowPauseMenu} = useContext(GameContext)

  return (
    <StyledSmileyFace onClick={() => setShowPauseMenu(true)}>
        {(() => {
          switch(mood) {
            case 'happy':
              return <FontAwesomeIcon icon={faFaceSmile} />
            case 'sad':
              return <FontAwesomeIcon icon={faFaceSadTear} />
            case 'UwU':
              return <p>UwU</p>
          }
        })()} 
    </StyledSmileyFace>
  )
}

export default SmileyFace