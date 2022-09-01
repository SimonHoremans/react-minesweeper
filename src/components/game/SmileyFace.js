import { StyledSmileyFace } from "./styles/SmileyFace.styled"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons'
import { faFaceSadTear } from '@fortawesome/free-solid-svg-icons'

const SmileyFace = ({happy}) => {
  return (
    <StyledSmileyFace>
        {happy ? 
        <FontAwesomeIcon icon={faFaceSmile} />:
        <FontAwesomeIcon icon={faFaceSadTear} />}
        
    </StyledSmileyFace>
  )
}

export default SmileyFace