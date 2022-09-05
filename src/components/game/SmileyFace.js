import { StyledSmileyFace } from "./styles/SmileyFace.styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons'
import { faFaceSadTear } from '@fortawesome/free-solid-svg-icons'

const SmileyFace = ({mood}) => {
  return (
    <StyledSmileyFace>
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